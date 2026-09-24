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
        <p className="hero-text">A focused collection of React concepts and practice screens for learning by doing, one useful component at a time.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#programs">Explore programs <FiArrowRight /></a>
          <a className="secondary-link" href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">Read React docs <FiArrowRight /></a>
        </div>
      </div>
      <div className="hero-preview">
        <img src="/reactjs_programs/preview.png" alt="React programs visual preview" />
        <div><span>Practice note</span><strong>Make one clear change at a time.</strong></div>
      </div>
    </section>
    <section className="programs-section page-shell" id="programs">
      <div className="section-heading"><p className="eyebrow">What you will find here</p><h2>Simple programs that sharpen the fundamentals.</h2></div>
      <div className="program-grid">
        {programs.map(({ icon, title, text }) => <article className="program-card" key={title}><span className="program-icon">{React.createElement(icon)}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
    <section className="about-section page-shell" id="about">
      <div><p className="eyebrow">A practical approach</p><h2>Learn the pattern, then make it yours.</h2></div>
      <p>Each exercise is intentionally small so the code stays approachable. Use the project as a starting point for your own variations, notes, and experiments.</p>
    </section>
  </div>
);

export default Home;
