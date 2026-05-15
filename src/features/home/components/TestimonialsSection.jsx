import React from 'react';
import RevealSection from '@shared/components/ui/RevealSection';

const features = [
  { id: '01', title: 'Control de Clima', desc: 'Tu colchón mantiene la temperatura ideal toda la noche. Nunca más pasarás calor al despertar.' },
  { id: '02', title: 'Presión Cero', desc: 'La espuma se adapta a cada curva de tu cuerpo. Como si flotaras, sin presión en hombros ni cadera.' },
  { id: '03', title: 'Ventilación 360', desc: 'El aire circula libremente dentro del colchón. Adiós a la humedad y al calor atrapado.' },
  { id: '04', title: 'Soporte Infinito', desc: 'Cada resorte trabaja solo. Si tu pareja se mueve, tú no sientes nada. Descanso sin interrupciones.' },
];

const PhysiologicalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#030303] relative overflow-hidden transition-colors duration-1000">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(41,156,71,0.015),transparent_50%)]"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">

        <RevealSection className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-vive-500/5 border border-vive-500/10 rounded-sm mb-6">
            <span className="w-1.5 h-1.5 bg-vive-500 rounded-full"></span>
            <span className="text-[9px] font-mono font-black text-vive-600 dark:text-vive-400 uppercase tracking-[0.4em]">
              Tecnología que se adapta a ti
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 dark:text-white uppercase leading-[0.85] tracking-tighter">
            Ingeniería del{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vive-600 to-vive-400 italic font-brand lowercase tracking-normal">
              descanso
            </span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-28">
          {features.map((f, i) => (
            <RevealSection key={f.id} delay={i * 80}>
              <div className="group border border-gray-100 dark:border-white/5 rounded-2xl p-6 md:p-8 hover:border-vive-500/30 transition-all duration-500 bg-gray-50 dark:bg-[#0A0A0A] flex flex-col h-full">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl md:text-4xl font-display font-black text-gray-900 dark:text-white tracking-tighter">
                    {f.id}
                  </span>
                  <span className="flex-1 h-px bg-gray-200 dark:bg-white/10 group-hover:bg-vive-500/40 transition-colors"></span>
                </div>
                <h3 className="text-sm md:text-base font-display font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-3">
                  {f.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-text leading-relaxed flex-1">
                  {f.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection>
          <div className="relative bg-gray-900 dark:bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12 lg:p-16 overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-vive-500/5 rounded-full blur-[120px] group-hover:bg-vive-500/10 transition-colors duration-1000"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <span className="text-[9px] font-mono font-black text-gray-400 uppercase tracking-[0.3em]">Corazón de la Tecnología</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight tracking-tight">
                  Un colchón que <br /><span className="text-vive-400 italic font-light">respira contigo</span>
                </h3>
                <p className="text-gray-400 font-text text-sm md:text-base leading-relaxed max-w-md">
                  Cada celda deja pasar el aire para que tu cuerpo se mantenga fresco y seco. Sin calor, sin humedad. Solo descanso profundo.
                </p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-vive-400"></span>
                  <span className="text-[10px] font-mono font-black text-vive-400 uppercase tracking-[0.3em]">
                    Diseñado para ti ✓
                  </span>
                </div>
                <div className="flex gap-4 mt-2 text-[10px] font-mono text-gray-500">
                  <span>Siempre fresco</span>
                  <span className="text-gray-600">//</span>
                  <span>Soporte que dura</span>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

      </div>
    </section>
  );
};

export default PhysiologicalSection;
