import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RunForecast() {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            productName: e.target.productName.value,
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
            forecastModel: e.target.forecastModel.value,
            historicalData: parseInt(e.target.historicalData.value)
        };

        try {
            const response = await fetch("http://localhost:8080/api/forecast/run", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.text();
            console.log(result);

            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);

        } catch (error) {
            console.error("Forecast error:", error);
            alert("Failed to generate forecast.");
        }
    };


    return (
        <div>
            <style>
                {`
      :root {
        --bg-dark: #0f172a;
        --nav-bg: #1e293b;
        --input-bg: #334155cc;
        --accent-blue: #38bdf8;
        --text-light: #f1f5f9;
        --text-secondary: #94a3b8;
        --glass-bg: rgba(30, 41, 59, 0.6);
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #0f172a, #1e293b);
        color: var(--text-light);
        background-size: 400% 400%;
        animation: bgMove 20s ease infinite;
        overflow-x: hidden;
      }
      @keyframes bgMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
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
        animation: fadeSlideDown 1s ease-out;
      }
      @keyframes fadeSlideDown {
        0% { opacity: 0; transform: translateY(-40px); }
        100% { opacity: 1; transform: translateY(0); }
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
        font-size: 0.95rem;
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
      .slide-container {
        animation: slideInRight 0.8s ease-out forwards;
        opacity: 0;
        transform: translateX(100%);
      }
      @keyframes slideInRight {
        to {
          opacity: 1;
          transform: translateX(0%);
        }
      }
      .container {
        margin: 2rem auto;
        width: 90%;
        max-width: 800px;
        padding: 2.5rem;
        background: var(--glass-bg);
        backdrop-filter: blur(15px);
        border-radius: 1rem;
        border: 1px solid rgba(255,255,255,0.1);
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: fadeInContent 1.2s ease;
      }
      @keyframes fadeInContent {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      h2 {
        text-align: center;
        color: var(--accent-blue);
        margin-bottom: 2rem;
      }
      .form-group {
        position: relative;
        margin-bottom: 2rem;
      }
      .form-group input,
      .form-group select {
        width: 100%;
        padding: 1rem 0.75rem;
        background-color: var(--input-bg);
        border: none;
        border-radius: 0.6rem;
        color: var(--text-light);
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;
      }
      .form-group input:focus,
      .form-group select:focus {
        box-shadow: 0 0 10px var(--accent-blue);
        transform: scale(1.02);
      }
      .form-group label {
        position: absolute;
        top: 1rem;
        left: 0.75rem;
        color: var(--text-secondary);
        pointer-events: none;
        transition: 0.3s ease;
      }
      .form-group input:focus + label,
      .form-group input:not(:placeholder-shown) + label,
      .form-group select:focus + label,
      .form-group select:not(:placeholder-shown) + label {
        top: -0.8rem;
        left: 0.6rem;
        background-color: var(--nav-bg);
        padding: 0 0.5rem;
        font-size: 0.75rem;
        color: var(--accent-blue);
      }
      button {
        width: 100%;
        padding: 1rem;
        background-color: var(--accent-blue);
        border: none;
        border-radius: 0.8rem;
        color: var(--bg-dark);
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px var(--accent-blue);
      }
      .popup {
        display: none;
        text-align: center;
        margin-top: 1.5rem;
        padding: 1rem;
        background-color: #0ea5e9;
        color: var(--bg-dark);
        font-weight: bold;
        border-radius: 0.5rem;
        animation: fadePopup 1s ease-out;
      }
      @keyframes fadePopup {
        0% { transform: scale(0.9); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .popup.show { display: block; }
        `}
            </style>
            <header>
                <h1>NEXO Inventory</h1>
                <nav>
                    <a href="Home">Home</a>
                    <a href="inventory">Inventory</a>
                    <a href="supplychain">Supply Chain</a>
                    <a href="analytics">Analytics</a>
                    <a href="alerts">Alerts</a>
                    <a href="settings">Settings</a>
                </nav>
            </header>
            <div className="slide-container">
                <div className="container">
                    <h2>Generate Product Forecast</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="productName" name="productName" placeholder=" " required />
                            <label htmlFor="productName">Product Name</label>
                        </div>
                        <div className="form-group">
                            <input type="date" id="startDate" name="startDate" required />
                            <label htmlFor="startDate">Start Date</label>
                        </div>
                        <div className="form-group">
                            <input type="date" id="endDate" name="endDate" required />
                            <label htmlFor="endDate">End Date</label>
                        </div>
                        <div className="form-group">
                            <select id="forecastModel" name="forecastModel" required defaultValue="">
                                <option value="" disabled>Select Forecasting Model</option>
                                <option value="arima">ARIMA</option>
                                <option value="exponential">Exponential Smoothing</option>
                                <option value="regression">Linear Regression</option>
                                <option value="ml">Machine Learning Model</option>
                            </select>
                            <label htmlFor="forecastModel">Forecast Model</label>
                        </div>
                        <div className="form-group">
                            <input type="number" id="historicalData" name="historicalData" placeholder=" " required />
                            <label htmlFor="historicalData">Historical Data</label>
                        </div>
                        <button type="submit">🔮 Generate Forecast</button>
                        <br /><br />
                        <Link to="/dashboard">
                            <button type="button">
                                ← Back to Dashboard
                            </button>
                        </Link>
                    </form>
                    <div className={`popup${showSuccess ? " show" : ""}`}>✅ Forecast Generated Successfully!</div>
                </div>
            </div>
        </div>
    );
}