import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import "./Styles/Analytics.css";
import { Link } from "react-router-dom";

const Analytics = () => {
    const stockRef = useRef(null);
    const categoryRef = useRef(null);
    const topRef = useRef(null);

    // Store chart instances so we can destroy them later
    const stockChartRef = useRef(null);
    const categoryChartRef = useRef(null);
    const topChartRef = useRef(null);

    useEffect(() => {
        // Destroy old charts before creating new ones
        if (stockChartRef.current) stockChartRef.current.destroy();
        if (categoryChartRef.current) categoryChartRef.current.destroy();
        if (topChartRef.current) topChartRef.current.destroy();

        // Stock Levels Line Chart
        stockChartRef.current = new Chart(stockRef.current, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [
                    {
                        label: "Stock Levels",
                        data: [120, 150, 170, 140, 180],
                        backgroundColor: "rgba(56, 189, 248, 0.2)",
                        borderColor: "#38bdf8",
                        borderWidth: 2,
                    },
                ],
            },
            options: { responsive: true, maintainAspectRatio: false },
        });

        // Category-wise Pie Chart
        categoryChartRef.current = new Chart(categoryRef.current, {
            type: "pie",
            data: {
                labels: ["Electronics", "Apparel", "Food"],
                datasets: [
                    {
                        data: [300, 150, 100],
                        backgroundColor: ["#38bdf8", "#f97316", "#10b981"],
                    },
                ],
            },
            options: { responsive: true, maintainAspectRatio: false },
        });

        // Top Performing Products Bar Chart
        topChartRef.current = new Chart(topRef.current, {
            type: "bar",
            data: {
                labels: ["Product A", "Product B", "Product C"],
                datasets: [
                    {
                        label: "Sales",
                        data: [200, 300, 250],
                        backgroundColor: "#8b5cf6",
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } },
            },
        });

        // Cleanup when leaving the page
        return () => {
            if (stockChartRef.current) stockChartRef.current.destroy();
            if (categoryChartRef.current) categoryChartRef.current.destroy();
            if (topChartRef.current) topChartRef.current.destroy();
        };
    }, []);

    return (
        <div>
            {/* Header */}
            <header>
                <h1>NEXO Inventory</h1>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/supplychain">Supply Chain</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/alerts">Alert</Link>
                    <Link to="/settings">Settings</Link>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <h2>Analytics Overview</h2>
                <div className="filters">
                    <input type="date" id="startDate" />
                    <input type="date" id="endDate" />
                    <select id="categoryFilter">
                        <option value="all">All Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="apparel">Apparel</option>
                        <option value="food">Food</option>
                    </select>
                </div>
            </section>

            {/* Dashboard */}
            <section className="dashboard">
                <div className="card">
                    <h3>Stock Levels Over Time</h3>
                    <canvas ref={stockRef}></canvas>
                </div>
                <div className="card">
                    <h3>Category-wise Inventory</h3>
                    <canvas ref={categoryRef}></canvas>
                </div>
                <div className="card">
                    <h3>Top Performing Products</h3>
                    <canvas ref={topRef}></canvas>
                </div>
                <div className="card">
                    <h3>Restock Alerts</h3>
                    <ul id="restockAlerts">
                        <li>Product A - Low Stock!</li>
                        <li>Product B - Reorder Needed</li>
                        <li>Product C - Critical Level</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Analytics;