import React from 'react';
import { useCarContext } from '../components/CarContext';

const CarList = () => {
  const { state } = useCarContext();
  const { cars } = state;

  return (
    <div>
      <h2>Lista de Vehículos Disponibles</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <p>Marca: {car.brand}</p>
            <p>Modelo: {car.model}</p>
            <p>Precio: ${car.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList
