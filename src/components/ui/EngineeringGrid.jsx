import React from 'react';

/**
 * EngineeringGrid Component
 * A sophisticated, reusable "Vantage Logic" grid background pattern.
 * Supports different colors, opacities y densities.
 */
const EngineeringGrid = ({
    className = "",
    color = "currentColor",
    opacity = "0.05",
    size = "100px",
    variant = "grid" // "grid" or "dots"
}) => {
    const backgroundStyle = variant === "grid"
        ? {
            backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
            backgroundSize: `${size} ${size}`
        }
        : {
            backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
            backgroundSize: `${size} ${size}`
        };

    return (
        <div
            className={`absolute inset-0 z-0 pointer-events-none ${className}`}
            style={{
                ...backgroundStyle,
                opacity: opacity
            }}
            aria-hidden="true"
        />
    );
};

export default EngineeringGrid;
