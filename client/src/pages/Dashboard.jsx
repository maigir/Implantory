import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { LuDiameter } from "react-icons/lu";
import AccordionCard from '../components/AccordionCard/AccordionCard';
import ScanButton from '../components/ScanButton/ScanButton';
import ImplantCard from '../components/ImplantCard/ImplantCard';
import FormModal from '../components/Modal/FormModal';
import Modal from '../components/Modal/Modal';
import { getAllImplants, postNewImplant, deleteImplant } from '../services/api.js';
import "./dashboard.css";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("new");
  const [search, setSearch] = useState("");
  const [implants, setImplants] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const navigate = useNavigate();

  const tabTypes = ['new', 'used'];
  const implantTypes = ['BLX', 'BLC', 'BLT'];
  const tableHeaders = ['Name', 'Diameter', 'Length', 'REF', 'LOT', 'Date', 'Status'];

  // TODO: proper login-system (tokens, jwt)
  // at the moment, dummy login + PrivateRoute.jsx -> main.jsx
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  }

  const handleAddImplant = async (newImplants) => {
    try {
      const savedImplant = await postNewImplant(newImplants);
      setImplants(prev => [...prev, savedImplant]);
      setIsModalOpen(false);

      // console.log("New implant saved:", savedImplant);
    } catch (err) {
        console.error("Failed to add implant:", err);
    }
  }

  const handleDelete = async (id) => {
    try {
    await deleteImplant(id); 
    fetchImplants();
    } catch(err) {
      console.error('Failed to delete:', err);
    }
  }

  const fetchImplants = async () => {
    try {
      const data = await getAllImplants(); // fetch from backend
      setImplants(data);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImplants();
  }, [])


  useEffect(() => {
    if(!search.trim()) {
      setSearchResult([]);
      return;
    }
    const multipleTerms = search.toLowerCase().split(" ");
    const filtered = implants.filter(implant => {  
      const implantText = Object.values(implant)
        .join(" ")
        .toLowerCase();
      return multipleTerms.every(multiple => implantText.includes(multiple));
    });

    setSearchResult(filtered)
  }, [search, implants])


  return (
    <div className="dashboard">
      {/* ----------------- HEADER ------------------ */}
      <header className="dashboard__header">
        <button 
          className="button"
          onClick={() => setIsModalOpen(true)}
        >
          + Add
        </button>

        {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          {<FormModal onSubmit={handleAddImplant} />}
        </Modal>
      )}
    
        <input
          className="dashboard__search-input"
          type="text"
          placeholder="Search implants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button 
            className="button"
            onClick={handleLogout}>
                Logout
        </button>
      </header>

      {/* _________________ TABS ___________________ */}
      {search.trim() === "" && (
        <nav className="dashboard__tabs">
          {tabTypes.map(tab => (
            <button
              key={tab}
              className={`dashboard__tab ${
                activeTab === tab ? 'dashboard__tab-active' : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'new' ? 'New Implants' : 'Used implants'}
          </button>
          ))}
        </nav>
      )}

      <main className="dashboard__content">
        {search.trim() ? (
          <>
          {/* ----------------- SEARCH CONTAINER ----------------  */}
            {searchResult.length > 0 ? (
              <div className="dashboard__search-results">
                <table className="dashboard__table">
                  <thead>
                    <tr className="dashboard__table-row">
                      {tableHeaders.map(header => (
                        <th key={header} className="dashboard__table-header">
                          {header === 'Diameter' ? <LuDiameter /> : header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {searchResult.map(impl => (
                      <tr key={impl.id} className="dashboard__table-row">
                        {[
                          impl.implantName,
                          impl.diameter,
                          impl.length,
                          impl.REF,
                          impl.LOT,
                          impl.status === 'new' ? impl.addedAt : impl.usedAt,
                          impl.status,
                        ].map((value, key) => (
                          <td key={key} className="dashboard__table-cell">
                            {value}
                          </td>
                        ))
                        }
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No results found for "{search}"</p>
            )}
          </>
        ) : activeTab === 'new' ? (
          <>
            {implantTypes.map(type => (
              <AccordionCard 
                key={type}
                title={type}
                type={activeTab}
                isOpen={openAccordion === type}
                onToggle={() => 
                  setOpenAccordion(openAccordion === type ? null : type)
                }
              >
                {implants
                  .filter(impl => impl.implantName === type && impl.status === activeTab)
                  .map((impl => (
                    <ImplantCard 
                      key={impl.id}
                      implantName={impl.implantName}
                      diameter={impl.diameter}
                      length={impl.length}
                      REF={impl.REF}
                      LOT={impl.LOT}
                      date={activeTab === 'new' ? impl.addedAt : impl.usedAt}
                      onDelete={() => handleDelete(impl.id)}
                    />
                  )))
                }
              </AccordionCard>
            ))}
          </>
        ) : (
          <>
            {implantTypes.map(type => (
              <AccordionCard 
                key={type}
                title={type}
                type={activeTab}
                isOpen={openAccordion === type}
                onToggle={() => 
                  setOpenAccordion(openAccordion === type ? null : type)
                }
              >
                {implants
                  .filter(impl => impl.implantName === type && impl.status === activeTab)
                  .map((impl => (
                    <ImplantCard 
                      key={impl.id}
                      implantName={impl.implantName}
                      diameter={impl.diameter}
                      length={impl.length}
                      REF={impl.REF}
                      LOT={impl.LOT}
                      date={activeTab === 'new' ? impl.addedAt : impl.usedAt}
                      onDelete={() => handleDelete(impl.id)}
                    />
                  )))
                }
              </AccordionCard>
            ))}
          </>
        )}
      </main>
      <ScanButton />
    </div>
  );
}
export default Dashboard;