import React from 'react';
import { Ship, Truck, Plane, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Ship className="h-12 w-12 text-indigo-600" />,
      title: 'Sea Freight',
      description: 'Efficient ocean freight solutions for your global shipping needs with competitive rates and reliable schedules.'
    },
    {
      icon: <Plane className="h-12 w-12 text-indigo-600" />,
      title: 'Air Freight',
      description: 'Fast and secure air cargo services worldwide, perfect for time-sensitive shipments.'
    },
    {
      icon: <Truck className="h-12 w-12 text-indigo-600" />,
      title: 'Land Transport',
      description: 'Comprehensive road transportation network covering local and international routes.'
    },
    {
      icon: <Package className="h-12 w-12 text-indigo-600" />,
      title: 'Warehousing',
      description: 'State-of-the-art warehousing facilities with advanced inventory management systems.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive logistics solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;