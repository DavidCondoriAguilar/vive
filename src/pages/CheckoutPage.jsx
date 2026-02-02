import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { FaArrowRight, FaCheck, FaLock, FaTruck, FaCreditCard } from 'react-icons/fa';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, getTotal, getTotalItems, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    document: '',
    address: '',
    department: '',
    province: '',
    district: '',
    reference: '',
    // Payment Info
    paymentMethod: 'whatsapp',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    // Order Notes
    notes: ''
  });

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  // Redirect if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/catalogo');
    }
  }, [cartItems, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        // Validate shipping info
        return formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.address;
      case 2:
        // Validate payment method
        return formData.paymentMethod;
      case 3:
        // Review step - always valid
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Process order
    const orderData = {
      ...formData,
      items: cartItems,
      total: getTotal(),
      itemCount: getTotalItems(),
      orderDate: new Date().toISOString()
    };

    // Save order to localStorage for tracking
    localStorage.setItem('sueno-dorado-last-order', JSON.stringify(orderData));

    // Redirect to confirmation
    navigate('/confirmacion-pedido', { state: { orderData } });

    // Clear cart after successful order
    clearCart();
  };

  const StepIndicator = ({ step, title, isCompleted }) => {
    return (
      <div className={`flex items-center gap-3 ${isCompleted ? 'opacity-100' : 'opacity-50'}`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all ${isCompleted
          ? 'bg-gold-500 text-white'
          : currentStep > step
            ? 'bg-green-500 text-white'
            : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400'
          }`}>
          {isCompleted ? <FaCheck className="w-4 h-4" /> : step}
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
      </div>
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Agrega productos para continuar con tu compra
          </p>
          <button
            onClick={() => navigate('/catalogo')}
            className="bg-gold-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-gold-600 transition-colors"
          >
            Ver Catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-100 dark:border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Checkout
            </h1>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Paso {currentStep} de {totalSteps}
            </span>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <StepIndicator step={1} title="Información de Envío" isCompleted={currentStep > 1} />
            <div className="flex-1 h-1 bg-gray-200 dark:bg-white/10 mx-4">
              <div
                className="h-full bg-gold-500 transition-all duration-500"
                style={{ width: `${currentStep > 1 ? '100%' : '0%'}` }}
              />
            </div>
            <StepIndicator step={2} title="Método de Pago" isCompleted={currentStep > 2} />
            <div className="flex-1 h-1 bg-gray-200 dark:bg-white/10 mx-4">
              <div
                className="h-full bg-gold-500 transition-all duration-500"
                style={{ width: `${currentStep > 2 ? '100%' : '0%'}` }}
              />
            </div>
            <StepIndicator step={3} title="Confirmar Pedido" isCompleted={currentStep > 3} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2">

            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <div className="bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-white/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaTruck className="text-gold-500 w-5 h-5" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Información de Envío
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nombres *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/20 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="Tus nombres"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/20 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="Tus apellidos"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/20 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/20 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="+51 999 999 999"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Dirección de Entrega *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/20 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="Av. Principal 123, Depto 404"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Departamento
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/20 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                    >
                      <option value="">Selecciona tu departamento</option>
                      <option value="lima">Lima</option>
                      <option value="arequipa">Arequipa</option>
                      <option value="cusco">Cusco</option>
                      {/* Add more departments */}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Referencia
                    </label>
                    <input
                      type="text"
                      name="reference"
                      value={formData.reference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/20 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="Frente al centro comercial, color verde, etc."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && (
              <div className="bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-white/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaCreditCard className="text-gold-500 w-5 h-5" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Método de Pago
                  </h2>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center p-4 border border-gray-200 dark:border-white/20 rounded-lg cursor-pointer hover:border-gold-500 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="whatsapp"
                      checked={formData.paymentMethod === 'whatsapp'}
                      onChange={handleInputChange}
                      className="mr-4"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">WhatsApp</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Te contactaremos para coordinar el pago</div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-200 dark:border-white/20 rounded-lg cursor-pointer hover:border-gold-500 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="yape"
                      checked={formData.paymentMethod === 'yape'}
                      onChange={handleInputChange}
                      className="mr-4"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">Yape</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Pago instantáneo por Yape</div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-200 dark:border-white/20 rounded-lg cursor-pointer hover:border-gold-500 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={formData.paymentMethod === 'transfer'}
                      onChange={handleInputChange}
                      className="mr-4"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">Transferencia Bancaria</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Transferencia directa a cuenta</div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-200 dark:border-white/20 rounded-lg cursor-pointer hover:border-gold-500 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="mr-4"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">Tarjeta de Crédito/Débito</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Pago seguro con tarjeta</div>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <div className="bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-white/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaCheck className="text-gold-500 w-5 h-5" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Confirmar Pedido
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Shipping Info Summary */}
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3">Información de Envío</h3>
                    <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300">
                      <p><strong>Nombre:</strong> {formData.firstName} {formData.lastName}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Teléfono:</strong> {formData.phone}</p>
                      <p><strong>Dirección:</strong> {formData.address}</p>
                      {formData.reference && <p><strong>Referencia:</strong> {formData.reference}</p>}
                    </div>
                  </div>

                  {/* Payment Method Summary */}
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3">Método de Pago</h3>
                    <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300">
                      <p>
                        {formData.paymentMethod === 'whatsapp' ? 'WhatsApp - Te contactaremos para coordinar' :
                          formData.paymentMethod === 'yape' ? 'Yape - Pago instantáneo' :
                            formData.paymentMethod === 'transfer' ? 'Transferencia Bancaria' :
                              formData.paymentMethod === 'card' ? 'Tarjeta de Crédito/Débito' : ''}
                      </p>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-gold-50 dark:bg-gold-500/10 border border-gold-200 dark:border-gold-500/30 rounded-lg p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-1"
                        required
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Acepto los <a href="/terminos" className="text-gold-500 hover:underline">términos y condiciones</a> y la <a href="/politica-privacidad" className="text-gold-500 hover:underline">política de privacidad</a>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-200 dark:border-white/20 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Anterior
              </button>

              <button
                onClick={currentStep === 3 ? handleSubmit : nextStep}
                disabled={!validateStep(currentStep)}
                className="px-8 py-3 bg-gold-500 text-white rounded-lg font-medium hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                {currentStep === 3 ? 'Confirmar Pedido' : 'Siguiente'}
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-white/10 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Resumen del Pedido</h3>

              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 dark:text-white truncate">
                        {item.name}
                      </p>
                      {item.selectedSize && (
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Talla: {item.selectedSize}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-white">
                        S/. {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    S/. {getTotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Envío</span>
                  <span className="font-medium text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white pt-2 border-t border-gray-200 dark:border-white/10">
                  <span>Total</span>
                  <span>S/. {getTotal().toFixed(2)}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <FaLock className="text-green-500" />
                  <span>Pago 100% Seguro</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <FaTruck className="text-blue-500" />
                  <span>Envío Gratis a Lima</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <FaCheck className="text-gold-500" />
                  <span>Garantía de Fábrica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
