import React from 'react';
import { useCarContext } from './CarContext';

const RentedCarInfo = () => {
  const { state } = useCarContext();
  const { rentedCar } = state;

  if (!rentedCar) {
    return (
      <div className="container">
        <h2>Información del Vehículo Rentado</h2>
        <p>No hay vehículo rentado en este momento.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Información del Vehículo Rentado</h2>
      <p>Marca: {rentedCar.brand}</p>
      <p>Modelo: {rentedCar.model}</p>
      <p>Precio: ${rentedCar.price}</p>
    </div>
  );
};

export default RentedCarInfo;