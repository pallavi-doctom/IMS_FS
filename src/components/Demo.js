import React from "react";
import { Link } from "react-router-dom";

export default function BookDemo() {
    return (
        <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #111a30;
          color: white;
        }
        header {
          background-color: #111a30;
          padding: 20px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
        }
        .banner {
          background-color: #1b3475;
          padding: 40px 20px;
          text-align: center;
        }
        .banner h1 {
          font-size: 36px;
          margin-bottom: 10px;
        }
        .banner p {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 20px;
        }
        .banner button {
          background-color: #5a9ac4;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
        }
        .form-section {
          background-color: #1b2840;
          max-width: 500px;
          margin: 40px auto;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }
        .form-section h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin: 10px 0 5px;
          color: #cbd5e1;
        }
        input, textarea {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 4px;
          margin-bottom: 15px;
          background-color: #49556d;
          color: white;
        }
        input:focus, textarea:focus {
          outline: 2px solid #5a9ac4;
        }
        .submit-btn {
          background-color: #5a9ac4;
          color: white;
          padding: 12px;
          width: 100%;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
        }
        footer {
          background-color: #111a30;
          text-align: center;
          padding: 15px;
          margin-top: 40px;
          color: #cbd5e1;
          font-size: 14px;
        }
      `}</style>

            <header>NEXO IMS</header>

            <div className="banner">
                <h1>Book Your Free Demo</h1>
                <p>Experience our platform in action — no commitments.</p>
            </div>

            <div className="form-section">
                <h2>Schedule a Demo</h2>
                <form>
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" required />

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />

                    <label>Company</label>
                    <input type="text" placeholder="Enter your company name" />

                    <label>Message</label>
                    <textarea rows="4" placeholder="Tell us about your needs"></textarea>

                    <button className="submit-btn" type="submit">Book Demo</button>
                    <Link to="/home">
                        <button type="button">
                            ← Back to Home
                        </button>
                    </Link>
                </form>
            </div>

            <footer>© 2025 NEXO IMS. All rights reserved.</footer>
        </div>
    );
}