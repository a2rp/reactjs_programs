import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="not-found page-shell">
    <p className="eyebrow">404</p>
    <h1>That program does not exist yet.</h1>
    <p>Return to the practice lab and choose another starting point.</p>
    <Link className="primary-button" to="/">Back to home</Link>
  </section>
);

export default NotFound;
