import React, { useState } from 'react';
import { useFormValidation } from '@/hooks/useFormValidation';
import { getWhatsAppLink } from '@/utils/constants';
import { FaCheck, FaTimes, FaWhatsapp } from 'react-icons/fa';

/**
 * Wholesale Form with Validation
 * Improved for usability and fixed layout issues
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
      const message = `*SOLICITUD MAYORISTA - ${formValues.company.toUpperCase()}*\n\n`;
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
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 bg-white dark:bg-[#0A0A0A] shadow-2xl transition-transform duration-500 ease-out w-full max-w-lg overflow-hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-labelledby="form-title"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-[#0F0F0F] border-b border-gray-100 dark:border-white/5 px-6 py-6 flex items-center justify-between z-20">
          <div className="flex-1">
            <h3 id="form-title" className="text-2xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter">
              Solicitud <span className="text-vive-500 italic font-light">B2B Elite</span>
            </h3>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">Canal directo planta industrial</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-gray-500 dark:text-gray-400"
            aria-label="Cerrar formulario"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="sticky top-[89px] bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800 px-6 py-4 flex items-start gap-3 z-30">
            <div className="flex-shrink-0">
              <FaCheck className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-800 dark:text-green-300 font-text">
                ¡Solicitud enviada! Te contactaremos pronto con una cotización personalizada.
              </p>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="overflow-y-auto h-[calc(100vh-180px)]">
          <form id="b2b-form" onSubmit={handleSubmit} className="p-6 space-y-6" noValidate>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider font-text">
                Nombre Completo *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Juan Pérez García"
                className={`w-full px-4 py-3 border rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 transition-all ${touched.name && errors.name
                  ? 'border-red-500 dark:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500'
                  }`}
              />
              {touched.name && errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-2 font-text">
                  <FaTimes className="w-4 h-4" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider font-text">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="juan@empresa.com"
                className={`w-full px-4 py-3 border rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 transition-all ${touched.email && errors.email
                  ? 'border-red-500 dark:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500'
                  }`}
              />
              {touched.email && errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-2 font-text">
                  <FaTimes className="w-4 h-4" /> {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider font-text">
                Teléfono *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+51 989 223 448"
                className={`w-full px-4 py-3 border rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 transition-all ${touched.phone && errors.phone
                  ? 'border-red-500 dark:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500'
                  }`}
              />
              {touched.phone && errors.phone && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-2 font-text">
                  <FaTimes className="w-4 h-4" /> {errors.phone}
                </p>
              )}
            </div>

            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider font-text">
                Empresa *
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Hotel Paradise S.A.C"
                className={`w-full px-4 py-3 border rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 transition-all ${touched.company && errors.company
                  ? 'border-red-500 dark:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500'
                  }`}
              />
              {touched.company && errors.company && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-2 font-text">
                  <FaTimes className="w-4 h-4" /> {errors.company}
                </p>
              )}
            </div>

            {/* Business Type */}
            <div>
              <label htmlFor="businessType" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider font-text">
                Tipo de Negocio *
              </label>
              <select
                id="businessType"
                name="businessType"
                value={values.businessType}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-4 border-b-2 border-gray-100 dark:border-white/5 text-gray-900 dark:text-white bg-gray-50 dark:bg-black/50 focus:outline-none focus:border-vive-500 transition-all font-bold uppercase text-xs tracking-widest outline-none"
              >
                <option value="hotel">Hotelería / Proyectos</option>
                <option value="tienda">Tienda / Retail</option>
                <option value="distribuidor">Distribuidor Mayorista</option>
                <option value="revendedor">Revendedor Independiente</option>
                <option value="otro">Otros Proyectos</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider font-text">
                Mensaje Adicional
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Cuéntanos más sobre tu negocio y qué necesitas..."
                rows="4"
                className={`w-full px-4 py-3 border rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 resize-none transition-all ${touched.message && errors.message
                  ? 'border-red-500 dark:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500'
                  }`}
              />
              <div className="mt-1 flex justify-between items-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto font-text">
                  {values.message.length}/500
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Footer - Actions */}
        <div className="sticky bottom-0 bg-white dark:bg-[#0F0F0F] border-t border-gray-100 dark:border-white/5 px-6 py-6 space-y-3 z-20">
          <button
            form="b2b-form"
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full py-5 bg-black dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-[0.99] active:scale-95 disabled:opacity-50"
            aria-label="Enviar solicitud vía WhatsApp"
          >
            <span className="relative z-10 flex items-center justify-center gap-4">
              {isSubmitting ? 'Procesando...' : (
                <>
                  <FaWhatsapp className="text-xl text-green-500" />
                  Enviar vía WhatsApp
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-vive-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
          <button
            onClick={onClose}
            className="w-full text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Cerrar formulario"
          >
            Cerrar Formulario
          </button>
        </div>
      </div>
    </>
  );
};

export default WholesaleFormDrawer;
