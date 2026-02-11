import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { getWhatsAppLink } from '@/utils/constants';

// Action types
const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART',
  TOGGLE_CART: 'TOGGLE_CART',
  SET_CART_OPEN: 'SET_CART_OPEN',
  SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
  HIDE_NOTIFICATION: 'HIDE_NOTIFICATION'
};

// Initial state
const initialState = {
  items: [],
  isOpen: false,
  notification: {
    isOpen: false,
    productName: '',
    quantity: 0,
    size: null
  }
};

// Utility function to format price safely
const formatPrice = (price) => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  const validPrice = isNaN(numPrice) ? 0 : numPrice;
  return validPrice;
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { product, quantity = 1, selectedSize = null } = action.payload;

      const existingItem = state.items.find(
        item => item.id === product.id && item.selectedSize === selectedSize
      );

      let newItems;
      if (existingItem) {
        // Update existing item quantity
        newItems = state.items.map(item =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        newItems = [...state.items, {
          ...product,
          quantity,
          selectedSize,
          addedAt: new Date().toISOString()
        }];
      }

      return {
        ...state,
        items: newItems,
        isOpen: true, // Auto-open cart when adding items
        notification: {
          isOpen: true,
          productName: product.name,
          quantity: quantity,
          size: selectedSize
        }
      };
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { productId, selectedSize = null } = action.payload;
      return {
        ...state,
        items: state.items.filter(item =>
          !(item.id === productId && item.selectedSize === selectedSize)
        )
      };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { productId, quantity, selectedSize = null } = action.payload;

      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item =>
            !(item.id === productId && item.selectedSize === selectedSize)
          )
        };
      }

      return {
        ...state,
        items: state.items.map(item =>
          item.id === productId && item.selectedSize === selectedSize
            ? { ...item, quantity }
            : item
        )
      };
    }

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: []
      };

    case CART_ACTIONS.LOAD_CART:
      return {
        ...state,
        items: action.payload
      };

    case CART_ACTIONS.TOGGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case CART_ACTIONS.SET_CART_OPEN:
      return {
        ...state,
        isOpen: action.payload
      };

    case CART_ACTIONS.SHOW_NOTIFICATION: {
      return {
        ...state,
        notification: {
          isOpen: true,
          ...action.payload
        }
      };
    }

    case CART_ACTIONS.HIDE_NOTIFICATION: {
      return {
        ...state,
        notification: {
          ...state.notification,
          isOpen: false
        }
      };
    }

    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('sueno-dorado-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart:', error);
        localStorage.removeItem('sueno-dorado-cart');
      }
    }
  }, []);

  // Save cart to localStorage when items change
  useEffect(() => {
    if (state.items.length > 0) {
      localStorage.setItem('sueno-dorado-cart', JSON.stringify(state.items));
    } else {
      localStorage.removeItem('sueno-dorado-cart');
    }
  }, [state.items]);


  // Cart actions
  const addToCart = (product, quantity = 1, selectedSize = null) => {
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: { product, quantity, selectedSize }
    });
  };

  const removeFromCart = (productId, selectedSize = null) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: { productId, selectedSize }
    });
  };

  const updateQuantity = (productId, quantity, selectedSize = null) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { productId, quantity, selectedSize }
    });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const toggleCart = () => {
    dispatch({ type: CART_ACTIONS.TOGGLE_CART });
  };

  const setIsCartOpen = (isOpen) => {
    dispatch({ type: CART_ACTIONS.SET_CART_OPEN, payload: isOpen });
  };

  // Notification methods
  const showNotification = (productName, quantity, size = null) => {
    dispatch({
      type: CART_ACTIONS.SHOW_NOTIFICATION,
      payload: { productName, quantity, size }
    });
  };

  const hideNotification = () => {
    dispatch({ type: CART_ACTIONS.HIDE_NOTIFICATION });
  };

  // Getters
  const getTotal = () => {
    return 0; // Prices are removed
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const generateWhatsAppMessage = () => {
    if (state.items.length === 0) return '';

    let message = '*Nuevo Pedido - Vive*\n\n';
    message += '*Detalle del Pedido:*\n\n';

    state.items.forEach((item, index) => {
      const sizeText = item.selectedSize ? ` - Talla: ${item.selectedSize}` : '';
      message += `${index + 1}. *${item.name}*${sizeText}\n`;
      message += `   - Cantidad: ${item.quantity}\n\n`;
    });

    message += `*Solicitud: Por favor, brindarme los precios y disponibilidad de estos productos.*\n\n`;
    message += '*Datos del Cliente:*\n';
    message += '   (Por favor, proporciona tus datos para la cotización)\n\n';
    message += '*Información de Contacto:*\n';
    message += '   • Nombre completo\n';
    message += '   • Teléfono\n';
    message += '   • Dirección/Ciudad\n\n';
    message += '*Nota: Un asesor se comunicará contigo para brindarte los precios oficiales y coordinar tu pedido.*\n\n';
    message += '---\n';
    message += '*Vive - Fábrica de Colchones Premium*';

    return message;
  };

  const processOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappLink = getWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
  };

  const value = {
    // State
    cartItems: state.items,
    isCartOpen: state.isOpen,
    notification: state.notification,

    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    setIsCartOpen,

    // Notification methods
    showNotification,
    hideNotification,

    // Getters
    getTotal,
    getTotalItems,
    generateWhatsAppMessage,
    processOrder
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
