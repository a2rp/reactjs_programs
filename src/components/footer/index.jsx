import React from "react";
import { FaCoffee, FaFacebook, FaGithub, FaGlobe, FaHeart, FaLinkedin, FaPatreon, FaYoutube } from "react-icons/fa";
import { Styled } from "./styled";

const connectLinks = [
  { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
  { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
  { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
];
const supportLinks = [
  { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
  { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const Footer = () => (
  <Styled.Wrapper>
    <Styled.Main>
      <Styled.Brand>
        <img src="/reactjs_programs/logo.png" alt="Ashish Ranjan logo" />
        <span><strong>React Programs</strong><small>Small exercises, clear progress.</small></span>
      </Styled.Brand>
      <Styled.LinkGroups>
        <div><p>Connect</p><span>{connectLinks.map(({ label, href, icon }) => <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{React.createElement(icon)}</a>)}</span></div>
        <div><p>Support</p><span>{supportLinks.map(({ label, href, icon }) => <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{React.createElement(icon)}</a>)}</span></div>
      </Styled.LinkGroups>
      <Styled.Bottom>
        <span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
        <span>React Router playground</span>
      </Styled.Bottom>
    </Styled.Main>
  </Styled.Wrapper>
);

export default Footer;
