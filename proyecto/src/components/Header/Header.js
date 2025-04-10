import React from "react";
import { Link } from 'react-router-dom';
import OpcionesHeader from "./OpcionesHeader";
import "./header.css";

function Header() {
  let opciones = [
    { name: "Home", path: "/" },
    { name: "Favoritos", path: "/favoritos" },
    { name: "Populares", path: "/populares" },
    { name: "Cartelera", path: "/cartelera" }
  ];

  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src="/img/logo.jpg" alt="Logo de la app" className="logo" />
        </Link>
        <h1 className="titulo">CineFlex</h1>
      </div>
      <OpcionesHeader menu={opciones} />
    </header>
  );
}

export default Header;

