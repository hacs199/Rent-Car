import React, { createContext, useContext, useReducer } from 'react';

const CarContext = createContext();

const initialState = {
  cars: [], // Lista de vehículos disponibles
  rentedCar: null, // Información del vehículo rentado
};

const carReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CARS':
      return { ...state, cars: action.payload };
    case 'RENT_CAR':
      return { ...state, rentedCar: action.payload };
    default:
      return state;
  }
};