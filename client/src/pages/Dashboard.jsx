import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AccordionCard from '../components/AccordionCard';
import ScanButton from '../components/ScanButton';
// import ImplantCard from '../components/ImplantCard';
import "./dashboard.css";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("new");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  }

  // TODO: search logic 

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
            />
            <AccordionCard 
              title="BLC"
              type="new"
            />
            <AccordionCard 
              title="BLT"
              type="new"
            />
          </>
        ) : (
          <>
            <AccordionCard 
              title="BLX"
              type="used"
            />
            <AccordionCard 
              title="BLC"
              type="used"
            />
            <AccordionCard 
              title="BLT"
              type="used"
            />
          </>
        )}
      </main>
      <ScanButton />
    </div>
  );
}

export default Dashboard;