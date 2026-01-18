import React from 'react';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

const ProductActions = ({ 
    product, 
    selectedSize, 
    onSpecsClick 
}) => {
    const whatsappMessage = `Hola, quiero comprar el ${product.name} en tamaño ${selectedSize}.`;
    const whatsappUrl = `https://wa.me/51989223448?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <PrimaryButton
                onClick={() => {
                    window.open(whatsappUrl, '_blank');
                }}
                className="flex-grow justify-center"
            >
                Comprar Ahora
            </PrimaryButton>
            <SecondaryButton 
                onClick={onSpecsClick}
                className="justify-center"
            >
                Ficha Técnica
            </SecondaryButton>
        </div>
    );
};

export default ProductActions;
