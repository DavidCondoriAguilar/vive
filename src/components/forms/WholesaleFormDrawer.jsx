import React, { useState } from 'react';
import { useFormValidation } from '@shared/hooks/useFormValidation';
import { getWhatsAppLink } from '@core/utils/constants';
import { FaCheck, FaTimes, FaWhatsapp } from 'react-icons/fa';

/**
 * Wholesale Form with Validation
 * Redesigned for Pro 2026 Minimalist Aesthetic
 */
const WholesaleFormDrawer = ({ isOpen, onClose }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation schema
  const validationSchema = {
    name: {
      required: true,
      type: 'name',
      minLength: 2
    },
    email: {
      required: true,
      type: 'email'
    },
    phone: {
      required: true,
      type: 'phone'
    },
    company: {
      required: true,
      type: 'company',
      minLength: 2
    },
    businessType: {
      required: true
    },
    message: {
      required: false,
      maxLength: 500
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useFormValidation(
    {
      name: '',
      email: '',
      phone: '',
      company: '',
      businessType: 'hotel',
      message: ''
    },
    (formValues) => {
      // Submit handler
      const message = `*SOLICITUD B2B - ${formValues.company.toUpperCase()}*\n\n`;
      const submissionMessage = `${message}Nombre: ${formValues.name}\nEmail: ${formValues.email}\nTeléfono: ${formValues.phone}\nTipo de Negocio: ${formValues.businessType}\n\nMensaje: ${formValues.message || 'Sin mensaje adicional'}`;

      // Open WhatsApp with form data
      window.open(getWhatsAppLink(submissionMessage), '_blank');

      // Reset form and show success
      setSubmitSuccess(true);
      setTimeout(() => {
        resetForm();
        setSubmitSuccess(false);
        onClose();
      }, 2000);
    },
    validationSchema
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 bg-white dark:bg-[#0c0c0c] shadow-[0_0_100px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] w-full max-w-lg overflow-hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-labelledby="form-title"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/80 dark:bg-[#0c0c0c]/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 px-8 py-10 flex items-center justify-between z-20">
          <div className="flex-1">
            <h3 id="form-title" className="text-3xl font-display font-medium text-gray-900 dark:text-white tracking-tight leading-none">
              Inicie su <span className="text-vive-500 serif italic">Proyecto</span>
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Atención Corporativa Exclusiva</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all text-gray-500 transform hover:rotate-90"
            aria-label="Cerrar formulario"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="sticky top-0 bg-vive-500 text-black px-8 py-4 flex items-center gap-3 z-30 animate-fade-in">
            <FaCheck className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-bold uppercase tracking-widest">
              Solicitud Enviada con Éxito
            </p>
          </div>
        )}

        {/* Form Content */}
        <div className="overflow-y-auto h-[calc(100vh-200px)] px-8 py-12 custom-scrollbar">
          <form id="b2b-form" onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">
                Representante *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Nombre y apellido"
                className={`w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-transparent rounded-[1.5rem] text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 ${touched.name && errors.name ? 'border-red-500/50' : ''}`}
              />
              {touched.name && errors.name && (
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.name}</p>
              )}
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="ejemplo@empresa.com"
                  className={`w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-transparent rounded-[1.5rem] text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 ${touched.email && errors.email ? 'border-red-500/50' : ''}`}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">
                  Teléfono *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+51"
                  className={`w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-transparent rounded-[1.5rem] text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 ${touched.phone && errors.phone ? 'border-red-500/50' : ''}`}
                />
              </div>
            </div>

            {/* Company Field */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">
                Empresa *
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Razón social"
                className={`w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-transparent rounded-[1.5rem] text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 ${touched.company && errors.company ? 'border-red-500/50' : ''}`}
              />
            </div>

            {/* Business Type */}
            <div className="space-y-2">
              <label htmlFor="businessType" className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">
                Sector Comercial *
              </label>
              <div className="relative">
                <select
                  id="businessType"
                  name="businessType"
                  value={values.businessType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-transparent rounded-[1.5rem] text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium appearance-none outline-none"
                >
                  <option value="hotel">Hotelería / Proyectos</option>
                  <option value="tienda">Tienda / Retail</option>
                  <option value="distribuidor">Distribuidor Mayorista</option>
                  <option value="revendedor">Revendedor Independiente</option>
                  <option value="otro">Otros Proyectos</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">
                Detalles del Proyecto
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="¿En qué podemos ayudarle?"
                rows="4"
                className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-transparent rounded-[2rem] text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 resize-none h-40"
              />
            </div>
          </form>
        </div>

        {/* Footer - Actions */}
        <div className="sticky bottom-0 bg-white/80 dark:bg-[#0c0c0c]/80 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 px-8 py-8 z-20">
          <button
            form="b2b-form"
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full py-6 bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-[11px] uppercase tracking-widest rounded-full overflow-hidden shadow-2xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center justify-center gap-4">
              {isSubmitting ? 'Procesando...' : (
                <>
                  <FaWhatsapp className="text-xl text-vive-500" />
                  Enviar Propuesta vía WhatsApp
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default WholesaleFormDrawer;

