import React from 'react';
import {
    LuMoon, LuWeight, LuRuler, LuLeaf, LuTrophy, LuSparkles, LuZap
} from 'react-icons/lu';
import {
    FaBed, FaPersonWalking, FaMountain, FaCloud,
    FaSnowflake, FaBone, FaShieldHalved, FaMedal,
    FaStar
} from 'react-icons/fa6';
import {
    MdOutlineSelfImprovement, MdFavorite, MdOutlineRotate90DegreesCcw
} from 'react-icons/md';
import { GiNightSleep, GiBodyBalance, GiMuscleUp, GiBrain } from 'react-icons/gi';

export const SIZE_MAP = {
    '1_plaza': '1 PLZ',
    '1_5_plazas': '1.5 PLZ',
    '2_plazas': '2 PLZ',
    'queen': 'QUEEN',
    'king': 'KING',
};

export const STEPS = [
    {
        id: 'sleep_position',
        step: 1,
        icon: <GiNightSleep className="w-6 h-6" />,
        title: 'Posición al dormir',
        subtitle: '¿En qué posición duermes la mayor parte del tiempo?',
        field: 'sleep_position',
        options: [
            { value: 'lado', label: 'De lado', icon: <FaBed className="w-7 h-7 text-vive-500" />, desc: 'Costado izquierdo o derecho', emoji: '🛌' },
            { value: 'espalda', label: 'Boca arriba', icon: <GiBodyBalance className="w-7 h-7 text-blue-500" />, desc: 'Posición neutral de la columna', emoji: '😴' },
            { value: 'boca_abajo', label: 'Boca abajo', icon: <MdOutlineSelfImprovement className="w-7 h-7 text-purple-500" />, desc: 'Con el rostro hacia la almohada', emoji: '🤔' },
            { value: 'combinado', label: 'Cambio de posición', icon: <MdOutlineRotate90DegreesCcw className="w-7 h-7 text-amber-500" />, desc: 'Me muevo mucho durante la noche', emoji: '🔄' },
        ],
    },
    {
        id: 'comfort_level',
        step: 2,
        icon: <LuMoon className="w-6 h-6" />,
        title: 'Nivel de firmeza',
        subtitle: '¿Qué sensación prefieres al acostarte?',
        field: 'comfort_level',
        options: [
            { value: 'muy_firme', label: 'Muy firme', icon: <FaMountain className="w-7 h-7 text-gray-600" />, desc: 'Soporte máximo, sin hundimiento', emoji: '🪨' },
            { value: 'firme', label: 'Firme equilibrado', icon: <GiMuscleUp className="w-7 h-7 text-orange-500" />, desc: 'Firme pero con algo de confort', emoji: '🏋️' },
            { value: 'intermedio', label: 'Confort medio', icon: <LuActivity className="w-7 h-7 text-vive-500" />, desc: 'Equilibrio entre firmeza y suavidad', emoji: '⚖️' },
            { value: 'suave', label: 'Suave y adaptable', icon: <FaCloud className="w-7 h-7 text-sky-400" />, desc: 'Se amolda a la forma del cuerpo', emoji: '☁️' },
            { value: 'no_se', label: 'No estoy seguro', icon: <GiBrain className="w-7 h-7 text-indigo-400" />, desc: 'Déjame descubrirlo', emoji: '🤷' },
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
            { value: '<60', label: 'Menos de 60 kg', icon: <LuLeaf className="w-7 h-7 text-green-500" />, desc: 'Colchones más suaves son ideales', emoji: '🧘' },
            { value: '60-80', label: '60 – 80 kg', icon: <FaPersonWalking className="w-7 h-7 text-vive-500" />, desc: 'Rango estándar de soporte', emoji: '🚶' },
            { value: '80-100', label: '80 – 100 kg', icon: <GiMuscleUp className="w-7 h-7 text-orange-500" />, desc: 'Soporte robusto recomendado', emoji: '💪' },
            { value: '+100', label: 'Más de 100 kg', icon: <LuTrophy className="w-7 h-7 text-amber-500" />, desc: 'Alta firmeza estructural necesaria', emoji: '🏆' },
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
            { value: '1_plaza', label: '1 Plaza', icon: <LuBed className="w-7 h-7 text-gray-400" />, desc: '90 × 190 cm — Individual', emoji: '🛏️' },
            { value: '1_5_plazas', label: '1.5 Plazas', icon: <LuBed className="w-7 h-7 text-blue-400" />, desc: '105 × 190 cm — Semi-doble', emoji: '🛏️' },
            { value: '2_plazas', label: '2 Plazas', icon: <LuBed className="w-7 h-7 text-vive-500" />, desc: '140 × 190 cm — Matrimonial', emoji: '🛏️' },
            { value: 'queen', label: 'Queen', icon: <FaMedal className="w-7 h-7 text-amber-400" />, desc: '160 × 200 cm — Amplio', emoji: '👑' },
            { value: 'king', label: 'King', icon: <FaStar className="w-7 h-7 text-yellow-500" />, desc: '200 × 200 cm — Máximo espacio', emoji: '🏰' },
        ],
    },
    {
        id: 'sleep_priority',
        step: 5,
        icon: <MdFavorite className="w-6 h-6" />,
        title: 'Tu prioridad de descanso',
        subtitle: '¿Qué es lo más importante para tu sueño?',
        field: 'sleep_priority',
        options: [
            { value: 'presion', label: 'Alivio de presión', icon: <LuSparkles className="w-7 h-7 text-rose-500" />, desc: 'Hombros, caderas y espalda', emoji: '💆' },
            { value: 'columna', label: 'Soporte de columna', icon: <FaBone className="w-7 h-7 text-blue-600" />, desc: 'Alineación vertebral correcta', emoji: '🦴' },
            { value: 'frescura', label: 'Dormir más fresco', icon: <FaSnowflake className="w-7 h-7 text-sky-400" />, desc: 'Materiales transpirables', emoji: '❄️' },
            { value: 'independencia', label: 'Independencia de movimiento', icon: <LuZap className="w-7 h-7 text-amber-500" />, desc: 'Sin molestias al compañero', emoji: '🎯' },
            { value: 'durabilidad', label: 'Durabilidad y soporte firme', icon: <FaShieldHalved className="w-7 h-7 text-vive-600" />, desc: 'Inversión a largo plazo', emoji: '🛡️' },
        ],
    },
];
