import React from "react";
import { Link } from "react-router-dom";

export default function Features() {
    return (
        <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            <style>{`
        body {
          background-color: #0f172a;
          color: #f1f5f9;
          margin: 0;
          padding: 0;
        }
        header {
          text-align: center;
          padding: 4rem 1.5rem;
          background-color: #1e293b;
          box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        }
        header h1 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #38bdf8;
          margin-bottom: 0.75rem;
        }
        header p {
          color: #cbd5e1;
          font-size: 1.125rem;
          max-width: 48rem;
          margin: 0 auto;
        }
        section {
          padding: 4rem 1.5rem;
          max-width: 80rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 768px) {
          section {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          section {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .feature-card {
          background-color: #1e293b;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.4);
          transition: box-shadow 0.3s ease;
        }
        .feature-card:hover {
          box-shadow: 0 0 10px #38bdf8;
        }
        .feature-card h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #38bdf8;
          margin-bottom: 0.5rem;
        }
        .feature-card p {
          color: #cbd5e1;
        }
      `}</style>

            {/* Header */}
            <header>
                <h1>Explore Our Features</h1>
                <p>
                    A dynamic, modular platform designed to unify inventory, operations,
                    and smart business decisions across industries.
                </p>
            </header>

            {/* Features Section */}
            <section>
                <div className="feature-card">
                    <h2>Real-Time Inventory</h2>
                    <p>Live updates across warehouses with QR/barcode input support for instant visibility.</p>
                </div>

                <div className="feature-card">
                    <h2>Multi-Industry Templates</h2>
                    <p>Fashion, food, and retail-specific fields like expiry, fabric, SKUs, and batch tracking.</p>
                </div>

                <div className="feature-card">
                    <h2>AI Demand Forecasting</h2>
                    <p>Predict stock needs using trends, seasons, and buying behavior.</p>
                </div>

                <div className="feature-card">
                    <h2>Automated Alerts</h2>
                    <p>Receive alerts for low stock, near-expiry items, or overstock via email/SMS.</p>
                </div>

                <div className="feature-card">
                    <h2>Smart Dashboards</h2>
                    <p>Visual graphs on inventory turnover, alerts, and live stock levels.</p>
                </div>

                <div className="feature-card">
                    <h2>Role-Based Access</h2>
                    <p>Secure login for Admins, Managers, and Staff with fine-grained permissions.</p>
                </div>

                <div className="feature-card">
                    <h2>Custom Integrations</h2>
                    <p>Plug into Shopify, WooCommerce, GST billing, or Tally with ease.</p>
                </div>

                <div className="feature-card">
                    <h2>Mobile Compatible</h2>
                    <p>Access inventory anywhere with our PWA-compatible mobile-first UI.</p>
                </div>

                <div className="feature-card">
                    <h2>Future-Proof Ideas</h2>
                    <p>Voice assistant, offline mode, and IoT sensors planned for upcoming releases.</p>
                </div>
                <Link to="/login">
                    <button type="button">
                        ← Back to login
                    </button>
                </Link>
            </section>
        </div>
    );
}