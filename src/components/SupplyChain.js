import React from "react";
import { Link } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import "./Styles/SypplyChain.css"; // Import your original CSS as-is

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function SupplyChain() {
    // Chart.js datasets
    const bottleneckBarData = {
        labels: ["Supplier A", "Supplier B", "Manufacturer C", "Distributor D"],
        datasets: [
            {
                label: "Shipment Delays",
                data: [5, 12, 8, 4],
                backgroundColor: "#38bdf8",
            },
        ],
    };

    const deliveryRatePieData = {
        labels: ["On-Time", "Delayed", "In-Progress"],
        datasets: [
            {
                label: "Delivery Performance",
                data: [70, 20, 10],
                backgroundColor: ["#38bdf8", "#f97316", "#1e293b"],
            },
        ],
    };

    const supplierPerformanceBarData = {
        labels: ["Supplier A", "Supplier B", "Supplier C"],
        datasets: [
            {
                label: "Supplier Performance",
                data: [95, 80, 90],
                backgroundColor: "#10b981",
            },
        ],
    };

    return (
        <div className="body">
            {/* Header */}
            <header>
                <h1>NEXO Inventory</h1>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/analytics">Analytics</Link>
                    <Link to="/alerts">Alert</Link>
                    <Link to="/settings">Settings</Link>
                </nav>
            </header>

            {/* Hero */}
            <div className="hero">
                <h1>Supply Chain Overview</h1>
            </div>

            {/* Overview Cards */}
            <section className="overview">
                <div className="tile">
                    <h2>Total Shipments</h2>
                    <p>150</p>
                </div>
                <div className="tile">
                    <h2>In-Transit</h2>
                    <p>50</p>
                </div>
                <div className="tile">
                    <h2>Delivered</h2>
                    <p>100</p>
                </div>
                <div className="tile">
                    <h2>Delayed</h2>
                    <p>5</p>
                </div>
            </section>

            {/* Bottleneck Detection (Chart.js) */}
            <section className="bottleneck-section">
                <h2>Bottleneck Detection</h2>
                <Bar data={bottleneckBarData} options={{ responsive: true }} />
            </section>

            {/* Shipment Tracking */}
            <section className="shipment-tracking">
                <h2>Shipment Tracking</h2>
                <input type="text" placeholder="Search Shipment ID or Status" />
                <table className="shipment-table">
                    <thead>
                        <tr>
                            <th>Shipment ID</th>
                            <th>Status</th>
                            <th>Sender</th>
                            <th>Receiver</th>
                            <th>Supplier</th>
                            <th>Manufacturer</th>
                            <th>Distributor</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SH12345</td>
                            <td>In-Transit</td>
                            <td>Company A</td>
                            <td>Company B</td>
                            <td>Supplier X</td>
                            <td>Manufacturer Y</td>
                            <td>Distributor Z</td>
                            <td>High</td>
                            <td>
                                <a href="track" className="button-link">
                                    Track
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Analytics Section (Chart.js) */}
            <section className="analytics-section">
                <h2>Supply Chain Analytics</h2>
                <div className="analytics-cards">
                    <div className="analytics-card">
                        <h3>On-Time Delivery Rate</h3>
                        <Pie data={deliveryRatePieData} options={{ responsive: true }} />
                    </div>
                    <div className="analytics-card">
                        <h3>Supplier Performance</h3>
                        <Bar data={supplierPerformanceBarData} options={{ responsive: true }} />
                    </div>
                </div>
            </section>

            {/* Inventory Movement */}
            <section className="inventory-movement">
                <h2>Inventory Movement</h2>
                <table className="inventory-table">
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Name</th>
                            <th>Current Stock</th>
                            <th>In-Transit</th>
                            <th>Dispatched</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1234</td>
                            <td>Item A</td>
                            <td>100</td>
                            <td>50</td>
                            <td>25</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Map */}
            <section className="map-section">
                <h2>Track Shipments on Map</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7210317940766!2d90.41006001445666!3d23.810300084596803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c710ae4e42b9%3A0xc804f1d29b5a5ff1!2sSadar%20Ghat!5e0!3m2!1sen!2sbd!4v1655785195170!5m2!1sen!2sbd"
                    width="800"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Shipment Map"
                ></iframe>
            </section>

            {/* Charts Section (pure CSS visualizations) */}
            <section className="charts-section">
                {/* Shipment Bottlenecks */}
                <div className="chart-box">
                    <h2>Shipment Bottlenecks</h2>
                    <div className="horizontal-bars">
                        <div className="bar-row">
                            <span>Warehouse</span>
                            <div className="bar-fill w80"></div>
                        </div>
                        <div className="bar-row">
                            <span>Customs</span>
                            <div className="bar-fill w60"></div>
                        </div>
                        <div className="bar-row">
                            <span>Carrier</span>
                            <div className="bar-fill w40"></div>
                        </div>
                    </div>
                </div>

                {/* Delivery Performance */}
                <div className="chart-box">
                    <h2>Delivery Performance</h2>
                    <div className="progress-ring">
                        <svg className="ring" width="120" height="120">
                            <circle className="bg" cx="60" cy="60" r="50" />
                            <circle className="progress" cx="60" cy="60" r="50" />
                        </svg>
                        <div className="ring-text">92%</div>
                    </div>
                </div>

                {/* Supplier Performance */}
                <div className="chart-box">
                    <h2>Supplier Performance</h2>
                    <div className="supplier-bars">
                        <div className="supplier">
                            <span>Supplier A</span>
                            <div className="rating-bar bar-a"></div>
                        </div>
                        <div className="supplier">
                            <span>Supplier B</span>
                            <div className="rating-bar bar-b"></div>
                        </div>
                        <div className="supplier">
                            <span>Supplier C</span>
                            <div className="rating-bar bar-c"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>&copy; 2025 ChainTrack. All rights reserved.</footer>
        </div>
    );
}