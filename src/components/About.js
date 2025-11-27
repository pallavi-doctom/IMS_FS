// About.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about">
            <style>{`
        /* Reset / base */
        * { box-sizing: border-box; }
        .about {
          background: #0f172a;
          color: #f1f5f9;
          font-family: 'Segoe UI', Roboto, Arial, sans-serif;
          line-height: 1.6;
          min-height: 100vh;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .section {
          padding: 4.5rem 0;
        }

        /* Hero */
        .hero {
          background: #1e293b;
          padding: 3.5rem 0;
          text-align: center;
        }
        .hero__title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #38bdf8;
          margin: 0 0 0.5rem;
        }
        .hero__subtitle {
          color: #cbd5e1;
          font-size: 1.125rem;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Timeline */
        .timeline {
          background: transparent;
        }
        .timeline-grid {
          display: grid;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .timeline-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .timeline-card {
          padding: 1.25rem;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(2, 6, 23, 0.6);
          background: transparent;
          transition: background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;
          cursor: pointer;
        }
        .timeline-card h3 { margin: 0 0 0.5rem; color: #f1f5f9; font-size: 1.125rem; font-weight: 600; }
        .timeline-card p { margin: 0; color: #cbd5e1; }

        .timeline-card:hover {
          background: #38bdf8;
          color: #0f172a;
          transform: translateY(-6px);
          box-shadow: 0 14px 36px rgba(56, 189, 248, 0.25);
        }
        .timeline-card:hover h3,
        .timeline-card:hover p { color: #0f172a; }

        .timeline-card:active { transform: translateY(0); box-shadow: none; }

        /* Core features */
        .core-grid {
          display: grid;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .core-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .core-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .core-feature-card {
          background: #334155;
          padding: 1.25rem;
          border-radius: 8px;
          text-align: center;
          transition: background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;
          cursor: pointer;
        }
        .core-feature-card h3 { margin: 0 0 0.5rem; color: #f1f5f9; font-size: 1.125rem; font-weight: 600; }
        .core-feature-card p { margin: 0; color: #cbd5e1; }
        .core-feature-card:hover {
          background: #38bdf8;
          color: #0f172a;
          transform: translateY(-6px);
          box-shadow: 0 14px 36px rgba(56, 189, 248, 0.25);
        }

        /* Testimonials */
        .testimonial-grid {
          display: grid;
          gap: 1rem;
        }
        @media (min-width: 768px) { .testimonial-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .testimonial-grid { grid-template-columns: repeat(3, 1fr); } }

        .testimonial-card {
          background: #334155;
          padding: 1.25rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .testimonial-card p { margin: 0 0 .75rem; color: #f1f5f9; }
        .testimonial-card span { color: #38bdf8; font-weight: 600; display: block; margin-top: 0.5rem; }
        .testimonial-card:hover { transform: translateY(-6px); box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25); }

        /* Contact form */
        .contact {
          background: #1e293b;
          padding: 3.5rem 0;
        }
        .form {
          max-width: 640px;
          margin: 0 auto;
        }
        .form-row {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 640px) {
          .form-row { flex-direction: column; }
        }
        label { display: block; margin-bottom: 0.5rem; color: #f1f5f9; font-weight: 600; font-size: 0.95rem; }
        input[type="text"], input[type="email"], textarea {
          width: 100%;
          padding: 12px 14px;
          background: #334155;
          color: #f1f5f9;
          border: 1px solid #38bdf8;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
        }
        input[type="text"]:focus, input[type="email"]:focus, textarea:focus {
          box-shadow: 0 0 0 6px rgba(56, 189, 248, 0.10);
        }
        .cta-button {
          background: #38bdf8;
          color: #0f172a;
          padding: 12px 20px;
          font-size: 1.05rem;
          font-weight: 700;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }
        .cta-button:hover { background: #0284c7; }

        /* Team */
        .team-grid { display: grid; gap: 1rem; }
        @media (min-width: 640px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .team-grid { grid-template-columns: repeat(3, 1fr); } }
        .team-card { background: #334155; padding: 1.25rem; border-radius: 8px; text-align: center; }
        .team-card h3 { margin: 0 0 .5rem; color: #f1f5f9; font-size: 1.125rem; font-weight: 600; }
        .team-card p { margin: 0; color: #94a3b8; }

        /* Footer */
        .footer { background: #0f172a; color: #94a3b8; text-align: center; padding: 1.25rem 0; font-size: 0.9rem; }

        /* Small helpers */
        .text-center { text-align: center; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
      `}</style>

            {/* Hero */}
            <header className="hero">
                <div className="container">
                    <h1 className="hero__title">Welcome to Nexo IMS</h1>
                    <p className="hero__subtitle">
                        A centralized inventory solution built to unify industries, simplify operations, and power intelligent decisions.
                    </p>
                </div>
            </header>

            <main>
                {/* Mission */}
                <section className="section container">
                    <h2 style={{ color: "#38bdf8", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem" }}>Our Mission</h2>
                    <p style={{ color: "#cbd5e1", fontSize: "1.125rem", maxWidth: "900px" }}>
                        Nexo IMS is committed to creating a flexible, scalable, and intelligent platform that helps businesses track, manage,
                        and predict inventory performance across industries like fashion, food, retail, and more. We believe in building tools
                        that adapt to your workflow—not the other way around.
                    </p>
                </section>

                {/* Timeline */}
                <section className="section timeline">
                    <div className="container">
                        <h2 style={{ color: "#38bdf8", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1.5rem", textAlign: "center" }}>Our Journey</h2>

                        <div className="timeline-grid">
                            <article className="timeline-card">
                                <h3>2022 — Ideation</h3>
                                <p>We noticed gaps in how industries handled multi-location inventory and began designing the foundation of Nexo IMS.</p>
                            </article>

                            <article className="timeline-card">
                                <h3>2023 — Prototype & AI</h3>
                                <p>Launched beta with real-time tracking, alert systems, and AI-driven forecasting for selected industries.</p>
                            </article>

                            <article className="timeline-card">
                                <h3>2024 — Expansion</h3>
                                <p>Onboarded fashion chains and food retailers; integrated barcode/QR features and multi-user roles.</p>
                            </article>

                            <article className="timeline-card">
                                <h3>2025 — Vision Forward</h3>
                                <p>Now evolving toward IoT integration, offline support, and AR-based warehouse stock visualization.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Core Features */}
                <section className="section container">
                    <h2 style={{ color: "#38bdf8", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1.25rem", textAlign: "center" }}>
                        Core Features
                    </h2>

                    <div className="core-grid">
                        <div className="core-feature-card">
                            <h3>Real-time Inventory Tracking</h3>
                            <p>Track your inventory in real time across all locations with automated updates and notifications.</p>
                        </div>

                        <div className="core-feature-card">
                            <h3>AI-Powered Forecasting</h3>
                            <p>Utilize AI-driven analytics to predict future stock needs and optimize your inventory levels.</p>
                        </div>

                        <div className="core-feature-card">
                            <h3>Role-Based Access Control</h3>
                            <p>Define custom roles and permissions to ensure data security and smooth team collaboration.</p>
                        </div>

                        <div className="core-feature-card">
                            <h3>Seamless Third-Party Integrations</h3>
                            <p>Easily connect to other tools and platforms for a fully integrated inventory management system.</p>
                        </div>

                        <div className="core-feature-card">
                            <h3>Detailed Analytics & Reporting</h3>
                            <p>Generate detailed reports to analyze performance, trends, and make informed decisions.</p>
                        </div>

                        <div className="core-feature-card">
                            <h3>Customizable Dashboards</h3>
                            <p>Build your own dashboard tailored to your specific needs, ensuring you have the most relevant information at a glance.</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="section container">
                    <h2 style={{ color: "#38bdf8", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1.25rem", textAlign: "center" }}>
                        What Our Customers Say
                    </h2>

                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <p>"Nexo IMS has revolutionized the way we manage our inventory. The AI-powered forecasting has saved us countless hours!"</p>
                            <span>Sophia, Retailer</span>
                        </div>

                        <div className="testimonial-card">
                            <p>"As a multi-location business, Nexo IMS has streamlined our operations and improved efficiency across the board."</p>
                            <span>John, Logistics Manager</span>
                        </div>

                        <div className="testimonial-card">
                            <p>"We were able to integrate Nexo IMS seamlessly with our existing systems. The ease of use and flexibility are incredible."</p>
                            <span>Emma, Supply Chain Lead</span>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section className="contact">
                    <div className="container">
                        <h2 style={{ color: "#38bdf8", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem", textAlign: "center" }}>
                            Get in Touch
                        </h2>
                        <p style={{ color: "#cbd5e1", textAlign: "center", marginBottom: "1.25rem" }}>
                            Have questions or want to schedule a demo? Fill out the form below, and we'll get back to you soon.
                        </p>

                        <form className="form" action="#" method="POST">
                            <div className="form-row">
                                <div style={{ flex: 1 }}>
                                    <label htmlFor="name">Your Name</label>
                                    <input id="name" name="name" type="text" placeholder="John Doe" required />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label htmlFor="email">Your Email</label>
                                    <input id="email" name="email" type="email" placeholder="you@example.com" required />
                                </div>
                            </div>

                            <div style={{ marginBottom: "1rem" }}>
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" name="message" rows="6" placeholder="Let us know how we can assist you!" required />
                            </div>

                            <div style={{ textAlign: "center" }}>
                                <button type="submit" className="cta-button">Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Team */}
                <section className="section container">
                    <h2 style={{ color: "#38bdf8", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1.25rem", textAlign: "center" }}>
                        Meet the Team
                    </h2>

                    <div className="team-grid">
                        <div className="team-card">
                            <h3>Pallavi</h3>
                            <p>Founder & Product Vision</p>
                        </div>

                        <div className="team-card">
                            <h3>Bhargav</h3>
                            <p>Lead Developer</p>
                        </div>

                        <div className="team-card">
                            <h3>Aashritha</h3>
                            <p>AI & Forecasting Expert</p>
                        </div>
                    </div>
                    <Link to="/login">
                        <button type="button">
                            ← Back to login
                        </button>
                    </Link>
                </section>
            </main>

            <footer className="footer">
                &copy; 2025 Nexo IMS.
            </footer>
        </div>
    );
}