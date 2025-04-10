import React from 'react';
import './notfound.css'; // asegurate de que este CSS exista
import Loader from '../../components/Loader/Loader';

export default function NotFound() {
  
  return (
    <>
    <Loader />
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Página no encontrada</h1>
      <p className="notfound-text">Lo que estás buscando no existe 😢</p>
    </div>
    </>
  );
}
