import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiClock, FiCode, FiMenu, FiX } from "react-icons/fi";
import { Styled } from "./styled";

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setDateTime(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
  const formattedTime = dateTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  const closeMenu = () => setMenuOpen(false);

  return (
    <Styled.Wrapper>
      <Styled.Main>
        <Styled.Brand to="/" onClick={closeMenu} aria-label="React programs home">
          <img src={import.meta.env.BASE_URL + "logo.png"} alt="Ashish Ranjan logo" />
          <span><small>REACT PROGRAMS</small><strong>Practice Lab</strong></span>
        </Styled.Brand>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <Styled.Nav id="primary-navigation" className={menuOpen ? "open" : ""} aria-label="Primary navigation">
          <a href={`${import.meta.env.BASE_URL}#programs`} onClick={closeMenu}><FiCode aria-hidden="true" /> Programs</a>
          <a href={`${import.meta.env.BASE_URL}#about`} onClick={closeMenu}><FiClock aria-hidden="true" /> About</a>
          <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>React guide <FiArrowUpRight aria-hidden="true" /></a>
        </Styled.Nav>
        <Styled.DateTime aria-label={`Current date and time: ${formattedDate} ${formattedTime}`}>
          <span>{formattedDate}</span><strong>{formattedTime}</strong>
        </Styled.DateTime>
      </Styled.Main>
    </Styled.Wrapper>
  );
};

export default Header;
