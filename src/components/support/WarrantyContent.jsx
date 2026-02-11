import React from 'react';

const WarrantyContent = () => (
    <div className="space-y-6 text-sm max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar text-left">
        <section>
            <h4 className="font-bold text-vive-600 dark:text-vive-500 uppercase tracking-widest text-[10px] mb-3 border-b border-vive-500/20 pb-1">1. Recomendaciones para el Buen Uso</h4>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>Para mantener las propiedades de tu colchón por más tiempo, sigue estos consejos:</p>
                <ul className="space-y-3">
                    <li className="flex gap-3"><span className="text-vive-500 font-bold">•</span> <strong>Soporte adecuado:</strong> Utiliza el colchón siempre sobre una superficie totalmente plana y de las mismas dimensiones del colchón.</li>
                    <li className="flex gap-3"><span className="text-vive-500 font-bold">•</span> <strong>Base de madera:</strong> Si usas tarimas, los travesaños deben tener al menos 10 cm de ancho y una separación máxima de 7 cm.</li>
                    <li className="flex gap-3"><span className="text-vive-500 font-bold">•</span> <strong>Ventilación inicial:</strong> Retira el empaque y deja ventilar al menos dos horas antes del primer uso.</li>
                    <li className="flex gap-3"><span className="text-vive-500 font-bold">•</span> <strong>Mantenimiento preventivo:</strong> Voltea y gira el colchón (de pies a cabeza) cada tres meses.</li>
                </ul>
            </div>
        </section>

        <section className="bg-gray-50 dark:bg-white/5 p-4 rounded-2xl border border-gray-100 dark:border-white/10">
            <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-widest text-[10px] mb-3">Evita daños estructurales:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[11px] text-gray-500">
                <li>• No saltes sobre el colchón.</li>
                <li>• No planches ni fumes cerca de él.</li>
                <li>• No derrames líquidos.</li>
                <li>• No dobles, enrolles ni amarres.</li>
                <li>• No levantar de las pestañas del Pillow Top.</li>
            </ul>
        </section>

        <section>
            <h4 className="font-bold text-vive-600 dark:text-vive-500 uppercase tracking-widest text-[10px] mb-3 border-b border-vive-500/20 pb-1">2. Condiciones de la Garantía</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex gap-2"><strong>Validez:</strong> Condicionada al cumplimiento estricto de las recomendaciones mencionadas.</li>
                <li className="flex gap-2"><strong>Cobertura:</strong> Cubre la durabilidad de la estructura interna del colchón.</li>
                <li className="flex gap-2"><strong>Procedimiento:</strong> La empresa procederá con la reparación según criterio técnico oficial.</li>
                <li className="flex gap-2"><strong>Vigencia:</strong> La reparación no implica la extensión del periodo original.</li>
            </ul>
        </section>

        <section className="bg-red-50 dark:bg-red-900/10 p-5 rounded-2xl border border-red-100 dark:border-red-900/20">
            <h4 className="font-bold text-red-600 dark:text-red-400 uppercase tracking-widest text-[10px] mb-3">3. Anulación de la Garantía</h4>
            <ul className="space-y-2 text-[11px] text-red-800 dark:text-red-300">
                <li>• <strong>Mal uso:</strong> Tela quemada, rota o manchada con líquidos.</li>
                <li>• <strong>Exceso de peso:</strong> Superar la capacidad (Promedio: 80kg/1.5plz y 130kg/2plz).</li>
                <li>• <strong>Manipulación externa:</strong> Si el producto fue abierto por terceros.</li>
                <li>• <strong>Identificación:</strong> Ausencia de etiquetas o comprobante de pago original.</li>
            </ul>
        </section>
    </div>
);

export default WarrantyContent;
