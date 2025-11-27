import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
    const [profileInfoOpen, setProfileInfoOpen] = useState(false);
    const [changePasswordOpen, setChangePasswordOpen] = useState(false);
    const [notificationSettingsOpen, setNotificationSettingsOpen] = useState(false);

    const [name, setName] = useState("Vicky Veronica");
    const [company, setCompany] = useState("NEXO Inventry");
    const [industry, setIndustry] = useState("Retail");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);

    const togglePanel = (panel) => {
        if (panel === "profileInfo") setProfileInfoOpen(!profileInfoOpen);
        if (panel === "changePassword") setChangePasswordOpen(!changePasswordOpen);
        if (panel === "notificationSettings")
            setNotificationSettingsOpen(!notificationSettingsOpen);
    };

    const handleProfileSave = (e) => {
        e.preventDefault();
        console.log("Profile Updated:", { name, company, industry });
        alert("Profile updated successfully!");
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Password Changed:", password);
        alert("Password changed successfully!");
    };

    const handleNotificationSave = (e) => {
        e.preventDefault();
        console.log("Notification Settings Updated:", { emailNotifications, smsNotifications });
        alert("Notification settings updated!");
    };

    return (
        <div>
            <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #0f172a;
          color: #f1f5f9;
        }
        .container {
          max-width: 900px;
          margin: 50px auto;
          background: #1e293b;
          padding: 40px;
          border-radius: 16px;
          border: 2px solid #38bdf8;
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.6);
        }
        h1 {
          text-align: center;
          color: #38bdf8;
          margin-bottom: 20px;
        }
        .profile-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
        }
        .profile-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          background-color: #38bdf8;
          color: #0f172a;
          font-size: 48px;
          font-weight: bold;
          border-radius: 50%;
          margin-right: 20px;
          text-transform: uppercase;
        }
        .profile-details {
          text-align: center;
        }
        .profile-details h3 {
          margin: 0;
          color: #f1f5f9;
        }
        .profile-details p {
          margin: 5px 0;
          color: #cbd5e1;
        }
        .form-group {
          margin-bottom: 20px;
        }
        input, select, textarea, button {
          width: 100%;
          padding: 12px;
          background: #334155;
          border: none;
          border-radius: 8px;
          color: #f1f5f9;
          font-size: 16px;
          margin-top: 10px;
          transition: all 0.3s ease;
        }
        input::placeholder,
        textarea::placeholder {
          color: #94a3b8;
        }
        .form-group label {
          color: #cbd5e1;
        }
        button {
          background-color: #38bdf8;
          color: #0f172a;
          font-weight: bold;
          transition: background 0.3s, transform 0.3s;
          cursor: pointer;
        }
        button:hover {
          background-color: #0ea5e9;
          transform: scale(1.05);
        }
        button:active {
          background-color: #38bdf8;
          transform: scale(1);
        }
        .section-btn {
          background-color: #334155;
          color: #f1f5f9;
          margin: 10px 0;
          font-weight: bold;
          text-align: left;
          padding: 14px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
        .section-btn:hover {
          background-color: #475569;
          transform: scale(1.05);
        }
        .section-btn:active {
          background-color: #38bdf8;
          transform: scale(1);
        }
        .action-panel {
          margin-top: 20px;
          border: 1px solid #38bdf8;
          padding: 20px;
          border-radius: 12px;
        }
        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .checkbox-group input {
          width: auto;
        }
      `}</style>

            <div className="container">
                <h1>User Profile</h1>

                {/* Profile Header */}
                <div className="profile-header">
                    <div className="profile-icon">P</div>
                    <div className="profile-details">
                        <h3 id="username">Vicky Veronica</h3>
                        <p id="email">VickyVeronica@gmail.com</p>
                    </div>
                </div>

                {/* Profile Information Section */}
                <button className="section-btn" onClick={() => togglePanel("profileInfo")}>
                    Profile Information
                </button>
                {profileInfoOpen && (
                    <div className="action-panel" id="profileInfo">
                        <form onSubmit={handleProfileSave}>
                            <div className="form-group">
                                <label>Full Name:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Company Name:</label>
                                <input
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="Enter your company name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Industry:</label>
                                <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                                    <option value="Retail">Retail</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Food">Food</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Automotive">Automotive</option>
                                </select>
                            </div>
                            <button type="submit">Save Changes</button>
                        </form>
                    </div>
                )}

                {/* Change Password */}
                <button className="section-btn" onClick={() => togglePanel("changePassword")}>
                    Change Password
                </button>
                {changePasswordOpen && (
                    <div className="action-panel" id="changePassword">
                        <div className="form-group">
                            <label>New Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your new password"
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                            />
                        </div>
                        <button onClick={handlePasswordChange}>Change Password</button>
                    </div>
                )}

                {/* Notification Settings */}
                <button className="section-btn" onClick={() => togglePanel("notificationSettings")}>
                    Notification Settings
                </button>
                {notificationSettingsOpen && (
                    <div className="action-panel" id="notificationSettings">
                        <div className="form-group checkbox-group">
                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={(e) => setEmailNotifications(e.target.checked)}
                            />
                            <label>Receive Email Notifications</label>
                        </div>
                        <div className="form-group checkbox-group">
                            <input
                                type="checkbox"
                                checked={smsNotifications}
                                onChange={(e) => setSmsNotifications(e.target.checked)}
                            />
                            <label>Receive SMS Notifications</label>
                        </div>
                        <button onClick={handleNotificationSave}>Save Notifications Settings</button>
                    </div>
                )}
            </div>

            <Link to="/home">
                <button type="button">
                    ← Back to Home
                </button>
            </Link>
        </div>
    );
}