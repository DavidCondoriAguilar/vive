import React from 'react';
import medioPago1 from '@assets/images/method-page/medio_pago1.png';
import medioPago2 from '@assets/images/method-page/medio_pago2.png';
import medioPago5 from '@assets/images/method-page/medio_pago5.png';
import yape from '@assets/images/method-page/yape.png';

const PaymentIcons = ({ className = "" }) => {
  return (
    <div className={`flex flex-col sm:flex-row items-center gap-4 ${className}`}>
      <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] font-bold">
        Pagos Seguros:
      </span>

      <div className="flex items-center gap-3">
        {/* Medio Pago 1 */}
        <div className="relative h-7 w-auto flex items-center justify-center">
          <img 
            src={medioPago1} 
            alt="Método de pago 1" 
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Medio Pago 2 */}
        <div className="relative h-7 w-auto flex items-center justify-center">
          <img 
            src={medioPago2} 
            alt="Método de pago 2" 
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Yape */}
        <div className="relative h-7 w-auto flex items-center justify-center">
          <img 
            src={yape} 
            alt="Yape" 
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Medio Pago 5 */}
        <div className="relative h-7 w-auto flex items-center justify-center">
          <img 
            src={medioPago5} 
            alt="Método de pago 5" 
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentIcons;

