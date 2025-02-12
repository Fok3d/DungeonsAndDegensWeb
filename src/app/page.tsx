//import Image from "next/image";
//import Link from "next/link"
import React, { useState } from "react";
import "../styles/style.css";


const App = () => {
  const [activeMenu, setActiveMenu] = useState("start-menu");

  return (
      <div className="app">
          <nav>
              <ul>
                  <li><button onClick={() => setActiveMenu("start-menu")}>Hlavní menu</button></li>
                  <li><button onClick={() => setActiveMenu("logged-menu")}>Menu pro přihlášené</button></li>
              </ul>
          </nav>
          <div className="menu-content">
              {activeMenu === "start-menu" && (
                  <section>
                      <h2>Startovací menu</h2>
                      <p>Vítejte! Vyberte si možnost z menu.</p>
                  </section>
              )}
              {activeMenu === "logged-menu" && (
                  <section>
                      <h2>Přihlášené menu</h2>
                      <p>Vítejte zpět! Zde jsou vaše možnosti.</p>
                  </section>
              )}
          </div>
      </div>
  );
};

export default App;
