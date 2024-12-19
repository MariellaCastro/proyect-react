import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isSubmenuVisible, setSubmenuVisible] = useState(false);

  const handleMouseEnter = () => setSubmenuVisible(true);
  const handleMouseLeave = () => setSubmenuVisible(false);

  return (
    <header className="header">
      <div className="logo">
        <h1>ATUSPARIATOURS</h1>
        <p>AGENCIA DE VIAJES Y TRANSPORTE TURÍSTICO</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/Inicio">Inicio</Link></li>
          <li><Link to="/QuienesSomos">¿Quiénes Somos?</Link></li>
          {}
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="submenu-item"
          >
            <span>Paquetes Turísticos</span>
            {isSubmenuVisible && (
              <ul className="submenu">
                <li><Link to="/trekking-huaraz">Trekking Huaraz</Link></li>
                <li><Link to="/trekking-lima">Trekking Lima</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/hoteles">Hoteles en Huaraz</Link></li>
          <li><Link to="/reservas">Reservas</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
