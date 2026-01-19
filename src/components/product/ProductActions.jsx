import React from 'react';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';
import { getWhatsAppLink } from '@/utils/constants';

const ProductActions = ({
    product,
    selectedSize,
    onSpecsClick
}) => {
    const whatsappUrl = getWhatsAppLink(`Hola Sueño Dorado, estoy interesado en comprar el ${product.name}${selectedSize ? ` en tamaño ${selectedSize}` : ''}.`);

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
