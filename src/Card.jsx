import React from 'react';
import './Card.css'; // Importa el archivo CSS

function Card({ inputData }) {
  return (
    <div className="card-container"> {/* Aplica la clase card-container */}
      <h2>Información ingresada por el usuario:</h2>
      {inputData && (
        <ul>
          {Object.entries(inputData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;