import React, { useState } from 'react';
import { useCarContext } from './CarContext';

const RentalForm = () => {
  const { state, dispatch } = useCarContext();
  const { rentedCar } = state;

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    direccion: '',
    telefono: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío del formulario
  };

  if (!rentedCar) {
    return <p>No hay vehículo seleccionado para rentar.</p>;
  }

  return (
    <div className="container">
      <h2>Rentar Vehículo</h2>
      <p>Estás rentando el vehículo:</p>
      <p>Marca: {rentedCar.brand}</p>
      <p>Modelo: {rentedCar.model}</p>
      <p>Precio: ${rentedCar.price}</p>
      <form onSubmit={handleSubmit}>
        {/* Inputs para el formulario de renta */}
        <button type="submit">Rentar</button>
      </form>
    </div>
  );
};

export default RentalForm;