import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCheck, FaTruck, FaBox, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Get order data from location state or localStorage
    const order = location.state?.orderData || 
                  JSON.parse(localStorage.getItem('sueno-dorado-last-order') || 'null');
    
    if (!order) {
      navigate('/catalogo');
      return;
    }
    
    setOrderData(order);
  }, [navigate, location.state]);

  if (!orderData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vive-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Cargando información del pedido...</p>
        </div>
      </div>
    );
  }

  const formatOrderNumber = () => {
    return `SD-${Date.now().toString().slice(-8)}`;
  };

  const getEstimatedDelivery = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 2); // 2 days delivery
    return deliveryDate.toLocaleDateString('es-PE', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Pedido Confirmado!
          </h1>
          <p className="text-lg opacity-90">
            Tu pedido ha sido recibido y está siendo procesado
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <span className="font-mono font-bold">#{formatOrderNumber()}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Next Steps */}
            <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <FaTruck className="text-green-500" />
                Próximos Pasos
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Confirmación por WhatsApp</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Te contactaremos en las próximas 24 horas para confirmar tu pedido y coordinar el pago.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Procesamiento de Pedido</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Tu pedido será preparado en nuestra fabrica con los más altos estándares de calidad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Despacho y Entrega</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Tu pedido será despachado y entregado en la dirección proporcionada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <FaBox className="text-vive-500" />
                Detalle del Pedido
              </h2>
              
              <div className="space-y-4">
                {orderData.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 pb-4 border-b border-gray-100 dark:border-white/10 last:border-0">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                        {item.quantity}x
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      {item.selectedSize && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
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

              {/* Order Summary */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      S/. {orderData.total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Envío</span>
                    <span className="font-medium text-green-600">Gratis</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white pt-2 border-t border-gray-200 dark:border-white/10">
                    <span>Total</span>
                    <span>S/. {orderData.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <FaHome className="text-blue-500" />
                Información de Envío
              </h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 dark:text-gray-400">Nombre:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {orderData.firstName} {orderData.lastName}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 dark:text-gray-400">Email:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {orderData.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 dark:text-gray-400">Teléfono:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {orderData.phone}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-600 dark:text-gray-400">Dirección:</span>
                  <span className="font-medium text-gray-900 dark:text-white flex-1">
                    {orderData.address}
                  </span>
                </div>
                {orderData.reference && (
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">Referencia:</span>
                    <span className="font-medium text-gray-900 dark:text-white flex-1">
                      {orderData.reference}
                    </span>
                  </div>
                )}
              </div>

              {/* Delivery Estimate */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-lg">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium">
                  <FaTruck className="w-4 h-4" />
                  <span>Entrega estimada: {getEstimatedDelivery()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
            
            {/* Contact Support */}
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">¿Necesitas Ayuda?</h3>
              
              <div className="space-y-3">
                <a 
                  href="tel:+51989223448"
                  className="flex items-center gap-3 p-3 border border-gray-200 dark:border-white/20 rounded-lg hover:border-vive-500 transition-colors"
                >
                  <FaPhone className="text-vive-500" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Llamar ahora</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">(01) 989 223 448</div>
                  </div>
                </a>

                <a 
                  href="mailto:hola@suenodorado.pe"
                  className="flex items-center gap-3 p-3 border border-gray-200 dark:border-white/20 rounded-lg hover:border-vive-500 transition-colors"
                >
                  <FaEnvelope className="text-vive-500" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Enviar email</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">hola@suenodorado.pe</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Seguir Comprando</h3>
              
              <button
                onClick={() => navigate('/catalogo')}
                className="w-full bg-vive-500 text-white py-3 rounded-lg font-medium hover:bg-vive-600 transition-colors"
              >
                Ver más productos
              </button>
            </div>

            {/* Order Tracking */}
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Seguimiento del Pedido</h3>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                    #{formatOrderNumber().slice(-6)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Guarda este número para hacer seguimiento de tu pedido
                </p>
                <button className="w-full border border-vive-500 text-vive-500 py-2 rounded-lg font-medium hover:bg-vive-50 dark:hover:bg-vive-500/10 transition-colors">
                  Copiar número de pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
