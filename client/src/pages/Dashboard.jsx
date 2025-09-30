import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import AccordionCard from '../components/AccordionCard/AccordionCard';
import ScanButton from '../components/ScanButton/ScanButton';
import ImplantCard from '../components/ImplantCard/ImplantCard';
import { getAllImplants } from '../services/api.js';
import "./dashboard.css";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("new");
  const [search, setSearch] = useState("");
  const [implants, setImplants] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  }

    useEffect(() => {
      const fetchImplants = async () => {
        try {
          const data = await getAllImplants(); // fetch from backend
          setImplants(data);
        } catch(err) {
          console.error(err);
        }
    };
    fetchImplants();
  }, [])

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div className="dashboard__search">
          <input
            type="text"
            placeholder="Search implants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button 
            className="dashboard__logout"
            onClick={handleLogout}>
                Logout
        </button>
      </header>

      <nav className="dashboard__tabs">
        <button
          className={`dashboard__tab ${
            activeTab === "new" ? "dashboard__tab--active" : ""
          }`}
          onClick={() => setActiveTab("new")}
        >
          New Implants
        </button>
        <button
          className={`dashboard__tab ${
            activeTab === "used" ? "dashboard__tab--active" : ""
          }`}
          onClick={() => setActiveTab("used")}
        >
          Used Implants
        </button>
      </nav>

      <main className="dashboard__content">
        {activeTab === "new" ? (
          <>
            <AccordionCard 
              title="BLX"
              type="new"
            >
              {implants
                .filter(impl => impl.implantName === 'BLX' && impl.status === 'new')
                .map((impl => (
                  <ImplantCard 
                    key={impl.id}
                    implantName={impl.implantName}
                    diameter={impl.diameter}
                    length={impl.length}
                    REF={impl.REF}
                    LOT={impl.LOT}
                    date={impl.addedAt}
                  />
                )))
              }
            </AccordionCard>
            <AccordionCard 
              title="BLC"
              type="new"
            >
              {implants
                .filter(impl => impl.implantName === 'BLC' && impl.status === 'new')
                .map((impl => (
                  <ImplantCard 
                    key={impl.id}
                    implantName={impl.implantName}
                    diameter={impl.diameter}
                    length={impl.length}
                    REF={impl.REF}
                    LOT={impl.LOT}
                    date={impl.addedAt}
                  />
                )))
              }
            </AccordionCard>
            <AccordionCard 
              title="BLT"
              type="new"
            >
              {implants
                .filter(impl => impl.implantName === 'BLT' && impl.status === 'new')
                .map((impl => (
                  <ImplantCard 
                    key={impl.id}
                    implantName={impl.implantName}
                    diameter={impl.diameter}
                    length={impl.length}
                    REF={impl.REF}
                    LOT={impl.LOT}
                    date={impl.addedAt}
                  />
                )))
              }
            </AccordionCard>
          </>
        ) : (
          <>
            <AccordionCard 
              title="BLX"
              type="used"
            >
              {implants
                .filter(impl => impl.implantName === 'BLX' && impl.status === 'used')
                .map((impl => (
                  <ImplantCard 
                    key={impl.id}
                    implantName={impl.implantName}
                    diameter={impl.diameter}
                    length={impl.length}
                    REF={impl.REF}
                    LOT={impl.LOT}
                    date={impl.usedAt}
                  />
                )))
              }
            </AccordionCard>
            <AccordionCard 
              title="BLC"
              type="used"
            >
              {implants
                .filter(impl => impl.implantName === 'BLC' && impl.status === 'used')
                .map((impl => (
                  <ImplantCard 
                    key={impl.id}
                    implantName={impl.implantName}
                    diameter={impl.diameter}
                    length={impl.length}
                    REF={impl.REF}
                    LOT={impl.LOT}
                    date={impl.usedAt}
                  />
                )))
              }
            </AccordionCard>
            <AccordionCard 
              title="BLT"
              type="used"
            >
              {implants
                .filter(impl => impl.implantName === 'BLT' && impl.status === 'used')
                .map((impl => (
                  <ImplantCard 
                    key={impl.id}
                    implantName={impl.implantName}
                    diameter={impl.diameter}
                    length={impl.length}
                    REF={impl.REF}
                    LOT={impl.LOT}
                    date={impl.usedAt}
                  />
                )))
              }
            </AccordionCard>
          </>
        )}
      </main>
      <ScanButton />
    </div>
  );
}

export default Dashboard;