import React from 'react';
import './notfound.css'; // asegurate de que este CSS exista

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Página no encontrada</h1>
      <p className="notfound-text">Lo que estás buscando no existe 😢</p>
    </div>
  );
}
