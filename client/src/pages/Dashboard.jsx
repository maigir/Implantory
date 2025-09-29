import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AccordionCard from '../components/AccordionCard';
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

      {/* Tabs */}
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

      {/* Content */}
      <main className="dashboard__content">
        {activeTab === "new" ? (
          <>
            <AccordionCard />
            <AccordionCard />
            <AccordionCard />
          </>
        ) : (
          <>
            <AccordionCard />
            <AccordionCard />
            <AccordionCard />
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;