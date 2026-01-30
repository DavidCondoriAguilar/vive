import React from 'react';
import { FaHeadset } from 'react-icons/fa';

const ContactContent = () => (
    <div className="space-y-6 text-sm text-left">
        <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500">
                    <FaHeadset />
                </div>
                <div>
                    <h5 className="font-black uppercase tracking-tighter text-xs">Asesoría de Ventas</h5>
                    <p className="text-gray-500 text-[11px]">Lunes - Sábado: 9:00 AM - 7:00 PM</p>
                </div>
            </div>

            <div className="space-y-3 px-2">
                <p className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-2">
                    <span className="text-gray-400 font-bold uppercase text-[9px]">WhatsApp VIP:</span>
                    <span className="font-black text-gold-500">+51 989 223 448</span>
                </p>
                <p className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-2">
                    <span className="text-gray-400 font-bold uppercase text-[9px]">Consultas Email:</span>
                    <span className="font-bold break-all">hola@suenodorado.pe</span>
                </p>
                <p className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-2">
                    <span className="text-gray-400 font-bold uppercase text-[9px]">Planta Central:</span>
                    <span className="text-right text-[10px]">Puente Piedra, Lima - Perú</span>
                </p>
            </div>
        </div>

        <div className="p-4 bg-black rounded-xl text-center">
            <p className="text-gold-500 font-black text-[10px] uppercase tracking-widest">
                Directo de Fábrica al Hogar
            </p>
        </div>
    </div>
);

export default ContactContent;
