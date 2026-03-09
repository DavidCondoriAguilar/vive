import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/layouts/MainLayout';
import { ROUTES, getProductPath } from '@/router/routes';
import { RESORTE_PRODUCTS, ESPUMA_PRODUCTS } from '@/utils/catalogData';

// ─── ICONS ───────────────────────────────────────────────────────────────────
import {
    LuMoon, LuArrowLeft, LuArrowRight, LuCircleCheck, LuStar,
    LuBed, LuWeight, LuRuler, LuHeart, LuShieldCheck
} from 'react-icons/lu';

// ─── MATTRESS DATABASE WITH TAGS ─────────────────────────────────────────────
const MATTRESS_DB = [
    {
        id: 'reconciliacion-pocket',
        name: 'Reconciliación Pocket Visco Mp',
        price: 2499, badge: 'Lujo Supremo',
        firmness: ['medio', 'intermedio'],
        ideal_position: ['lado', 'espalda', 'combinado'],
        weight_support: ['60-80', '80-100', '+100'],
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['columna', 'independencia', 'frescura', 'presion'],
        why: 'Su sistema de resortes Pocket independientes elimina la transferencia de movimiento, ideal para un descanso regenerador profundo.',
        category: 'resorte',
    },
    {
        id: 'ternura-pocket',
        name: 'Ternura Pocket Mp',
        price: 1999, badge: 'Diamont Elite',
        firmness: ['medio', 'intermedio'],
        ideal_position: ['lado', 'espalda', 'combinado'],
        weight_support: ['60-80', '80-100'],
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['independencia', 'columna', 'presion'],
        why: 'Resortes independientes Pocket brindan soporte diferenciado por zonas, perfecto para columna y alivio de presión.',
        category: 'resorte',
    },
    {
        id: 'ventto-marco',
        name: 'Ventto Marco Poliuretano',
        price: 2199, badge: 'Ultra Firme',
        firmness: ['firme', 'muy_firme'],
        ideal_position: ['espalda', 'boca_abajo'],
        weight_support: ['80-100', '+100'],
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['columna', 'durabilidad', 'soporte'],
        why: 'Sistema Bonnell de alto carbono con marco sellado al calor: el máximo soporte ortopédico para personas de mayor peso.',
        category: 'resorte',
    },
    {
        id: 'golden-dream-mp',
        name: 'Golden Dream Mp',
        price: 1699, badge: 'Héroe de la Marca',
        firmness: ['intermedio', 'firme'],
        ideal_position: ['lado', 'espalda', 'combinado'],
        weight_support: ['60-80', '80-100'],
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['columna', 'durabilidad', 'soporte'],
        why: 'Tejido de Punto Acolchado con refuerzo Rebond D66: el equilibrio perfecto entre confort y soporte estructural duradero.',
        category: 'resorte',
    },
    {
        id: 'siempre-pt',
        name: 'Golden Siempre Pillow Mp',
        price: 1549, badge: 'Best Seller',
        firmness: ['intermedio', 'suave'],
        ideal_position: ['lado', 'combinado'],
        weight_support: ['<60', '60-80'],
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['presion', 'frescura', 'confort'],
        why: 'Pillow Top permanente de alta densidad: una capa extra de confort que abraza tu cuerpo mientras mantienes el soporte estructural.',
        category: 'resorte',
    },
    {
        id: 'matrimonial-clasico',
        name: 'Matrimonial Pocket Mp',
        price: 1349, badge: 'Garantía de Fábrica',
        firmness: ['firme', 'intermedio'],
        ideal_position: ['espalda', 'combinado'],
        weight_support: ['60-80', '80-100'],
        sizes: ['1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'],
        features: ['columna', 'durabilidad'],
        why: 'Balance clásico entre firmeza y confort para parejas. Tecnología Pocket con doble cara para duplicar su vida útil.',
        category: 'resorte',
    },
    {
        id: 'infinito-mp',
        name: 'Infinito Mp',
        price: 949, badge: 'Extra Firme',
        firmness: ['muy_firme', 'firme'],
        ideal_position: ['espalda', 'boca_abajo'],
        weight_support: ['80-100', '+100'],
        sizes: ['1.5 PLZ', '2 PLZ'],
        features: ['durabilidad', 'soporte', 'columna'],
        why: 'Estructura reforzada con marco de poliuretano para soporte extremo y máxima durabilidad en uso intensivo.',
        category: 'resorte',
    },
    {
        id: 'goldencito-mp',
        name: 'Goldencito MP',
        price: 699, badge: 'Garantía de Fábrica',
        firmness: ['firme', 'intermedio'],
        ideal_position: ['espalda', 'combinado'],
        weight_support: ['<60', '60-80'],
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['durabilidad', 'soporte'],
        why: 'Sistema MP de Máxima Permanencia con refuerzo perimetral. La opción más accesible con garantía de fábrica completa.',
        category: 'resorte',
    },
    {
        id: 'classic-ana',
        name: 'Classic Anatómico',
        price: 849, badge: 'Garantía de Fábrica',
        firmness: ['intermedio', 'firme'],
        ideal_position: ['espalda', 'lado', 'combinado'],
        weight_support: ['<60', '60-80'],
        sizes: ['1 PLZ', '1.5 PLZ', '2 PLZ'],
        features: ['columna', 'confort'],
        why: 'Diseño anatómico clásico con el equilibrio perfecto entre firmeza y confort para todo tipo de durmiente.',
        category: 'resorte',
    },
];

