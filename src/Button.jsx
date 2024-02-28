import React from 'react';

function Button({ onSubmit }) {
  return (
    <button type="submit" onClick={onSubmit}>
      Enviar
    </button>
  );
}

export default Button;