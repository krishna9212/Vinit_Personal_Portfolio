import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import NoPage from "./NoPage";

const links = [
  { path: "/", label: "About" },
  { path: "/resume", label: "Resume" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <Router>
      <nav className="navbar z-40 flex items-center justify-around text-lg capitalize absolute top-0 right-0 h-[10%] w-[90%]  md:w-[70%] bg-[#282829] text-white rounded-bl-[2.5rem] rounded-tr-3xl">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "nav-link active-nav-link text-[#9696ca]"
                : "nav-link text-white"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="main-content overflow-y-auto md:overflow-y-hidden h-full w-full">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Header;
