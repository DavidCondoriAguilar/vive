import React from 'react';
import {
    LuShieldCheck, LuLeaf, LuAward, LuTruck, LuCircleHelp,
    LuBookOpen, LuScrollText, LuLock, LuFactory, LuNewspaper,
    LuMapPin, LuPackageCheck, LuUserPlus
} from 'react-icons/lu';

export const FOOTER_CONTENT = {
    // SECCIÓN CORPORATIVO
    'nosotros-fabrica': {
        title: 'Nuestra Fábrica',
        icon: <LuFactory className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="font-bold text-gray-900 dark:text-white">Corazón Industrial del Descanso.</p>
                <p>Nuestra planta principal ubicada en **Puente Piedra, Lima**, cuenta con tecnología de vanguardia para el soplado de espuma de alta densidad y el ensamblaje de paneles de resortes ortopédicos.</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-vive-500 pl-4 py-2">
                        <h4 className="font-black text-gray-900 dark:text-white text-xs uppercase">Capacidad</h4>
                        <p className="text-[10px]">+5,000 colchones mensuales.</p>
                    </div>
                    <div className="border-l-2 border-vive-500 pl-4 py-2">
                        <h4 className="font-black text-gray-900 dark:text-white text-xs uppercase">Tecnología</h4>
                        <p className="text-[10px]">Cámaras de curado controlado.</p>
                    </div>
                </div>
                <p className="text-sm italic">"30 años transformando materia prima en el mejor descanso del Perú."</p>
            </div>
        )
    },
    'politica-calidad': {
        title: 'Gestión de la Calidad',
        icon: <LuAward className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="font-bold text-gray-900 dark:text-white">Excelencia en cada fibra.</p>
                <p>Cumplimos estrictamente las normas técnicas peruanas. Cada colchón pasa por 5 puntos de inspección antes del sellado al vacío.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Prueba de fatiga de resortes (ASTM).</li>
                    <li>Verificación de densidad D20, D30, D40 de precisión.</li>
                    <li>Control de costuras y acabados manuales.</li>
                    <li>Insumos certificados libres de plomo y químicos tóxicos.</li>
                </ul>
            </div>
        )
    },
    'politica-ambiental': {
        title: 'Política Ambiental',
        icon: <LuLeaf className="text-green-500 w-8 h-8" />,
        content: (
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p>Reducimos nuestra huella mediante el programa **"Espuma Circular"**, donde reciclamos excedentes para la creación de subproductos térmicos y acústicos.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Uso de pegamentos ecológicos a base de agua.</li>
                    <li>Optimización del corte textil por computadora para cero desperdicio.</li>
                    <li>Logística zonificada para reducir emisiones de CO2.</li>
                </ul>
            </div>
        )
    },
    'politica-sst': {
        title: 'Seguridad y Salud (SST)',
        icon: <LuShieldCheck className="text-blue-500 w-8 h-8" />,
        content: (
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p>Protegemos a nuestra familia de expertos. Implementamos rigurosos protocolos de ergonomía y protección personal para garantizar un entorno industrial 100% seguro.</p>
                <p className="text-xs">Certificación en manejo de maquinaria pesada y brigadas de emergencia permanentes.</p>
            </div>
        )
    },
    'blog-info': {
        title: 'Blog del Sueño',
        icon: <LuNewspaper className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p>Próximamente compartiremos artículos escritos por especialistas en salud y postura.</p>
                <div className="bg-vive-500/5 p-4 rounded-xl border border-vive-500/10">
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Temas que cubriremos:</h4>
                    <ul className="text-xs space-y-1">
                        <li>• Cómo elegir la densidad ideal según tu peso.</li>
                        <li>• Mitos sobre el colchón extra-firme.</li>
                        <li>• La importancia de la almohada en la alineación cervical.</li>
                    </ul>
                </div>
            </div>
        )
    },

    // SECCIÓN TIENDA Y AYUDA
    'rastreo-pedido': {
        title: 'Rastrea tu pedido',
        icon: <LuMapPin className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p>Nuestra logística es directa y personalizada. Para saber el estado de tu entrega, por favor ten a la mano tu **número de pedido** o DNI.</p>
                <p>Los despachos en Lima Metropolitana se realizan en un rango de 24 a 72 horas hábiles.</p>
                <div className="bg-black text-white p-6 rounded-2xl flex items-center justify-between">
                    <div className="text-xs font-bold uppercase tracking-widest">Estado por WhatsApp</div>
                    <LuTruck className="text-vive-500 animate-pulse text-2xl" />
                </div>
            </div>
        )
    },
    'politicas-despacho': {
        title: 'Políticas de Despacho',
        icon: <LuTruck className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="font-bold">Zonas y Tiempos:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>**Lima Metropolitana**: Tarifa variable según distrito. Entrega en primer piso.</li>
                    <li>**Provincias**: Envío hasta la agencia de su preferencia en Lima con embalaje reforzado.</li>
                </ul>
                <p className="text-xs">**Importante**: El cliente debe asegurar que el producto pueda ingresar por las dimensiones de puertas y escaleras. El personal de transporte no realiza maniobras de riesgo por fachada.</p>
            </div>
        )
    },
    'faq': {
        title: 'Preguntas Frecuentes',
        icon: <LuCircleHelp className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-4">
                {[
                    { q: '¿Qué método de pago aceptan?', a: 'Yape, Plin, Transferencias BCP/BBVA y todas las tarjetas de crédito (Link de pago seguro).' },
                    { q: '¿Ustedes son fabricantes?', a: 'Sí, somos fábrica propia. No hay intermediarios, por eso nuestros precios son más convenientes que en tiendas.' },
                    { q: '¿El colchón viene en caja?', a: 'Depende del modelo. Algunos vienen enrollados al vacío y otros en su estructura rígida tradicional.' }
                ].map((item, i) => (
                    <div key={i} className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl">
                        <h4 className="font-bold text-gray-900 dark:text-white text-xs mb-1">{item.q}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-[11px]">{item.a}</p>
                    </div>
                ))}
            </div>
        )
    },
    'cartilla-usuario': {
        title: 'Cartilla de Usuario',
        icon: <LuPackageCheck className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="font-bold uppercase text-[10px] tracking-widest">Lo que debes saber:</p>
                <p>Es normal que durante las primeras 15 noches sientas el colchón más firme de lo esperado; esto es el periodo de adaptación postural.</p>
                <p>**Prohibido**: No planchar ropa sobre el colchón, no verter líquidos corrosivos y no saltar sobre la estructura, ya que podría dañar los resortes internos.</p>
            </div>
        )
    },

    // SECCIÓN USUARIOS / LEGALES
    'garantia': {
        title: 'Garantía de Fábrica',
        icon: <LuShieldCheck className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p>Nuestra garantía cubre cualquier falla estructural de materiales o mano de obra bajo condiciones de uso normal.</p>
                <div className="bg-vive-500 text-black p-4 rounded-lg font-black text-center text-xs uppercase">
                    Validez según línea de producto
                </div>
                <p className="text-[10px]">Para hacerla efectiva, debe conservar su comprobante de pago y las etiquetas del producto.</p>
            </div>
        )
    },
    'distribuidores-b2b': {
        title: 'Distribuidores B2B',
        icon: <LuUserPlus className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p>Únete a nuestra red nacional de socios comerciales. Ofrecemos precios especiales para tiendas de departamentos, hoteles y mueblerías.</p>
                <ul className="list-disc pl-5 space-y-2 text-xs">
                    <li>Márgenes de ganancia competitivos.</li>
                    <li>Soporte con material publicitario.</li>
                    <li>Prioridad en tiempos de fabricación por volumen.</li>
                </ul>
            </div>
        )
    },
    'terminos': {
        title: 'Términos y Condiciones',
        icon: <LuScrollText className="text-gray-500 w-8 h-8" />,
        content: (
            <div className="text-[11px] space-y-4 text-gray-500 leading-relaxed overflow-y-auto max-h-[400px]">
                <p>Bienvenido a Vive. Todos nuestros productos se fabrican bajo demanda o stock disponible.</p>
                <p>**Cancelaciones**: Solo se aceptan antes de que el producto salga de almacén.</p>
                <p>**Derecho de Retracto**: En colchones, al ser productos de uso íntimo y personal, no aplica el retracto si el empaque termosellado ha sido abierto, por estrictas normas de bioseguridad.</p>
            </div>
        )
    },
    'privacidad': {
        title: 'Privacidad de Datos',
        icon: <LuLock className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>Tus datos registrados están protegidos en nuestra base de datos automatizada. Se utilizan únicamente para gestión de pedidos, logística y ofertas exclusivas de la fabrica.</p>
                <p className="text-xs">Usted puede ejercer sus derechos de consulta o eliminación escribiendo a ventasisd@grupoisd.com.</p>
            </div>
        )
    },
    'guia-cuidado': {
        title: 'Manual de Cuidado',
        icon: <LuBookOpen className="text-vive-500 w-8 h-8" />,
        content: (
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p className="font-bold underline">Checklist de Cuidado:</p>
                <ul className="space-y-4">
                    <li className="flex gap-3">
                        <span className="bg-vive-500 text-black font-bold h-5 w-5 rounded-full flex items-center justify-center text-[10px]">1</span>
                        <p className="text-xs">**Ambiente seco**: Evita la humedad excesiva en la habitación.</p>
                    </li>
                    <li className="flex gap-3">
                        <span className="bg-vive-500 text-black font-bold h-5 w-5 rounded-full flex items-center justify-center text-[10px]">2</span>
                        <p className="text-xs">**Aseo**: Aspira el colchón superficialmente una vez al mes.</p>
                    </li>
                    <li className="flex gap-3">
                        <span className="bg-vive-500 text-black font-bold h-5 w-5 rounded-full flex items-center justify-center text-[10px]">3</span>
                        <p className="text-xs">**Bases**: No uses tablas húmedas o con clavos expuestos.</p>
                    </li>
                </ul>
            </div>
        )
    }
};
