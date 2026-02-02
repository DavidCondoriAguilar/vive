import React from 'react';
const BenefitsSection = () => {
  const benefitItems = [
    {
      icon: "🚚",
      title: "Envío Gratis",
      subtitle: "Lima Metropolitana",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🔒",
      title: "Compra Segura",
      subtitle: "Pago protegido",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🛡️",
      title: "Garantía de Fábrica",
      subtitle: "Respaldo real",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "👥",
      title: "Asesoría Personal",
      subtitle: "Expertos certificados",
      color: "from-gold-500 to-gold-600"
    }
  ];

  return (
    <div className="py-16 professional-section relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitItems.map((benefit, index) => (
            <div key={index} className="text-center professional-section p-6 rounded-xl">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {benefit.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
