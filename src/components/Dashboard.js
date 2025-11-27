import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
          background-color: #0f172a;
          padding: 20px;
          color: #f1f5f9;
        }
        h2, h3 {
          color: #f1f5f9;
          margin-bottom: 10px;
        }
        .dashboard-form {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .section {
          background: #1e293b;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .kpi-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .kpi {
          flex: 1 1 200px;
          background: #1e293b;
          padding: 15px;
          border-radius: 12px;
          text-align: center;
          font-weight: bold;
          color: #38bdf8;
          border: 1px solid #334155;
        }
        .charts, .quick-actions-alerts, .ai-activity {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .chart-box, .action-box, .alert-box, .ai-box, .log-box {
          flex: 1;
          min-width: 280px;
          background: #1e293b;
          padding: 15px;
          border-radius: 12px;
          border: 1px solid #334155;
        }
        .form-row {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #cbd5e1;
        }
        input, select, textarea {
          width: 100%;
          padding: 10px;
          background: #0f172a;
          color: #f1f5f9;
          border: 1px solid #334155;
          border-radius: 8px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #38bdf8;
          color: #0f172a;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:hover {
          background-color: #0ea5e9;
        }
        ul li {
          margin: 8px 0;
          color: #cbd5e1;
        }
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
        header h1 {
          font-size: 1.5rem;
          color: #38bdf8;
          letter-spacing: 1px;
          margin: 0;
        }
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
        .chart {
          position: relative;
          height: 200px;
          width: 100%;
          margin-bottom: 20px;
          border-radius: 8px;
          background: #334155;
        }
        .bar {
          position: absolute;
          bottom: 0;
          width: 30px;
          border-radius: 5px;
          transition: height 0.5s;
        }
        .bar1 { height: 80%; left: 10px; background-color: #4caf50; }
        .bar2 { height: 60%; left: 50px; background-color: #ff9800; }
        .bar3 { height: 70%; left: 90px; background-color: #9c27b0; }
        .bar4 { height: 40%; left: 130px; background-color: #e91e63; }
        .bar5 { height: 50%; left: 170px; background-color: #2196f3; }
        .line-chart {
          width: 100%;
          height: 150px;
          position: relative;
          background-color: #334155;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #ff5722, #e91e63);
          top: 50%;
          left: 0;
        }
        .line-point {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #ff5722;
          border-radius: 50%;
        }
        .line-point-1 { top: 35%; left: 20%; }
        .line-point-2 { top: 25%; left: 50%; background-color: #e91e63; }
        .line-point-3 { top: 55%; left: 80%; background-color: #9c27b0; }
        .pie-chart {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: conic-gradient(
            #4caf50 0% 40%,
            #ff9800 40% 70%,
            #9c27b0 70% 100%
          );
          margin: auto;
        }
        .button-link {
          display: inline-block;
          width: 100%;
          padding: 10px;
          background-color: #38bdf8;
          color: #0f172a;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .button-link:hover {
          background-color: #0ea5e9;
        }
      `}</style>

            <header>
                <h1>NEXO Inventory</h1>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/supplychain">Supply Chain</Link>
                    <Link to="/analytics">Analytics</Link>
                    <Link to="/alerts">Alert</Link>
                    <Link to="/settings">Settings</Link>
                </nav>
            </header>

            <form className="dashboard-form">
                <div className="section">
                    <h2>Key Metrics</h2>
                    <div className="kpi-cards">
                        <div className="kpi">Active Warehouses: 12</div>
                        <div className="kpi">Total Products: 842</div>
                        <div className="kpi">Shipments in Progress: 27</div>
                        <div className="kpi">Forecast Accuracy: 92%</div>
                        <div className="kpi">Today's Alerts: 5</div>
                        <div className="kpi">Partner Sync: Good</div>
                    </div>
                </div>

                <div className="section">
                    <h2>Analytics Overview</h2>
                    <div className="charts">
                        <div className="chart-box">
                            <h3>Stock Levels</h3>
                            <div className="chart">
                                <div className="bar bar1"></div>
                                <div className="bar bar2"></div>
                                <div className="bar bar3"></div>
                                <div className="bar bar4"></div>
                                <div className="bar bar5"></div>
                            </div>
                        </div>
                        <div className="chart-box">
                            <h3>Forecast vs Actual</h3>
                            <div className="line-chart">
                                <div className="line"></div>
                                <div className="line-point line-point-1"></div>
                                <div className="line-point line-point-2"></div>
                                <div className="line-point line-point-3"></div>
                            </div>
                        </div>
                        <div className="chart-box">
                            <h3>Most Moved Products</h3>
                            <div className="pie-chart"></div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>Quick Actions & Alerts</h2>
                    <div className="quick-actions-alerts">
                        <div className="action-box">
                            <h3>Quick Actions</h3>
                            <div className="form-row">
                                <Link to="/addproducts" className="button-link">Add Products</Link>
                            </div>
                            <div className="form-row">
                                <Link to="/createshipment" className="button-link">Create Shipment</Link>
                            </div>
                            <div className="form-row">
                                <Link to="/updateinventory" className="button-link">Update Inventory</Link>
                            </div>
                            <div className="form-row">
                                <Link to="/exportreport" className="button-link">Export Report</Link>
                            </div>
                            <div className="form-row">
                                <Link to="/runforecast" className="button-link">Run Forecast</Link>
                            </div>
                        </div>
                        <div className="alert-box">
                            <h3>Alerts Feed</h3>
                            <ul>
                                <li>🔴 Low Stock - Item 124 (Mumbai)</li>
                                <li>🟡 Shipment delayed - #WX234</li>
                                <li>🟢 Sync successful with Supplier B</li>
                                <li>🔴 Forecast deviation detected</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>AI Insights & Activity Log</h2>
                    <div className="ai-activity">
                        <div className="ai-box">
                            <h3>AI Suggestions</h3>
                            <ul>
                                <li>📦 Move 300 units from Delhi to Jaipur</li>
                                <li>🔮 Predicting stock-out in 6 days for Item 76</li>
                                <li>📈 Over-prediction alert: Product X</li>
                            </ul>
                        </div>
                        <div className="log-box">
                            <h3>Recent Activity</h3>
                            <ul>
                                <li>User Admin added Product #784</li>
                                <li>API update from Supplier A</li>
                                <li>Forecast run completed</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>Supply Chain Overview</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7210317940766!2d90.41006001445666!3d23.810300084596803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c710ae4e42b9%3A0xc804f1d29b5a5ff1!2sSadar%20Ghat!5e0!3m2!1sen!2sbd!4v1655785195170!5m2!1sen!2sbd"
                        width="800"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Supply Chain Map"
                    ></iframe>
                </div>

                <div className="section">
                    <h2>Customize Dashboard</h2>
                    <div className="form-row">
                        <label htmlFor="theme">Theme</label>
                        <select id="theme" name="theme">
                            <option>Light</option>
                            <option selected>Dark</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="filters">Filter by Region</label>
                        <select id="filters" name="filters">
                            <option>All</option>
                            <option>North India</option>
                            <option>South India</option>
                            <option>West Coast</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <button type="submit">Save Preferences</button>
                    </div>
                </div>
            </form>
        </div>
    );
}