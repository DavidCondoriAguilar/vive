import React from 'react';
import { getWhatsAppLink } from '@/utils/constants';

// Sub-components
import ProvincesHeader from './ProvincesHeader';
import ProvincesBento from './ProvincesBento';
import ProvincesCTA from './ProvincesCTA';
import EngineeringGrid from '@/components/ui/EngineeringGrid';

const ProvincesSection = () => {
  const provinces = [
    'Arequipa', 'Cusco', 'Trujillo', 'Chiclayo', 'Piura',
    'Iquitos', 'Huancayo', 'Chimbote', 'Pucallpa', 'Tacna',
    'Ica', 'Juliaca', 'Cajamarca', 'Ayacucho', 'Huánuco'
  ];

  const waLink = getWhatsAppLink("Hola, deseo cotizar un despacho a provincias para productos Vive.");

  return (
    <section className="py-32 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-1000">
      {/* Soft Premium Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <ProvincesHeader />
        <ProvincesBento provinces={provinces} />
        <ProvincesCTA waLink={waLink} />
      </div>
    </section>
  );
};

export default ProvincesSection;
