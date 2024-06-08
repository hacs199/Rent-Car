import React, { useState } from 'react';
import { useCarContext } from '../components/CarContext';

const CarSearchForm = () => {
  const { state } = useCarContext();
  const { cars } = state;

  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    // Filtrar los vehículos por ubicación
    const filteredCars = cars.filter(car => car.location === location);

    // Filtrar los vehículos disponibles entre las fechas especificadas
    const availableCars = filteredCars.filter(car => {
      const carStartDate = new Date(car.availableFrom);
      const carEndDate = new Date(car.availableTo);
      const searchStartDate = new Date(startDate);
      const searchEndDate = new Date(endDate);
      return carStartDate <= searchStartDate && carEndDate >= searchEndDate;
    });

    // Mostrar los resultados de la búsqueda
    console.log(`Vehículos disponibles en ${location}:`);
    availableCars.forEach(car => {
      console.log(`${car.quantity} ${car.brand} ${car.model}`);
    });
  };

  return (
    <div>
      <h2>Buscar Vehículos</h2>
      <form onSubmit={handleSearch}>
        <label>
          Ubicación:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Fecha de Inicio:
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        </label>
        <br />
        <label>
          Fecha de Fin:
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default CarSearchForm;
