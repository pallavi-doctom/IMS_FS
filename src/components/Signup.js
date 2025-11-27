import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinkStyle = {
    color: "#f1f5f9",
    textDecoration: "none",
    fontWeight: 500,
    position: "relative",
};

export default function Signup() {

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            fullName: form["full-name"] || form.fullName,
            email: form.email,
            password: form.password,
            confirmPassword: form["confirm-password"] || form.confirmPassword
        };

        try {
            const response = await fetch("http://localhost:8080/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await response.text();
            alert(result);

        } catch (error) {
            console.error("Signup error:", error);
            alert("Something went wrong. Try again.");
        }
    };

    return (
        <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          background: #0f172a;
          color: #f1f5f9;
          font-family: 'Segoe UI', sans-serif;
          line-height: 1.6;
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
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        header h1 {
          font-size: 1.5rem;
          color: #38bdf8;
          font-weight: bold;
          letter-spacing: 1px;
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
        .signup-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 2rem 1rem;
          background: #0f172a;
        }
        .form-wrapper {
          background-color: #334155;
          padding: 2rem;
          width: 100%;
          max-width: 420px;
          border-radius: 0.75rem;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        }
        .form-wrapper h2 {
          text-align: center;
          color: #38bdf8;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        label {
          font-size: 1rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 0.5rem;
        }
        input {
          padding: 0.75rem;
          border: 1px solid #334155;
          background-color: #1e293b;
          color: #f1f5f9;
          font-size: 1rem;
          border-radius: 0.5rem;
        }
        input:focus {
          outline: none;
          border-color: transparent;
          box-shadow: 0 0 0 2px #38bdf8;
        }
        button {
          padding: 0.75rem;
          background-color: #38bdf8;
          color: #0f172a;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #22d3ee;
        }
        .signin-link {
          text-align: center;
          font-size: 0.95rem;
          margin-top: 1rem;
          color: #cbd5e1;
        }
        .signin-link a {
          color: #38bdf8;
          text-decoration: none;
          transition: color 0.3s;
        }
        .signin-link a:hover {
          color: #22d3ee;
        }
      `}</style>

            <header>
                <h1>NEXO Inventory</h1>
                <nav>
                    <Link to="/features" style={navLinkStyle}>Features</Link>
                    <Link to="/about" style={navLinkStyle}>About</Link>
                    <Link to="/signup" style={navLinkStyle}>SignUp</Link>
                </nav>
            </header>

            <section className="signup-section">
                <div className="form-wrapper">
                    <h2>Sign Up for NEXO IMS</h2>

                    {/* 🚀 Added handleSubmit + handleChange */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="full-name">Full Name</label>
                            <input
                                type="text"
                                id="full-name"
                                name="full-name"
                                placeholder="Enter your full name"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Confirm your password"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit">Sign Up</button>

                        <div className="signin-link">
                            Already have an account? <Link to="/login">Sign In</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
