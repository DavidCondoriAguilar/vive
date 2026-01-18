import { useState, useEffect } from 'react';
import { getWhatsAppLink } from '@/utils/constants';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Utility function to format price safely
  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    const validPrice = isNaN(numPrice) ? 0 : numPrice;
    return validPrice;
  };

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    const savedCart = localStorage.getItem('sueno-dorado-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
        localStorage.removeItem('sueno-dorado-cart');
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('sueno-dorado-cart', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('sueno-dorado-cart');
    }
  }, [cartItems]);

  // Agregar producto al carrito
  const addToCart = (product, quantity = 1, selectedSize = null) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.selectedSize === selectedSize
      );

      if (existingItem) {
        // Si el producto ya existe, actualizar cantidad
        return prevItems.map(item =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si es un nuevo producto, agregarlo
        return [...prevItems, {
          ...product,
          quantity,
          selectedSize,
          addedAt: new Date().toISOString()
        }];
      }
    });

    // Mostrar notificación (opcional)
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 3000);
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId, selectedSize = null) => {
    setCartItems(prevItems =>
      prevItems.filter(item =>
        !(item.id === productId && item.selectedSize === selectedSize)
      )
    );
  };

  // Actualizar cantidad de producto
  const updateQuantity = (productId, quantity, selectedSize = null) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId && item.selectedSize === selectedSize
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  // Vaciar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total del carrito
  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.selectedSize ? item.sizes?.[item.selectedSize] || item.price : item.price;
      const validPrice = formatPrice(price);
      return total + (validPrice * item.quantity);
    }, 0);
  };

  // Obtener cantidad total de items
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Generar mensaje para WhatsApp
  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) return '';

    let message = '*Nuevo Pedido - Sueño Dorado*\n\n';
    message += '*Detalle del Pedido:*\n\n';

    cartItems.forEach((item, index) => {
      const price = item.selectedSize ? item.sizes?.[item.selectedSize] || item.price : item.price;
      const validPrice = formatPrice(price);
      const sizeText = item.selectedSize ? ` - Talla: ${item.selectedSize}` : '';
      
      message += `${index + 1}. *${item.name}*${sizeText}\n`;
      message += `   - Precio: S/. ${validPrice.toFixed(2)}\n`;
      message += `   - Cantidad: ${item.quantity}\n`;
      message += `   - Subtotal: S/. ${(validPrice * item.quantity).toFixed(2)}\n\n`;
    });

    message += `*Total del Pedido: S/. ${getTotal().toFixed(2)}*\n\n`;
    message += '*Datos de Envío:*\n';
    message += '   (Por favor, proporciona tus datos de envío)\n\n';
    message += '*Información de Contacto:*\n';
    message += '   • Nombre completo\n';
    message += '   • Teléfono\n';
    message += '   • Dirección de entrega\n';
    message += '   • Departamento/Provincia\n';
    message += '   • Referencia\n\n';
    message += '*Método de Pago:*\n';
    message += '   (Efectivo, Yape, Transferencia, etc.)\n\n';
    message += '*Nota: Nos comunicaremos contigo a la brevedad para confirmar tu pedido y coordinar el envío.*\n\n';
    message += '---\n';
    message += '*Sueño Dorado - Fábrica de Colchones Premium*';

    return message;
  };

  // Procesar pedido y redirigir a WhatsApp
  const processOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappLink = getWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
    
    // Opcional: Limpiar carrito después de procesar
    // clearCart();
  };

  return {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getTotalItems,
    processOrder,
    generateWhatsAppMessage
  };
};
