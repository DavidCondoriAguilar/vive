import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import MainLayout from '@/layouts/MainLayout';

const ContactFormContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    product: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        product: ''
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-display font-black text-gray-900 dark:text-white mb-4">
            ¡Mensaje Enviado!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Nos pondremos en contacto contigo dentro de las próximas horas.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-colors"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-black text-gray-900 dark:text-white mb-6">
            Contáctanos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros colchones? Estamos aquí para ayudarte a encontrar el descanso perfecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-display font-black text-gray-900 dark:text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 dark:bg-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="w-6 h-6 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-400">+51 989 223 448</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Respuesta inmediata</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Teléfono</h4>
                    <p className="text-gray-600 dark:text-gray-400">+51 989 223 448</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Lun-Sáb 9am-7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">hola@suenodorado.pe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Respuesta en 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Ubicación</h4>
                    <p className="text-gray-600 dark:text-gray-400">Lima, Perú</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Envíos a todo el país</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">¿Por qué elegirnos?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Garantía real de hasta 10 años</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Envío gratis en Lima</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Asesoría personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Colchones premium peruanos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-display font-black text-gray-900 dark:text-white mb-6">
                Envíanos un Mensaje
              </h3>
              
              <form 
                action="https://formsubmit.co/hola@suenodorado.pe" 
                method="POST" 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden fields for FormSubmit */}
                <input type="hidden" name="_subject" value="Nuevo contacto - Sueño Dorado" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={`${window.location.origin}/contacto/gracias`} />
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="+51 989 223 448"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Asunto
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona...</option>
                      <option value="cotizacion">Cotización</option>
                      <option value="informacion">Información de productos</option>
                      <option value="garantia">Garantía y soporte</option>
                      <option value="envio">Información de envío</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Producto de Interés
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Ej: Colchón Emperor Pocket"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gray-400 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <MainLayout>
      <ContactFormContent />
    </MainLayout>
  );
};

export default ContactForm;
