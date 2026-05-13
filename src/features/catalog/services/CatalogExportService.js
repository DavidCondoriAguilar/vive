import { jsPDF } from 'jspdf';
import { RESORTE_PRODUCTS } from '../data/resorte.data';

/**
 * CatalogExportService
 * Handles high-end PDF generation for the product catalog.
 */
export const CatalogExportService = {
    /**
     * Generates a professional PDF catalog
     * @returns {Promise<void>}
     */
    async generateDigitalCatalog() {
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4'
        });

        const brandColor = [41, 156, 71]; // Vive Green
        const secondaryColor = [75, 85, 99]; // Slate 600
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        // 1. COVER PAGE
        this._addHeader(doc, pageWidth);
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(42);
        doc.setTextColor(brandColor[0], brandColor[1], brandColor[2]);
        doc.text('CATÁLOGO', pageWidth / 2, 100, { align: 'center' });
        
        doc.setFontSize(24);
        doc.setTextColor(31, 41, 55);
        doc.text('COLECCIÓN 2026', pageWidth / 2, 115, { align: 'center' });
        
        doc.setDrawColor(brandColor[0], brandColor[1], brandColor[2]);
        doc.setLineWidth(1.5);
        doc.line(pageWidth / 2 - 20, 125, pageWidth / 2 + 20, 125);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);
        doc.setTextColor(107, 114, 128);
        doc.text('Tecnología, Confort y Arquitectura del Descanso', pageWidth / 2, 135, { align: 'center' });

        this._addFooter(doc, pageWidth, pageHeight);

        // 2. PRODUCTS PAGES
        RESORTE_PRODUCTS.forEach((product, index) => {
            doc.addPage();
            this._addProductPage(doc, product, brandColor, secondaryColor, pageWidth, pageHeight);
        });

        // 3. Save
        doc.save(`Catalogo_Vive_2026.pdf`);
    },

    _addHeader(doc, pageWidth) {
        doc.setFontSize(10);
        doc.setTextColor(156, 163, 175);
        doc.setFont('helvetica', 'bold');
        doc.text('VIVE // BOUTIQUE DEL DESCANSO', 20, 15);
        doc.setDrawColor(229, 231, 235);
        doc.setLineWidth(0.1);
        doc.line(20, 18, pageWidth - 20, 18);
    },

    _addFooter(doc, pageWidth, pageHeight) {
        doc.setFontSize(8);
        doc.setTextColor(156, 163, 175);
        doc.text('ventasvive@colchonesvive.com | (01) 989 223 448', pageWidth / 2, pageHeight - 15, { align: 'center' });
        doc.text('www.colchonesvive.com', pageWidth / 2, pageHeight - 10, { align: 'center' });
    },

    _addProductPage(doc, product, brandColor, secondaryColor, pageWidth, pageHeight) {
        this._addHeader(doc, pageWidth);

        // Product Name & Category
        const productName = (product.name || 'Producto Vive').toUpperCase();
        const subcategory = (product.subcategory || 'General').toUpperCase();

        doc.setFontSize(24); // Slightly smaller to avoid overflow
        doc.setTextColor(31, 41, 55);
        doc.setFont('helvetica', 'bold');
        doc.text(productName, 20, 35);
        
        doc.setFontSize(10);
        doc.setTextColor(brandColor[0], brandColor[1], brandColor[2]);
        doc.text(`LÍNEA ${subcategory}`, 20, 42);

        // Warranty Badge
        if (product.warranty) {
            doc.setFillColor(243, 244, 246);
            doc.roundedRect(pageWidth - 70, 28, 50, 8, 1, 1, 'F');
            doc.setFontSize(8);
            doc.setTextColor(75, 85, 99);
            doc.text(product.warranty.toUpperCase(), pageWidth - 45, 33.5, { align: 'center' });
        }

        // Description
        doc.setFontSize(11);
        doc.setTextColor(75, 85, 99);
        doc.setFont('helvetica', 'normal');
        const splitDesc = doc.splitTextToSize(product.description, pageWidth - 40);
        doc.text(splitDesc, 20, 55);

        // Firmness Bar (Visual Representation)
        const firmnessValue = Number(product.firmness) || 5;
        const firmnessLabel = product.firmnessLabel || 'Equilibrado';
        
        doc.setFontSize(9);
        doc.setTextColor(156, 163, 175);
        doc.text('NIVEL DE FIRMEZA:', 20, 80);
        
        doc.setFillColor(243, 244, 246);
        doc.roundedRect(20, 85, 60, 4, 1, 1, 'F');
        
        // Dynamic Color for Firmness
        if (firmnessValue <= 3) doc.setFillColor(34, 197, 253); // Cyan
        else if (firmnessValue <= 7) doc.setFillColor(brandColor[0], brandColor[1], brandColor[2]); // Green
        else doc.setFillColor(245, 158, 11); // Amber
        
        // Ensure width is at least 0.1 to avoid jspdf errors
        const barWidth = Math.max(0.1, (firmnessValue / 10) * 60);
        doc.roundedRect(20, 85, barWidth, 4, 1, 1, 'F');
        
        doc.setTextColor(31, 41, 55);
        doc.setFont('helvetica', 'bold');
        doc.text(`${firmnessLabel} (${firmnessValue}/10)`, 85, 88.5);

        // Technical Specs Section
        doc.setFontSize(14);
        doc.setTextColor(31, 41, 55);
        doc.text('ESPECIFICACIONES TÉCNICAS', 20, 110);
        doc.setDrawColor(brandColor[0], brandColor[1], brandColor[2]);
        doc.line(20, 112, 35, 112);

        let currentY = 122;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(55, 65, 81);

        const specs = product.technicalSpecs?.colchon || [];
        specs.forEach((spec, i) => {
            if (currentY > pageHeight - 50) return; // Prevent overflow
            doc.setFillColor(brandColor[0], brandColor[1], brandColor[2]);
            doc.circle(22, currentY - 1, 0.5, 'F');
            doc.text(spec, 26, currentY);
            currentY += 6;
        });

        // Dimensions Section
        currentY += 5;
        doc.setFont('helvetica', 'bold');
        doc.text('DIMENSIONES DISPONIBLES:', 20, currentY);
        currentY += 6;
        doc.setFont('helvetica', 'normal');
        
        const dimensions = product.dimensionsInfo || [];
        dimensions.forEach((dim, i) => {
            doc.text(`${dim.label}: ${dim.value}`, 20, currentY);
            currentY += 5;
        });

        // Image Placeholder (Since we can't easily process dynamic remote images in node/worker, 
        // we provide a clean layout where the user can see the structure)
        doc.setDrawColor(229, 231, 235);
        doc.rect(pageWidth - 90, 100, 70, 70);
        doc.setFontSize(8);
        doc.setTextColor(156, 163, 175);
        doc.text('IMAGEN REFERENCIAL', pageWidth - 55, 135, { align: 'center' });

        this._addFooter(doc, pageWidth, pageHeight);
    }
};
