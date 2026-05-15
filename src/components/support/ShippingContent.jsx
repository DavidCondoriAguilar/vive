import React from 'react';
import { FaTruck } from 'react-icons/fa';

const ShippingContent = () => (
    <div className="space-y-6 text-sm text-left">
        <div className="bg-gray-50 dark:bg-white/5 p-5 rounded-2xl border border-gray-100 dark:border-white/10">
            <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-widest text-[10px] mb-3 flex items-center gap-2">
                <FaTruck className="text-gray-400" /> Envíos a Provincias
            </h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Llegamos a todo el Perú a través de las agencias de transporte con mayor prestigio (Shalom, Marvisur o de su preferencia).
            </p>
            <ul className="text-[11px] text-gray-500 space-y-1">
                <li>• Modalidad: Pago en destino.</li>
                <li>• Tiempo estimado: 3 a 7 días hábiles.</li>
                <li>• Embalaje reforzado industrial gratuito.</li>
            </ul>
        </div>
    </div>
);

export default ShippingContent;
