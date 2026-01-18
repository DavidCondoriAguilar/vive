import React from 'react';
import { MdStar } from 'react-icons/md';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "María G.",
      location: "Miraflores",
      rating: 5,
      quote: "Excelente calidad, duró perfecto todo el proceso de compra.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Carlos R.",
      location: "San Isidro",
      rating: 5,
      quote: "Los mejores colchones de Lima, precio justo por calidad premium.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ana L.",
      location: "Barranco",
      rating: 5,
      quote: "Servicio profesional, entrega rápida y garantía real.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <MdStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
      />
    ));
  };

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
          Clientes Satisfechos
        </h2>
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex">{renderStars(5)}</div>
          <span className="text-gray-600 dark:text-gray-400">4.8/5 • 1,247 reseñas</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-1">
                <div className="flex">{renderStars(testimonial.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;