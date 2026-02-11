import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactThankYou = () => {
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
              className="bg-vive-500 hover:bg-vive-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-3 group"
            >
              <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Volver al Inicio</span>
            </Link>
            
            <Link
              to="/contacto"
              className="border border-gray-300 dark:border-white/20 hover:border-vive-500 text-gray-700 dark:text-gray-300 hover:text-vive-500 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all"
            >
              Enviar otro mensaje
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-display font-black text-gray-900 dark:text-white mb-8 text-center">
            ¿Necesitas ayuda inmediata?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://wa.me/51987654321?text=Hola%20Sueño%20Dorado%2C%20necesito%20ayuda"
              className="text-center p-6 rounded-xl bg-green-50 dark:bg-green-500/10 hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors group"
            >
              <FaWhatsapp className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Respuesta inmediata</p>
            </a>

            <a
              href="tel:+51987654321"
              className="text-center p-6 rounded-xl bg-blue-50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors group"
            >
              <FaPhone className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Llamar</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Atención directa</p>
            </a>

            <a
              href="mailto:hola@suenodorado.pe"
              className="text-center p-6 rounded-xl bg-purple-50 dark:bg-purple-500/10 hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-colors group"
            >
              <FaEnvelope className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Respuesta detallada</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactThankYou;
