import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
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

    // Security: Honeypot check for bots
    if (e.target._honey && e.target._honey.value) {
      console.log("Bot detected!");
      return;
    }

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
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
            <FaCheckCircle className="w-12 h-12 text-gold-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">
            ¡Mensaje <span className="text-gold-500">Recibido</span>!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
            Nuestros asesores de descanso se pondrán en contacto contigo en breve para brindarte la mejor atención.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors duration-500 overflow-hidden pt-32 pb-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block animate-fade-in">Contacto Oficial</span>
          <h1 className="text-5xl md:text-8xl font-display font-black text-gray-900 dark:text-white uppercase leading-[0.9] tracking-tighter mb-8 animate-slide-up">
            Hablemos del <br /><span className="text-gold-500">Descanso Perfecto</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl animate-fade-in delay-200">
            Estamos aquí para asesorarte. Ya sea que busques el colchón de tus sueños o una solución corporativa, nuestro equipo experto está a un clic de distancia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Bento Grid Info Section */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* WhatsApp Card - Feature Card */}
            <a
              href="https://wa.me/51989223448"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-2 group bg-green-500 dark:bg-green-600/10 p-8 rounded-[2.5rem] border border-green-500/20 flex flex-col justify-between h-64 hover:scale-[1.02] transition-all duration-500"
            >
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                  <FaWhatsapp className="w-8 h-8" />
                </div>
                <span className="bg-white/20 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Respuesta Inmediata</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase mb-1">WhatsApp</h3>
                <p className="text-white/80 font-bold">+51 989 223 448</p>
              </div>
            </a>

            {/* Email Card */}
            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 flex flex-col justify-between h-64 group hover:border-gold-500/30 transition-all">
              <div className="w-12 h-12 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase mb-1">Email</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium break-all">ventasisd@grupoisd.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 flex flex-col justify-between h-64 group hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <FaPhone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase mb-1">Central</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">8am - 5pm</p>
              </div>
            </div>

            {/* Location Card - Full Width in Bento */}
            <div className="md:col-span-2 bg-black text-white p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between group hover:shadow-2xl hover:shadow-gold-500/10 transition-all gap-6">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-gold-500 flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase mb-1">Planta Industrial</h3>
                  <p className="text-gray-300 text-sm font-bold leading-tight">Mz. F Lote 22, Lotización Chillón - La Ensenada</p>
                  <p className="text-gray-400 text-xs mt-1">Puente Piedra, Lima</p>
                  <div className="mt-3 flex flex-col gap-1">
                    <p className="text-[10px] text-gold-500 uppercase tracking-widest font-black flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-gold-500"></span> Referencia Principal
                    </p>
                    <p className="text-[11px] text-gray-500 italic">A solo 10 min de Pro, con acceso directo y rápido.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3">
                <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium text-center md:text-right">Ubícanos mejor en el mapa debajo</p>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <FaPaperPlane className="w-4 h-4 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Modern Premium Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0F0F0F] p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-white/5 shadow-2xl relative overflow-hidden group">
              {/* Form Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-500/10 transition-all duration-1000"></div>

              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-10 uppercase tracking-tighter">
                Escríbenos <span className="text-gold-500">Directo</span>
              </h3>

              <form
                action="https://formsubmit.co/ventasisd@grupoisd.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Honeypot field - anti-spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                {/* FormSubmit Configuration */}
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Tu Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ej: David Condori"
                      className="w-full bg-gray-50 dark:bg-black/50 border-b-2 border-gray-100 dark:border-white/5 px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-gold-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Tu Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="david@ejemplo.com"
                      className="w-full bg-gray-50 dark:bg-black/50 border-b-2 border-gray-100 dark:border-white/5 px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-gold-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Mensaje de Consulta</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre el producto que te interesa o tu proyecto corporativo..."
                    className="w-full bg-gray-50 dark:bg-black/50 border-b-2 border-gray-100 dark:border-white/5 px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-gold-500 transition-all font-bold resize-none placeholder:text-gray-300 dark:placeholder:text-gray-700"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-black dark:bg-white text-white dark:text-black py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-[0.98] active:scale-95 disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Enviar Propuesta
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gold-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>

                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Atención prioritaria para consultas B2B y mayoristas
                </p>
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
