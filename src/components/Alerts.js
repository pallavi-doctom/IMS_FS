import React from "react";
import { Link } from "react-router-dom";

const Alerts = () => {
    return (
        <div>
            <style>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #0f172a;
          color: #f1f5f9;
        }

        nav {
          background-color: #1e293b;
          color: #f1f5f9;
          padding: 1rem;
          text-align: center;
        }

        .container {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 1rem;
        }

        h2 {
          color: #38bdf8;
          text-align: center;
          margin-bottom: 2rem;
        }

        .alert-table {
          width: 100%;
          border-collapse: collapse;
          background-color: #1e293b;
          border-radius: 10px;
          overflow: hidden;
        }

        .alert-table th, .alert-table td {
          padding: 1rem;
          text-align: left;
        }

        .alert-table th {
          background-color: #334155;
          color: #f1f5f9;
        }

        .alert-table tr:nth-child(even) {
          background-color: #273549;
        }

        .alert-table tr:nth-child(odd) {
          background-color: #1e293b;
        }

        .alert-table td {
          color: #cbd5e1;
        }

        .severity-low {
          color: #10b981;
        }

        .severity-medium {
          color: #facc15;
        }

        .severity-high {
          color: #ef4444;
        }

        .reorder-btn {
          background-color: #38bdf8;
          border: none;
          color: #0f172a;
          padding: 0.4rem 0.8rem;
          border-radius: 5px;
          cursor: pointer;
        }

        .reorder-btn:hover {
          background-color: #0ea5e9;
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
      `}</style>

            {/* ✅ New Header/Navbar */}
            <header>
                <h1>NEXO Inventory</h1>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/supplychain">Supply Chain</Link>
                    <Link to="/analytics">Analytics</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/settings">Settings</Link>
                </nav>
            </header>

            <nav>
                <h1>Inventory Alerts</h1>
            </nav>

            <div className="container">
                <h2>Current Alerts</h2>
                <table className="alert-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Alert Type</th>
                            <th>Severity</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Product A</td>
                            <td>Low Stock</td>
                            <td className="severity-medium">Medium</td>
                            <td>2025-05-07</td>
                            <td><button className="reorder-btn">Reorder</button></td>
                        </tr>
                        <tr>
                            <td>Product B</td>
                            <td>Out of Stock</td>
                            <td className="severity-high">High</td>
                            <td>2025-05-06</td>
                            <td><button className="reorder-btn">Reorder</button></td>
                        </tr>
                        <tr>
                            <td>Product C</td>
                            <td>Expiry Near</td>
                            <td className="severity-low">Low</td>
                            <td>2025-05-05</td>
                            <td><button className="reorder-btn">Check</button></td>
                        </tr>
                        <tr>
                            <td>Product D</td>
                            <td>Low Stock</td>
                            <td className="severity-medium">Medium</td>
                            <td>2025-05-04</td>
                            <td><button className="reorder-btn">Reorder</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alerts;