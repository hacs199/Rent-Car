import React from 'react';
import { useCarContext } from './CarContext';

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  // Agrega más productos según lo necesites
]

const CarList = () => {
  const { state } = useCarContext();
  const { cars } = state;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Lista de Vehículos Disponibles</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* Mapea los carros disponibles */}
          {cars.map((car) => (
            <a key={car.id} href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={car.imageSrc}
                  alt={car.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{car.model}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{car.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;
