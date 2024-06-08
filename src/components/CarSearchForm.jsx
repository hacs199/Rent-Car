import React, { useState } from 'react';
import { useCarContext } from './CarContext';

const CarSearchForm = () => {
  const { state } = useCarContext();
  const { cars } = state;

  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    // Lógica de búsqueda de vehículos
  };

  return (
    <div>
      <h2>Buscar Vehículos</h2>
      <form onSubmit={handleSearch}>
        {/* Input para ubicación */}
        {/* Input para fecha de inicio */}
        {/* Input para fecha de fin */}
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default CarSearchForm;