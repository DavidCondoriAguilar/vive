import React, { useState } from 'react';
import { useFormValidation } from '@/hooks/useFormValidation';
import { getWhatsAppLink } from '@/utils/constants';
import { FaCheck, FaTimes } from 'react-icons/fa';

/**
 * Wholesale Form with Validation
 * Demonstrates form validation with error handling
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
        role="presentation"
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-500 ease-out w-full max-w-2xl overflow-hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-labelledby="form-title"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-5 flex items-center justify-between">
          <div className="flex-1">
            <h3 id="form-title" className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Cotización Mayorista
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Completa el formulario para obtener una cotización personalizada</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-none transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex-shrink-0"
            aria-label="Cerrar formulario"
            title="Cerrar formulario"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="sticky top-14 bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800 px-6 py-4 flex items-start gap-3">
            <div className="flex-shrink-0">
              <FaCheck className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-800 dark:text-green-300">
                ¡Solicitud enviada! Te contactaremos pronto con una cotización personalizada.
              </p>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="overflow-y-auto h-[calc(100vh-140px)]">
          <form onSubmit={handleSubmit} className="p-6 space-y-5" noValidate>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
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
                className={`w-full px-4 py-3 border rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 transition-all ${
                  touched.name && errors.name
                    ? 'border-red-500 dark:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500'
                }`}
                aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
              />
              {touched.name && errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                  <FaTimes className="w-4 h-4" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
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
                className={`w-full px-4 py-3 border rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 transition-all ${
                  touched.email && errors.email
                    ? 'border-red-500 dark:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500'
                }`}
                aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
              />
              {touched.email && errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                  <FaTimes className="w-4 h-4" /> {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
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
                className={`w-full px-4 py-3 border rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 transition-all ${
                  touched.phone && errors.phone
                    ? 'border-red-500 dark:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500'
                }`}
                aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
                aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
              />
              {touched.phone && errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                  <FaTimes className="w-4 h-4" /> {errors.phone}
                </p>
              )}
            </div>

            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
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
                className={`w-full px-4 py-3 border rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 transition-all ${
                  touched.company && errors.company
                    ? 'border-red-500 dark:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500'
                }`}
                aria-invalid={touched.company && errors.company ? 'true' : 'false'}
                aria-describedby={touched.company && errors.company ? 'company-error' : undefined}
              />
              {touched.company && errors.company && (
                <p id="company-error" className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                  <FaTimes className="w-4 h-4" /> {errors.company}
                </p>
              )}
            </div>

            {/* Business Type */}
            <div>
              <label htmlFor="businessType" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                Tipo de Negocio *
              </label>
              <select
                id="businessType"
                name="businessType"
                value={values.businessType}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition-all"
                aria-invalid={touched.businessType && errors.businessType ? 'true' : 'false'}
              >
                <option value="hotel">Hotel</option>
                <option value="tienda">Tienda de Muebles</option>
                <option value="distribuidor">Distribuidor</option>
                <option value="revendedor">Revendedor</option>
                <option value="otro">Otro</option>
              </select>
              {touched.businessType && errors.businessType && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                  <FaTimes className="w-4 h-4" /> {errors.businessType}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
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
                className={`w-full px-4 py-3 border rounded-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 resize-none transition-all ${
                  touched.message && errors.message
                    ? 'border-red-500 dark:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500'
                }`}
                aria-invalid={touched.message && errors.message ? 'true' : 'false'}
              />
              <div className="mt-1 flex justify-between items-center">
                {touched.message && errors.message && (
                  <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                    <FaTimes className="w-4 h-4" /> {errors.message}
                  </p>
                )}
                <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                  {values.message.length}/500
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Footer - Actions */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-6 space-y-3">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-black uppercase tracking-widest rounded-none hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            aria-label="Enviar solicitud de cotización"
          >
            {isSubmitting ? 'Enviando...' : '📨 Enviar Solicitud'}
          </button>
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-black uppercase tracking-widest rounded-none hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            aria-label="Cerrar formulario"
          >
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};

export default WholesaleFormDrawer;
