import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import MainLayout from '@/layouts/MainLayout';

const ContactThankYouContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Success Message */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaCheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-display font-black text-gray-900 dark:text-white mb-6">
            ¡Mensaje Recibido!
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Gracias por contactarnos. Nos comprometemos a responderte dentro de las próximas horas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-3 group"
            >
              <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Volver al Inicio</span>
            </Link>
            
            <Link
              to="/contacto"
              className="border border-gray-300 dark:border-white/20 hover:border-gold-500 text-gray-700 dark:text-gray-300 hover:text-gold-500 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all"
            >
              Enviar otro mensaje
            </Link>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-display font-black text-gray-900 dark:text-white mb-6 text-center">
            ¿Qué pasa ahora?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Revisamos tu mensaje</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Analizamos tu consulta y preparamos la mejor respuesta para ti.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 dark:bg-gold-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold-600 dark:text-gold-400">2</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Te contactamos</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Te responderemos por email o WhatsApp en menos de 24 horas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Solución perfecta</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Te ayudamos a encontrar el colchón perfecto para tu descanso.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="text-center">
          <h2 className="text-xl font-display font-black text-gray-900 dark:text-white mb-8">
            ¿Necesitas ayuda inmediata?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://wa.me/51989223448"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-2xl transition-all group"
            >
              <FaWhatsapp className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm opacity-90">Respuesta inmediata</p>
            </a>
            
            <a
              href="tel:+51989223448"
              className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-2xl transition-all group"
            >
              <FaPhone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Llamar</h3>
              <p className="text-sm opacity-90">Habla con un experto</p>
            </a>
            
            <a
              href="mailto:hola@suenodorado.pe"
              className="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-2xl transition-all group"
            >
              <FaEnvelope className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm opacity-90">Respuesta en 24h</p>
            </a>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <div className="bg-gold-50 dark:bg-gold-500/10 border border-gold-200 dark:border-gold-500/30 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              ¿Por qué elegir Sueño Dorado?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-gold-600 dark:text-gold-400 mb-2">10+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Años de garantía</p>
              </div>
              <div>
                <div className="text-3xl font-black text-gold-600 dark:text-gold-400 mb-2">100%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Peruano</p>
              </div>
              <div>
                <div className="text-3xl font-black text-gold-600 dark:text-gold-400 mb-2">24h</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Envío en Lima</p>
              </div>
              <div>
                <div className="text-3xl font-black text-gold-600 dark:text-gold-400 mb-2">5★</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calidad premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactThankYou = () => {
  return (
    <MainLayout>
      <ContactThankYouContent />
    </MainLayout>
  );
};

export default ContactThankYou;
