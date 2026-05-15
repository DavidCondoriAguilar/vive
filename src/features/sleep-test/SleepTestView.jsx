import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '@shared/hooks/useScrollReveal';
import MainLayout from '@/layouts/MainLayout';
import { ROUTES, getProductPath } from '@/router/routes';
import { LuArrowLeft, LuArrowRight, LuStar, LuCircleCheck, LuShieldCheck } from 'react-icons/lu';

// Data & Utils
import { STEPS } from './data/steps';
import { getRecommendations } from './utils/algorithm';

// Components
import { ProgressBar } from './components/ProgressBar';
import { OptionCard } from './components/OptionCard';
import { ResultCard } from './components/ResultCard';

const SleepTestView = () => {
    useScrollReveal();
    const navigate = useNavigate();
    const location = useLocation();
    const [currentStep, setCurrentStep] = useState(0); // 0 = intro
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);
    const [animating, setAnimating] = useState(false);

    // Sync with initial answer from Home Teaser (Adaptive Flow)
    React.useEffect(() => {
        if (location.state?.initialAnswer && !answers.sleep_position) {
            setAnswers({ sleep_position: location.state.initialAnswer });
        }
    }, [location.state, answers.sleep_position]);

    const totalSteps = STEPS.length;
    const currentQuestion = STEPS[currentStep - 1];
    const isIntro = currentStep === 0;
    const isComplete = results !== null;

    const handleStart = () => {
        setAnimating(true);
        setTimeout(() => { 
            // Logic: If we already have the position, go straight to Step 2
            setCurrentStep(answers.sleep_position ? 2 : 1); 
            setAnimating(false); 
        }, 400);
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
                <meta property="og:title" content="Test de Sueño | Encuentra tu Colchón Ideal | Vive" />
                <meta property="og:description" content="Descubre el colchón perfecto para tu tipo de descanso con nuestro test biomecánico personalizado." />
                <meta property="og:image" content="https://vive.pe/logo-main.jpg" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div className="min-h-[calc(100vh-70px)] bg-white dark:bg-[#050505] flex items-center justify-center py-10">
                {/* BG AMBIENT */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-vive-500/5 blur-[150px] rounded-full" />
                    <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-vive-500/3 blur-[120px] rounded-full" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#299C4708_1px,transparent_1px),linear-gradient(to_bottom,#299C4708_1px,transparent_1px)] bg-[size:80px_80px] opacity-50" />
                </div>

                <div className="relative z-10 container mx-auto px-4 max-w-2xl">
                    {/* ── INTRO SCREEN ─────────────────────────────────────── */}
                    {isIntro && !isComplete && (
                        <div className={`transition-all duration-400 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                            <div className="text-center space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vive-500/10 border border-vive-500/20 text-vive-500 text-xs font-black uppercase tracking-widest">
                                    <LuStar className="w-3.5 h-3.5" />
                                    Test Biomecánico
                                </div>

                                <div>
                                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                                        ¿Cuál es tu colchón
                                        <span className="block text-vive-500 italic font-medium">ideal?</span>
                                    </h1>
                                    <p className="text-base text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto leading-relaxed">
                                        5 preguntas rápidas. Nuestro algoritmo analiza tu descanso y recomienda el colchón perfecto.
                                    </p>
                                </div>

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

                                <div className="space-y-2 text-left max-w-xs mx-auto">
                                    {[
                                        'Posición y firmeza',
                                        'Peso y tamaño',
                                        'Tu prioridad',
                                    ].map((f, i) => (
                                        <div key={i} className="flex items-center gap-2.5 text-xs text-gray-600 dark:text-gray-300">
                                            <LuCircleCheck className="w-3.5 h-3.5 text-vive-500 shrink-0" />
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                {answers.sleep_position && (
                                    <div className="max-w-sm mx-auto p-4 bg-vive-500/5 border border-vive-500/20 rounded-2xl flex items-center justify-between mb-8 animate-pulse">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-vive-500/20 flex items-center justify-center text-vive-500">
                                                <LuCircleCheck className="w-4 h-4" />
                                            </div>
                                            <div className="text-left">
                                                <span className="block text-[8px] font-black text-vive-500 uppercase tracking-widest">Respuesta Capturada</span>
                                                <span className="text-sm font-bold text-gray-900 dark:text-white capitalize">Paso 01: {answers.sleep_position === 'lado' ? 'De Lado' : 'Boca Arriba/Abajo'}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <button
                                    onClick={handleStart}
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-vive-500 hover:bg-vive-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                                >
                                    {answers.sleep_position ? 'Continuar Análisis' : 'Iniciar Test'}
                                    <LuArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                            <div className="mb-6">
                                <ProgressBar current={currentStep} total={totalSteps} />
                            </div>

                            <div className="bg-white dark:bg-[#111] rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl overflow-hidden">
                                <div className="p-5 lg:p-7 border-b border-gray-100 dark:border-white/10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-vive-500/10 flex items-center justify-center text-vive-500">
                                            {currentQuestion.icon}
                                        </div>
                                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-vive-500">
                                            {currentQuestion.title}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                                        {currentQuestion.subtitle}
                                    </h2>
                                </div>

                                <div className="p-5 lg:p-7">
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

                                <div className="p-5 lg:p-7 pt-0 flex items-center justify-between gap-4">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors font-bold"
                                    >
                                        <LuArrowLeft className="w-3.5 h-3.5" />
                                        VOLVER
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        disabled={!canProceed}
                                        className={`group flex-1 max-w-[180px] flex items-center justify-center gap-3 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300
                                            ${canProceed
                                                ? 'bg-vive-500 hover:bg-vive-600 text-white shadow-lg shadow-vive-500/20 active:scale-[0.98]'
                                                : 'bg-gray-100 dark:bg-white/5 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        {currentStep === totalSteps ? 'Finalizar' : 'Siguiente'}
                                        <LuArrowRight className={`w-3.5 h-3.5 transition-transform ${canProceed ? 'group-hover:translate-x-1' : ''}`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── RESULTS ──────────────────────────────────────────── */}
                    {isComplete && results && (
                        <div className={`transition-all duration-500 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
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

                            <div className="flex flex-wrap gap-2 justify-center mb-10">
                                {Object.entries(answers).map(([key, val]) => {
                                    const step = STEPS.find(s => s.field === key);
                                    const opt = step?.options.find(o => o.value === val);
                                    return opt ? (
                                        <span key={key} className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2">
                                            {opt.emoji} {opt.label}
                                        </span>
                                    ) : null;
                                })}
                            </div>

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
