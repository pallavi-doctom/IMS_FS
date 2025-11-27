import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Settings = () => {
    const navigate = useNavigate();
    return (
        <div>
            <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #0f172a;
          color: #f1f5f9;
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
          align-items: center;
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

        nav button {
          background-color: #38bdf8;
          color: #0f172a;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        nav button:hover {
          background-color: #0ea5e9;
        }

        .settings-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 40px 20px;
        }

        .settings-box {
          background-color: #1e293b;
          padding: 30px;
          border-radius: 16px;
          width: 100%;
          max-width: 900px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }

        .settings-title {
          font-size: 32px;
          margin-bottom: 30px;
          color: #38bdf8;
        }

        .settings-section {
          margin-bottom: 36px;
        }

        .settings-section h2 {
          font-size: 20px;
          margin-bottom: 12px;
          color: #f1f5f9;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"],
        select {
          width: 100%;
          padding: 12px;
          margin-bottom: 12px;
          border: none;
          border-radius: 8px;
          background-color: #334155;
          color: #f1f5f9;
          font-size: 16px;
        }

        input::placeholder,
        select {
          color: #94a3b8;
        }

        .save-btn {
          background-color: #38bdf8;
          color: #0f172a;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .save-btn:hover {
          background-color: #0ea5e9;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
          margin-right: 10px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          background-color: #ccc;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: 0.4s;
          border-radius: 34px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #38bdf8;
        }

        input:checked + .slider:before {
          transform: translateX(26px);
        }

        .notif-label {
          font-size: 16px;
          color: #cbd5e1;
        }

        .danger-zone {
          background-color: #334155;
          padding: 16px;
          border-radius: 12px;
          color: #f87171;
        }

        .delete-btn {
          background-color: transparent;
          color: #f87171;
          border: 1px solid #f87171;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .delete-btn:hover {
          background-color: #f87171;
          color: #0f172a;
        }

        .log-box {
          background-color: #334155;
          padding: 10px 15px;
          border-radius: 8px;
          font-size: 14px;
          margin-bottom: 8px;
          color: #cbd5e1;
        }

        .btn-wrapper {
          text-align: right;
        }

        /* New button styles for Logout and Switch Account */
        .btn-wrapper .logout-btn,
        .btn-wrapper .switch-account-btn {
          background-color: #f87171;
          color: #0f172a;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
          margin-top: 12px;
        }

        .btn-wrapper .logout-btn:hover,
        .btn-wrapper .switch-account-btn:hover {
          background-color: #e11d48;
        }
      `}</style>

            <header>
                <h1>NEXO Inventory</h1>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/supplychain">Supply Chain</Link>
                    <Link to="/analytics">Analytics</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/alerts">Alerts</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
            </header>

            <div className="settings-container">
                <div className="settings-box">
                    <h1 className="settings-title">Settings</h1>

                    {/* Profile Info */}
                    <div className="settings-section">
                        <h2>Profile Information</h2>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                    </div>

                    {/* Company Info */}
                    <div className="settings-section">
                        <h2>Company Details</h2>
                        <input type="text" placeholder="Company Name" />
                        <input type="text" placeholder="GST / Tax ID" />
                    </div>

                    {/* Notifications */}
                    <div className="settings-section">
                        <h2>Notifications</h2>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round"></span>
                        </label>
                        <span className="notif-label">Enable Email Notifications</span>
                    </div>

                    {/* 2FA */}
                    <div className="settings-section">
                        <h2>Two-Factor Authentication</h2>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <span className="notif-label">Enable 2FA for Secure Login</span>
                    </div>

                    {/* Theme */}
                    <div className="settings-section">
                        <h2>Theme Preference</h2>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round"></span>
                        </label>
                        <span className="notif-label">Use Dark Theme</span>
                    </div>

                    {/* Language */}
                    <div className="settings-section">
                        <h2>Language & Time Settings</h2>
                        <select>
                            <option>English (Default)</option>
                            <option>Hindi</option>
                            <option>French</option>
                        </select>
                        <select>
                            <option>Timezone: GMT +05:30 (IST)</option>
                            <option>GMT +00:00 (UTC)</option>
                            <option>GMT -08:00 (PST)</option>
                        </select>
                        <select>
                            <option>Date Format: DD/MM/YYYY</option>
                            <option>MM/DD/YYYY</option>
                            <option>YYYY-MM-DD</option>
                        </select>
                    </div>

                    {/* Security */}
                    <div className="settings-section">
                        <h2>Security</h2>
                        <input type="password" placeholder="New Password" />
                        <input type="password" placeholder="Confirm Password" />
                    </div>

                    {/* Permissions */}
                    <div className="settings-section">
                        <h2>User Role & Permissions</h2>
                        <select>
                            <option>Admin</option>
                            <option>Editor</option>
                            <option>Viewer</option>
                        </select>
                        <p className="notif-label">Admins can manage users, inventory, and system settings.</p>
                    </div>

                    {/* Activity Logs */}
                    <div className="settings-section">
                        <h2>Recent Login Activity</h2>
                        <div className="log-box">Last Login: May 7, 2025 - 10:42 AM from 192.168.1.4</div>
                        <div className="log-box">Session Duration: 48 mins</div>
                        <div className="log-box">Previous Login: May 6, 2025 - 9:13 PM</div>
                    </div>

                    {/* Subscription */}
                    <div className="settings-section">
                        <h2>Subscription Plan</h2>
                        <input type="text" value="Pro Plan (Billed Monthly)" disabled />
                        <button className="save-btn" style={{ marginTop: "10px" }}>
                            Manage Subscription
                        </button>
                    </div>

                    {/* Danger Zone */}
                    <div className="settings-section">
                        <h2>Danger Zone</h2>
                        <div className="danger-zone">
                            <p><strong>Warning:</strong> Deleting your account will erase all data and cannot be undone.</p>
                            <button className="delete-btn">Delete Account</button>
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="btn-wrapper">
                        <button className="save-btn">Save All Changes</button>
                        <button
                            className="switch-account-btn"
                            onClick={() => navigate("/switchaccount")}
                        >
                            Switch Account
                        </button>
                        <button
                            className="logout-btn"
                            onClick={() => navigate("/login")}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;