import React from "react";
import { FiArrowRight, FiBookOpen, FiCode, FiLayers, FiZap } from "react-icons/fi";

const programs = [
  { icon: FiCode, title: "Component thinking", text: "Practice splitting a screen into small React components with clear responsibilities." },
  { icon: FiLayers, title: "Reusable patterns", text: "Build repeatable UI patterns that are easy to compose and extend as a project grows." },
  { icon: FiBookOpen, title: "Routing basics", text: "Move between pages with React Router and keep each screen focused on one purpose." },
  { icon: FiZap, title: "Small experiments", text: "Learn by changing one idea at a time and watching the interface respond." },
];

const Home = () => (
  <div className="home-page">
    <section className="program-hero page-shell">
      <div className="hero-copy">
        <p className="eyebrow">React learning playground</p>
        <h1>Write small programs. Build stronger ideas.</h1>
        <p className="hero-text">A concise overview of component thinking, React Router, and reusable UI patterns, with a prompt for your next small experiment.</p>
        <div className="hero-actions">
          <a className="primary-button" href={`${import.meta.env.BASE_URL}#programs`}>Explore programs <FiArrowRight aria-hidden="true" /></a>
          <a className="secondary-link" href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">Read React docs <FiArrowRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-preview">
        <img src={import.meta.env.BASE_URL + "preview.png"} alt="React programs visual preview" />
        <div><span>Practice note</span><strong>Make one clear change at a time.</strong></div>
      </div>
    </section>
    <section className="programs-section page-shell" id="programs">
      <div className="section-heading"><p className="eyebrow">What you will find here</p><h2>Start with the patterns behind useful interfaces.</h2></div>
      <div className="program-grid">
        {programs.map(({ icon, title, text }) => <article className="program-card" key={title}><span className="program-icon">{React.createElement(icon, { "aria-hidden": "true" })}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
    <section className="about-section page-shell" id="about">
      <div><p className="eyebrow">A practical approach</p><h2>Learn the pattern, then make it yours.</h2></div>
      <p>The ideas here are intentionally small so they stay approachable. Use this page as a starting point for your own components, notes, and experiments.</p>
    </section>
  </div>
);

export default Home;