// ─── SIZE MAP ─────────────────────────────────────────────────────────────────
const SIZE_MAP = {
    '1_plaza': '1 PLZ',
    '1_5_plazas': '1.5 PLZ',
    '2_plazas': '2 PLZ',
    'queen': 'QUEEN',
    'king': 'KING',
};

// ─── QUESTIONS ────────────────────────────────────────────────────────────────
const STEPS = [
    {
        id: 'sleep_position',
        step: 1,
        icon: <LuMoon className="w-6 h-6" />,
        title: 'Posición al dormir',
        subtitle: '¿En qué posición duermes la mayor parte del tiempo?',
        field: 'sleep_position',
        options: [
            { value: 'lado', label: 'De lado', emoji: '🛌', desc: 'Costado izquierdo o derecho' },
            { value: 'espalda', label: 'Boca arriba', emoji: '😴', desc: 'Posición neutral de la columna' },
            { value: 'boca_abajo', label: 'Boca abajo', emoji: '🤔', desc: 'Con el rostro hacia la almohada' },
            { value: 'combinado', label: 'Cambio de posición', emoji: '🔄', desc: 'Me muevo mucho durante la noche' },
        ],
    },
    {
        id: 'comfort_level',
        step: 2,
        icon: <LuBed className="w-6 h-6" />,
        title: 'Nivel de firmeza',
        subtitle: '¿Qué sensación prefieres al acostarte?',
        field: 'comfort_level',
        options: [
            { value: 'muy_firme', label: 'Muy firme', emoji: '🪨', desc: 'Soporte máximo, sin hundimiento' },
            { value: 'firme', label: 'Firme equilibrado', emoji: '🏋️', desc: 'Firme pero con algo de confort' },
            { value: 'intermedio', label: 'Confort medio', emoji: '⚖️', desc: 'Equilibrio entre firmeza y suavidad' },
            { value: 'suave', label: 'Suave y adaptable', emoji: '☁️', desc: 'Se amolda a la forma del cuerpo' },
            { value: 'no_se', label: 'No estoy seguro', emoji: '🤷', desc: 'Déjame descubrirlo' },
        ],
    },
    {
        id: 'body_weight',
        step: 3,
        icon: <LuWeight className="w-6 h-6" />,
        title: 'Peso aproximado',
        subtitle: 'Ayuda a calcular el soporte adecuado del colchón.',
        field: 'body_weight',
        options: [
            { value: '<60', label: 'Menos de 60 kg', emoji: '🧘', desc: 'Colchones más suaves son ideales' },
            { value: '60-80', label: '60 – 80 kg', emoji: '🚶', desc: 'Rango estándar de soporte' },
            { value: '80-100', label: '80 – 100 kg', emoji: '💪', desc: 'Soporte robusto recomendado' },
            { value: '+100', label: 'Más de 100 kg', emoji: '🏆', desc: 'Alta firmeza estructural necesaria' },
        ],
    },
    {
        id: 'mattress_size',
        step: 4,
        icon: <LuRuler className="w-6 h-6" />,
        title: 'Tamaño del colchón',
        subtitle: '¿Qué tamaño necesitas?',
        field: 'mattress_size',
        options: [
            { value: '1_plaza', label: '1 Plaza', emoji: '🛏️', desc: '90 × 190 cm — Individual' },
            { value: '1_5_plazas', label: '1.5 Plazas', emoji: '🛏️', desc: '105 × 190 cm — Semi-doble' },
            { value: '2_plazas', label: '2 Plazas', emoji: '🛏️', desc: '140 × 190 cm — Matrimonial' },
            { value: 'queen', label: 'Queen', emoji: '👑', desc: '160 × 200 cm — Amplio' },
            { value: 'king', label: 'King', emoji: '🏰', desc: '200 × 200 cm — Máximo espacio' },
        ],
    },
    {
        id: 'sleep_priority',
        step: 5,
        icon: <LuHeart className="w-6 h-6" />,
        title: 'Tu prioridad de descanso',
        subtitle: '¿Qué es lo más importante para tu sueño?',
        field: 'sleep_priority',
        options: [
            { value: 'presion', label: 'Alivio de presión', emoji: '💆', desc: 'Hombros, caderas y espalda' },
            { value: 'columna', label: 'Soporte de columna', emoji: '🦴', desc: 'Alineación vertebral correcta' },
            { value: 'frescura', label: 'Dormir más fresco', emoji: '❄️', desc: 'Materiales transpirables' },
            { value: 'independencia', label: 'Independencia de movimiento', emoji: '🎯', desc: 'Sin molestias al compañero' },
            { value: 'durabilidad', label: 'Durabilidad y soporte firme', emoji: '🛡️', desc: 'Inversión a largo plazo' },
        ],
    },
];

// ─── ALGORITHM ────────────────────────────────────────────────────────────────
function scoreMatress(mattress, answers) {
    let score = 0;
    const { sleep_position, comfort_level, body_weight, mattress_size, sleep_priority } = answers;

    // 1. Position match (+3 exact, +1 partial)
    if (sleep_position && mattress.ideal_position.includes(sleep_position)) score += 3;
    else if (sleep_position && mattress.ideal_position.includes('combinado')) score += 1;

    // 2. Firmness match
    if (comfort_level) {
        if (comfort_level === 'no_se') {
            score += 1; // neutral
        } else if (mattress.firmness.includes(comfort_level)) {
            score += 3;
        } else if (
            (comfort_level === 'firme' && mattress.firmness.includes('muy_firme')) ||
            (comfort_level === 'intermedio' && (mattress.firmness.includes('firme') || mattress.firmness.includes('suave')))
        ) {
            score += 1;
        }
    }

    // 3. Weight support match
    if (body_weight && mattress.weight_support.includes(body_weight)) score += 3;

    // 4. Size availability match
    if (mattress_size) {
        const sizeLabel = SIZE_MAP[mattress_size];
        if (sizeLabel && mattress.sizes.includes(sizeLabel)) score += 3;
    }

    // 5. Feature/priority match
    if (sleep_priority && mattress.features.includes(sleep_priority)) score += 3;
    else if (sleep_priority) {
        // partial: if mattress has at least 2 matching features from common ones
        const commonFeatures = ['columna', 'confort', 'durabilidad'];
        if (commonFeatures.includes(sleep_priority) && mattress.features.some(f => commonFeatures.includes(f))) {
            score += 1;
        }
    }

    return score;
}

function getRecommendations(answers) {
    const scored = MATTRESS_DB.map(m => ({
        ...m,
        score: scoreMatress(m, answers),
    }));
    scored.sort((a, b) => b.score - a.score);
    return scored;
}

// ─── PROGRESS BAR ─────────────────────────────────────────────────────────────
function ProgressBar({ current, total }) {
    const pct = Math.round((current / total) * 100);
    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-mono font-bold text-vive-500 uppercase tracking-widest">
                    Paso {current} de {total}
                </span>
                <span className="text-[10px] font-mono text-gray-400">{pct}% completado</span>
            </div>
            <div className="h-1 w-full bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-vive-500 to-vive-400 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}

// ─── OPTION CARD ──────────────────────────────────────────────────────────────
function OptionCard({ option, selected, onClick }) {
    return (
        <button
            onClick={() => onClick(option.value)}
            className={`group relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 focus:outline-none
                ${selected
                    ? 'border-vive-500 bg-vive-500/5 shadow-lg shadow-vive-500/10'
                    : 'border-gray-100 dark:border-white/10 hover:border-vive-500/40 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
        >
            {selected && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-vive-500 flex items-center justify-center">
                    <LuCircleCheck className="w-3 h-3 text-white" />
                </div>
            )}
            <div className="flex items-center gap-4">
                <span className="text-3xl">{option.emoji}</span>
                <div>
                    <div className={`font-bold text-sm transition-colors ${selected ? 'text-vive-600 dark:text-vive-400' : 'text-gray-900 dark:text-white'}`}>
                        {option.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{option.desc}</div>
                </div>
            </div>
        </button>
    );
}

// ─── RESULT CARD ──────────────────────────────────────────────────────────────
function ResultCard({ mattress, rank, onClick }) {
    const resorteMatch = RESORTE_PRODUCTS.find(p => p.id === mattress.id);
    const espumaMatch = ESPUMA_PRODUCTS?.find(p => p.id === mattress.id);
    const productData = resorteMatch || espumaMatch;

    const firmnessLabel = {
        muy_firme: 'Muy Firme',
        firme: 'Firme',
        intermedio: 'Intermedio',
        suave: 'Suave',
    };

    return (
        <div className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ${rank === 0
            ? 'border-vive-500/40 bg-gradient-to-br from-vive-500/5 to-transparent shadow-2xl shadow-vive-500/10'
            : 'border-gray-100 dark:border-white/10 bg-white dark:bg-white/5'
            }`}>
            {rank === 0 && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-vive-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <LuStar className="w-3 h-3" />
                    Tu Ideal
                </div>
            )}

            <div className="p-6 lg:p-8">
                {productData?.image && (
                    <div className="relative h-48 lg:h-64 rounded-2xl overflow-hidden mb-6 bg-gray-50 dark:bg-white/5">
                        <img
                            src={productData.image}
                            alt={mattress.name}
                            className="w-full h-full object-contain p-4"
                        />
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <span className="text-[9px] font-mono font-black uppercase tracking-[0.25em] text-vive-500">{mattress.badge}</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mt-1">{mattress.name}</h3>
                        <div className="text-2xl font-black text-vive-600 dark:text-vive-400 mt-1">
                            S/ {mattress.price.toLocaleString()}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {mattress.firmness.map(f => (
                            <span key={f} className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                                {firmnessLabel[f] || f}
                            </span>
                        ))}
                        {mattress.features.slice(0, 3).map(feat => (
                            <span key={feat} className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-vive-500/10 text-vive-600 dark:text-vive-400">
                                {feat}
                            </span>
                        ))}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {mattress.why}
                    </p>

                    <button
                        onClick={() => onClick(mattress.id)}
                        className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                            ${rank === 0
                                ? 'bg-vive-500 hover:bg-vive-600 text-white shadow-lg shadow-vive-500/20'
                                : 'border-2 border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:border-vive-500/40'
                            }`}
                    >
                        Ver Colchón →
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const SleepTestView = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0); // 0 = intro
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);
    const [animating, setAnimating] = useState(false);

    const totalSteps = STEPS.length;
    const currentQuestion = STEPS[currentStep - 1];
    const isIntro = currentStep === 0;
    const isComplete = results !== null;

    const handleStart = () => {
        setAnimating(true);
        setTimeout(() => { setCurrentStep(1); setAnimating(false); }, 400);
    };

    const handleSelect = (field, value) => {
        setAnswers(prev => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        const field = currentQuestion?.field;
        if (!answers[field]) return;

        if (currentStep < totalSteps) {
            setAnimating(true);
            setTimeout(() => {
                setCurrentStep(s => s + 1);
                setAnimating(false);
            }, 300);
        } else {
            // Calculate results
            setAnimating(true);
            setTimeout(() => {
                const ranked = getRecommendations(answers);
                setResults(ranked.slice(0, 3));
                setAnimating(false);
            }, 500);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setAnimating(true);
            setTimeout(() => { setCurrentStep(s => s - 1); setAnimating(false); }, 300);
        } else {
            setAnimating(true);
            setTimeout(() => { setCurrentStep(0); setAnimating(false); }, 300);
        }
    };

    const handleReset = () => {
        setAnswers({});
        setResults(null);
        setCurrentStep(0);
    };

    const canProceed = currentQuestion && !!answers[currentQuestion.field];

    return (
        <MainLayout>
            <Helmet>
                <title>Test de Sueño | Encuentra tu Colchón Ideal | Vive</title>
                <meta name="description" content="Responde 5 preguntas y descubre el colchón perfecto para tu tipo de descanso. Algoritmo biomecánico personalizado de Vive." />
            </Helmet>

            <div className="min-h-screen bg-white dark:bg-[#050505] pt-[120px] pb-24">
                {/* BG AMBIENT */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-vive-500/5 blur-[150px] rounded-full" />
                    <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-vive-500/3 blur-[120px] rounded-full" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#299C4708_1px,transparent_1px),linear-gradient(to_bottom,#299C4708_1px,transparent_1px)] bg-[size:80px_80px] opacity-50" />
                </div>

                <div className="relative z-10 container mx-auto px-4 max-w-3xl">

                    {/* ── INTRO SCREEN ─────────────────────────────────────── */}
                    {isIntro && !isComplete && (
                        <div className={`transition-all duration-400 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                            <div className="text-center space-y-8">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vive-500/10 border border-vive-500/20 text-vive-500 text-xs font-black uppercase tracking-widest">
                                    <LuStar className="w-3.5 h-3.5" />
                                    Test Biomecánico
                                </div>

                                <div>
                                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                                        ¿Cuál es tu colchón
                                        <span className="block text-vive-500 italic font-medium">ideal?</span>
                                    </h1>
                                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
                                        5 preguntas rápidas. Nuestro algoritmo analiza tu perfil de descanso y recomienda el colchón perfecto de nuestro catálogo.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                                    {[
                                        { value: '5', label: 'Preguntas' },
                                        { value: '< 2 min', label: 'Duración' },
                                        { value: '100%', label: 'Personalizado' },
                                    ].map((s, i) => (
                                        <div key={i} className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                                            <div className="text-2xl font-black text-vive-500">{s.value}</div>
                                            <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{s.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Features */}
                                <div className="space-y-3 text-left max-w-sm mx-auto">
                                    {[
                                        'Posición al dormir y firmeza preferida',
                                        'Tu peso y tamaño de cama necesario',
                                        'Tu prioridad de descanso',
                                    ].map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                            <LuCircleCheck className="w-4 h-4 text-vive-500 shrink-0" />
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={handleStart}
                                    className="group inline-flex items-center gap-3 px-10 py-5 bg-vive-500 hover:bg-vive-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-vive-500/25 active:scale-95"
                                >
                                    Iniciar Test de Sueño
                                    <LuArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </button>

                                <button
                                    onClick={() => navigate(ROUTES.GUIDES)}
                                    className="block text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mt-4"
                                >
                                    ← Volver a la Guía de Descanso
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ── QUESTION STEPS ───────────────────────────────────── */}
                    {!isIntro && !isComplete && currentQuestion && (
                        <div className={`transition-all duration-300 ${animating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                            {/* Header */}
                            <div className="mb-8">
                                <ProgressBar current={currentStep} total={totalSteps} />
                            </div>

                            {/* Question Card */}
                            <div className="bg-white dark:bg-[#111] rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl overflow-hidden">
                                {/* Question Header */}
                                <div className="p-6 lg:p-8 border-b border-gray-100 dark:border-white/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-vive-500/10 flex items-center justify-center text-vive-500">
                                            {currentQuestion.icon}
                                        </div>
                                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-vive-500">
                                            {currentQuestion.title}
                                        </span>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                                        {currentQuestion.subtitle}
                                    </h2>
                                </div>

                                {/* Options Grid */}
                                <div className="p-6 lg:p-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {currentQuestion.options.map(opt => (
                                            <OptionCard
                                                key={opt.value}
                                                option={opt}
                                                selected={answers[currentQuestion.field] === opt.value}
                                                onClick={(val) => handleSelect(currentQuestion.field, val)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="p-6 lg:p-8 pt-0 flex items-center justify-between gap-4">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                                    >
                                        <LuArrowLeft className="w-4 h-4" />
                                        Atrás
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        disabled={!canProceed}
                                        className={`group flex-1 max-w-xs flex items-center justify-center gap-3 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300
                                            ${canProceed
                                                ? 'bg-vive-500 hover:bg-vive-600 text-white shadow-lg shadow-vive-500/20 hover:scale-[1.02] active:scale-[0.98]'
                                                : 'bg-gray-100 dark:bg-white/5 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        {currentStep === totalSteps ? 'Ver mi resultado' : 'Siguiente'}
                                        <LuArrowRight className={`w-4 h-4 transition-transform ${canProceed ? 'group-hover:translate-x-1' : ''}`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── RESULTS ──────────────────────────────────────────── */}
                    {isComplete && results && (
                        <div className={`transition-all duration-500 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                            {/* Result Header */}
                            <div className="text-center mb-10 space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vive-500/10 border border-vive-500/20 text-vive-500 text-xs font-black uppercase tracking-widest">
                                    <LuShieldCheck className="w-3.5 h-3.5" />
                                    Análisis Completado
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                                    Tu colchón
                                    <span className="text-vive-500 italic font-medium"> ideal</span>
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Basado en tus respuestas, nuestro algoritmo identificó el mejor match para ti.
                                </p>
                            </div>

                            {/* Summary Chips */}
                            <div className="flex flex-wrap gap-2 justify-center mb-10">
                                {Object.entries(answers).map(([key, val]) => {
                                    const step = STEPS.find(s => s.field === key);
                                    const opt = step?.options.find(o => o.value === val);
                                    return opt ? (
                                        <span key={key} className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 font-medium">
                                            {opt.emoji} {opt.label}
                                        </span>
                                    ) : null;
                                })}
                            </div>

                            {/* Results Grid */}
                            <div className="grid grid-cols-1 gap-6">
                                {results.map((mattress, i) => (
                                    <ResultCard
                                        key={mattress.id}
                                        mattress={mattress}
                                        rank={i}
                                        onClick={(id) => navigate(getProductPath(id))}
                                    />
                                ))}
                            </div>

                            {/* Restart */}
                            <div className="mt-10 text-center space-y-4">
                                <button
                                    onClick={handleReset}
                                    className="text-sm text-gray-500 hover:text-vive-500 transition-colors font-medium underline underline-offset-4"
                                >
                                    Repetir el test
                                </button>
                                <div className="block text-xs text-gray-400">
                                    ¿No encuentras lo que buscas?{' '}
                                    <a
                                        href={`https://wa.me/51989223448?text=Hola Vive, necesito asesoría personalizada para elegir mi colchón ideal.`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="text-vive-500 hover:text-vive-600 font-bold transition-colors"
                                    >
                                        Habla con un experto →
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default SleepTestView;
