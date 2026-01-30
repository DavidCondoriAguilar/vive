import React from 'react';

const ReturnsContent = () => (
    <div className="space-y-6 text-sm text-left">
        <section>
            <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-widest text-[10px] mb-3 border-b border-gray-200 dark:border-white/10 pb-1">Condiciones Generales</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex gap-3"><span className="text-gold-500 font-bold">01.</span> Tiene hasta <strong>7 días calendario</strong> para solicitar un cambio por defecto de fabricación.</li>
                <li className="flex gap-3"><span className="text-gold-500 font-bold">02.</span> El producto debe estar <strong>completamente nuevo</strong>, con embalaje original y etiquetas intactas.</li>
                <li className="flex gap-3"><span className="text-gold-500 font-bold">03.</span> Presentar el comprobante de pago original (Boleta o Factura).</li>
            </ul>
        </section>

        <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/20">
            <p className="text-[11px] text-amber-800 dark:text-amber-400 font-medium leading-relaxed">
                <strong>Nota de Higiene:</strong> Por razones de salud pública, no se aceptan devoluciones de almohadas, sábanas o protectores una vez retirado su empaque de fábrica.
            </p>
        </div>
    </div>
);

export default ReturnsContent;
