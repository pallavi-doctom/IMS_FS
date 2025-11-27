import React from "react";
import imsLogo from "./Assets/IMS_logo (2).png";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <>
      <style>{`
        body {
          font-family: 'Segoe UI', sans-serif;
          margin: 0;
          background-color: #0f172a;
          color: #f1f5f9;
        }

        /* Top Navigation */
        nav {
          background-color: #1e293b;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        nav .logo {
          font-size: 1.5rem;
          color: #38bdf8;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          margin: 0;
          padding: 0;
        }

        nav ul li {
          cursor: pointer;
          color: #cbd5e1;
        }

        nav .profile {
          background-color: #334155;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.9rem;
          color: #f1f5f9;
        }

        /* Hero (optional) */
        .hero {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(to right, #1e3a8a, #0f172a);
        }

        .hero h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.2rem;
          color: #cbd5e1;
          margin-bottom: 2rem;
        }

        .hero .highlights {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .highlight {
          background-color: #1e293b;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          min-width: 220px;
        }

        .highlight span {
          font-size: 1.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .cta-buttons {
          margin-top: 2rem;
        }

        .cta-buttons button {
          margin: 0 0.5rem;
          padding: 0.7rem 1.2rem;
          background-color: #38bdf8;
          border: none;
          border-radius: 8px;
          color: #0f172a;
          font-weight: bold;
          cursor: pointer;
        }

        /* Dashboard Tiles */
        .dashboard {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
        }

        .tile {
          background-color: #1e293b;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .tile h2 {
          font-size: 1rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        .tile p {
          font-size: 1.5rem;
          color: #38bdf8;
        }

        /* Chain of Events */
        .events-feed {
          background-color: #1e293b;
          padding: 2rem;
          margin: 2rem;
          border-radius: 12px;
        }

        .events-feed h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .event {
          border-bottom: 1px solid #334155;
          padding: 0.5rem 0;
          font-size: 0.95rem;
        }

        /* Form Section */
        .form-section {
          background-color: #1e293b;
          padding: 2rem;
          margin: 2rem;
          border-radius: 12px;
        }

        .form-section h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        form input, form select {
          padding: 0.8rem;
          background-color: #334155;
          border: none;
          border-radius: 8px;
          color: #f1f5f9;
        }

        form button {
          background-color: #38bdf8;
          padding: 0.8rem;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          color: #0f172a;
        }

        /* Footer */
        footer {
          text-align: center;
          padding: 2rem;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        nav ul li a {
          color: #cbd5e1;
          text-decoration: none;
        }

        nav ul li a:hover {
          color: #38bdf8;
        }

        /* Header Styling */
        header {
          background-color: #1e293b;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        /* Header Title */
        header h1 {
          font-size: 1.5rem;
          color: #38bdf8;
          letter-spacing: 1px;
          margin: 0;
        }

        /* Nav Styling */
        nav {
          display: flex;
          gap: 1.5rem;
        }

        nav a {
          color: #f1f5f9;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
        }

        nav a::after {
          content: '';
          display: block;
          width: 0%;
          height: 2px;
          background-color: #38bdf8;
          position: absolute;
          bottom: -5px;
          left: 0;
          transition: width 0.3s ease-in-out;
        }

        nav a:hover {
          color: #38bdf8;
        }

        nav a:hover::after {
          width: 100%;
        }

        button {
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          background-color: transparent;
          color: #f1f5f9;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }

        /* Underline effect like nav a */
        button::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0%;
          height: 2px;
          background-color: #38bdf8;
          transition: width 0.3s ease-in-out;
        }

        button:hover {
          color: #38bdf8;
          background-color: transparent; /* Keeps background clean */
        }

        button:hover::after {
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          font-weight: bold;
          font-size: 20px;
        }

        .logo-icon {
          width: 50px;
          height: 50px;
          margin-right: 8px;
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="logo">
          <img src={imsLogo} alt="Logo" className="logo-icon" />
          NEXO Inventory
        </div>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/supplychain">Supply Chain</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/alerts">Alert</Link>
          <Link to="/settings">Settings</Link>
        </nav>
        <button>
          <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
            Profile
          </Link>
        </button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Streamlining Supply Chains, One Connection at a Time.</h1>
        <p>Live, Predictive, and Transparent Inventory Management</p>
        <div className="highlights">
          <div className="highlight"><span>🔁</span>Real-time Multi-Industry Sync</div>
          <div className="highlight"><span>📈</span>AI-Driven Forecasting</div>
          <div className="highlight"><span>🔒</span>Secure & Transparent Tracking</div>
        </div>
        <div className="cta-buttons">
          <Link to="/dashboard">
            <button>Launch Dashboard</button>
          </Link>
          <Link to="/bookademo">
            <button>Book a Demo</button>
          </Link>
        </div>
      </section>

      {/* Dashboard Tiles */}
      <section className="dashboard">
        <div className="tile">
          <h2>🏪 Active Warehouses</h2>
          <p>5</p>
        </div>
        <div className="tile">
          <h2>📦 Stock Levels</h2>
          <p>2431 SKUs</p>
        </div>
        <div className="tile">
          <h2>🚚 Ongoing Shipments</h2>
          <p>7 (2 Delayed)</p>
        </div>
        <div className="tile">
          <h2>📉 Forecast Accuracy</h2>
          <p>92%</p>
        </div>
        <div className="tile">
          <h2>⚠️ Alerts Today</h2>
          <p style={{ color: "#facc15" }}>8</p>
        </div>
      </section>

      {/* Chain of Events */}
      <section className="events-feed">
        <h3>🔗 Live Chain of Events</h3>
        <div className="event">[12:32 PM] Supplier X updated 200 units of Product A</div>
        <div className="event">[12:28 PM] Manufacturer Y flagged a delay on Batch #1234</div>
        <div className="event">[12:20 PM] Alert: Distributor Z understocked</div>
        <div className="event">[12:15 PM] New shipment created by Warehouse 2</div>
      </section>

      {/* Quick Inventory Update Form */}
      <section className="form-section">
        <h3>📥 Quick Inventory Update</h3>
        <form action="/update" method="post">
          <input type="text" name="product_id" placeholder="Product ID" required />
          <input type="text" name="warehouse" placeholder="Warehouse Location" required />
          <input type="number" name="quantity" placeholder="Quantity" required />
          <select name="status">
            <option value="in_stock">In Stock</option>
            <option value="low_stock">Low Stock</option>
            <option value="out_of_stock">Out of Stock</option>
            <option value="delayed">Delayed</option>
          </select>
          <button
            type="button"
            onClick={async (e) => {
              e.preventDefault();

              // safely get values
              const updateData = {
                productId: document.getElementById("product_id").value,
                warehouse: document.getElementById("warehouse").value,
                quantity: parseInt(document.getElementById("quantity").value),
                status: document.getElementById("status").value
              };

              try {
                const res = await fetch("http://localhost:8080/api/products/quick-update", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(updateData)
                });

                if (!res.ok) throw new Error("Update failed");

                alert("Inventory updated!");
              } catch (err) {
                alert("Failed to update inventory.");
                console.error(err);
              }
            }}
          >
            Update Inventory
          </button>


        </form>
      </section>

      <footer>
        &copy; 2025 NEXO Inventory | Intelligent Inventory Management
      </footer>
    </>
  );
}