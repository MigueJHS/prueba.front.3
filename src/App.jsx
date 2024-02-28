import React, { useState } from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';

function App() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [inputData, setInputData] = useState(null);
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    if (name.trim().length === 0 || color.trim().length === 0) {
      setError('Por favor completa todos los campos');
      return;
    }

    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!hexRegex.test(color)) {
      setError('Por favor ingresa un color en formato hexadecimal');
      return;
    }

    setInputData({ name, color });
    setError('');
  };

  return (
    <div className="App">
      <h1>Ingresa tu información</h1>
      <form onSubmit={handleSubmit}> {/* Asocia la función handleSubmit con el evento onSubmit del formulario */}
        <Input label="Ingresa tu nombre" value={name} onChange={handleNameChange} />
        <Input label="Ingresa tu color favorito (formato hex)" value={color} onChange={handleColorChange} />
        <Button onSubmit={handleSubmit} />
      </form>
      {error && <p>{error}</p>}
      {inputData && <Card inputData={inputData} />}
    </div>
  );
}

export default App;