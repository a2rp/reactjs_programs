import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./AppRoutes";

const App = () => (
  <div className="app">
    <Header />
    <main className="page-content"><AppRoutes /></main>
    <Footer />
  </div>
);

export default App;
