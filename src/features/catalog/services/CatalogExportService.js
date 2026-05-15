import { jsPDF } from 'jspdf';
import { RESORTE_PRODUCTS } from '../data/resorte.data';
import { ESPUMA_PRODUCTS } from '../data/espuma.data';
import { COMPLEMENTARIOS_PRODUCTS } from '../data/dormitorio.data';
import logoSrc from '@assets/images/ico-web/icon-web-icon.webp';

const V = [41, 156, 71];
const DARK = [20, 20, 20];
const MUTED = [156, 163, 175];

// Product mappings for consistency with UI
const SEGMENT_LABELS = {
    'economico': 'ECONÓMICO',
    'intermedio': 'INTERMEDIO',
    'premium': 'PREMIUM',
    'institucional': 'INSTITUCIONAL',
    'complementos': 'COMPLEMENTOS'
};

const PRODUCT_NAME_TO_SEGMENT = {
    'enna': 'economico',
    'itta': 'economico',
    'kasse': 'economico',
    'vanora ss': 'intermedio',
    'gea': 'intermedio',
    'vanora pt': 'intermedio',
    'vanora mp pt': 'intermedio',
    'ventto': 'premium',
    'kae': 'premium',
    'kai': 'premium',
};

const SUB_TO_SEGMENT = {
    'Económica': 'economico',
    'Intermedia': 'intermedio',
    'Diamont': 'premium',
    'Colchones-Hoteleros': 'institucional',
};

const PRODUCT_NAME_TO_WARRANTY = {
    'buen descanso': '1 año garantía',
    'extra descanso': '3 años',
    'hotelero': '5 años',
};

export const CatalogExportService = {
    async _imageToBase64(src) {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/webp'));
            };
            img.onerror = () => resolve(null);
            img.src = src;
        });
    },

    async generateDigitalCatalog() {
        const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
        const PW = doc.internal.pageSize.getWidth();
        const PH = doc.internal.pageSize.getHeight();

        const logoBase64 = await this._imageToBase64(logoSrc);

        this._coverPage(doc, PW, PH, logoBase64);

        const groups = [
            { label: 'COLCHONES DE RESORTE', items: RESORTE_PRODUCTS },
            { label: 'COLCHONES DE ESPUMA', items: ESPUMA_PRODUCTS },
            { label: 'DORMITORIO Y COMPLEMENTOS', items: COMPLEMENTARIOS_PRODUCTS }
        ];
        for (const group of groups) {
            for (const product of group.items) {
                doc.addPage();
                await this._productPage(doc, product, PW, PH, logoBase64);
            }
        }

        doc.save(`Catalogo_Vive_2026.pdf`);
    },

    _coverPage(doc, PW, PH, logoBase64) {
        // Dark background
        doc.setFillColor(DARK[0], DARK[1], DARK[2]);
        doc.rect(0, 0, PW, PH, 'F');

        // Green header band
        doc.setFillColor(V[0], V[1], V[2]);
        doc.rect(0, 0, PW, 55, 'F');

        // Logo
        if (logoBase64) {
            doc.addImage(logoBase64, 'WEBP', PW / 2 - 10, 10, 20, 20, undefined, 'FAST');
        }

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(255, 255, 255);
        doc.text('COLECCIÓN 2026', PW / 2, 42, { align: 'center' });

        // Main title
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(52);
        doc.setTextColor(255, 255, 255);
        doc.text('VIVE', PW / 2, 115, { align: 'center' });

        doc.setDrawColor(V[0], V[1], V[2]);
        doc.setLineWidth(0.7);
        doc.line(PW / 2 - 30, 125, PW / 2 + 30, 125);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        doc.text('FÁBRICA PERUANA DE COLCHONES PREMIUM', PW / 2, 138, { align: 'center' });

        // Bottom info
        doc.setFontSize(7);
        doc.setTextColor(75, 85, 99);
        doc.text('ventasvive@colchonesvive.com | (01) 989 223 448 | www.colchonesvive.com', PW / 2, PH - 20, { align: 'center' });
    },

    _getSegment(product) {
        const name = product.name.toLowerCase();
        for (const [key, segment] of Object.entries(PRODUCT_NAME_TO_SEGMENT)) {
            if (name.includes(key)) return segment;
        }
        return SUB_TO_SEGMENT[product.subcategory] || 'complementos';
    },

    async _productPage(doc, product, PW, PH, logoBase64) {
        doc.setFillColor(250, 248, 245);
        doc.rect(0, 0, PW, PH, 'F');

        doc.setFillColor(V[0], V[1], V[2]);
        doc.rect(0, 0, PW, 8, 'F');

        if (logoBase64) {
            doc.addImage(logoBase64, 'WEBP', 8, 1.5, 5, 5, undefined, 'FAST');
        }
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(5.5);
        doc.setTextColor(255, 255, 255);
        doc.text('VIVE', 15, 5);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(4.5);
        doc.text('TECNOLOGÍA EN DESCANSO', 15, 8.5);

        doc.setFillColor(V[0], V[1], V[2]);
        doc.rect(0, 8, 2, PH, 'F');

        // IMAGE — left
        const imgX = 14, imgW = 82, imgH = 82, imgY = 18;
        if (product.image) {
            const base64 = await this._imageToBase64(product.image);
            if (base64) {
                doc.addImage(base64, 'WEBP', imgX, imgY, imgW, imgH, undefined, 'FAST');
                doc.setDrawColor(229, 231, 235);
                doc.setLineWidth(0.2);
                doc.rect(imgX, imgY, imgW, imgH);
            } else this._placeholder(doc, imgX, imgY, imgW, imgH);
        } else this._placeholder(doc, imgX, imgY, imgW, imgH);

        // Segment Badge
        const segmentId = this._getSegment(product);
        const segmentLabel = SEGMENT_LABELS[segmentId] || (product.subcategory || '').toUpperCase();
        
        doc.setFillColor(V[0], V[1], V[2]);
        doc.roundedRect(imgX, imgY + imgH + 5, 50, 5, 0.5, 0.5, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(5.5);
        doc.setTextColor(255, 255, 255);
        doc.text(segmentLabel, imgX + 25, imgY + imgH + 8.5, { align: 'center' });

        // RIGHT: INFO
        const rX = 106;
        let y = 18;
        const maxW = PW - rX - 16;

        // Subcategory Tag
        doc.setFillColor(240, 240, 240);
        doc.roundedRect(rX, y, Math.min(maxW, 40), 4, 0.5, 0.5, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(4);
        doc.setTextColor(100, 100, 100);
        doc.text((product.subcategory || 'Colección').toUpperCase(), rX + Math.min(maxW, 40) / 2, y + 2.8, { align: 'center' });
        y += 10;

        // Name
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.setTextColor(DARK[0], DARK[1], DARK[2]);
        const splitName = doc.splitTextToSize((product.name || 'Producto').toUpperCase(), maxW);
        splitName.forEach(line => { doc.text(line, rX, y); y += 6.5; });
        y += 3;

        // Description (full, no truncation)
        if (product.description) {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(7);
            doc.setTextColor(107, 114, 128);
            const split = doc.splitTextToSize(product.description, maxW);
            split.forEach(line => { doc.text(line, rX, y); y += 3.2; if (y > PH - 40) return; });
        }
        y += 4;

        // Features / Technical Specs
        const featuresToShow = product.technicalSpecs?.colchon || product.features || [];
        if (featuresToShow.length) {
            doc.setDrawColor(V[0], V[1], V[2]);
            doc.setLineWidth(0.15);
            doc.line(rX, y - 1, rX + 15, y - 1);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.5);
            doc.setTextColor(DARK[0], DARK[1], DARK[2]);
            doc.text('CARACTERÍSTICAS TÉCNICAS', rX, y);
            y += 4;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(6);
            doc.setTextColor(107, 114, 128);
            featuresToShow.forEach(f => {
                if (y > PH - 30) return;
                doc.setFillColor(V[0], V[1], V[2]);
                doc.circle(rX + 1.5, y - 1.5, 0.4, 'F');
                
                // Show full spec text to ensure accuracy
                doc.text(f, rX + 4, y);
                y += 3.2;
            });
            y += 2;
        }

        // MEDIDAS DISPONIBLES: use dimensionsInfo if present, else fallback to sizes
        if (product.dimensionsInfo?.length) {
            doc.setDrawColor(V[0], V[1], V[2]);
            doc.setLineWidth(0.15);
            doc.line(rX, y - 1, rX + 15, y - 1);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.5);
            doc.setTextColor(DARK[0], DARK[1], DARK[2]);
            doc.text('MEDIDAS DISPONIBLES', rX, y);
            y += 4;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(6);
            doc.setTextColor(107, 114, 128);
            product.dimensionsInfo.forEach(d => {
                if (y > PH - 30) return;
                doc.text(`${d.label}: ${d.value}`, rX + 4, y);
                y += 3.2;
            });
            y += 2;
        } else if (product.sizes?.length) {
            // Fallback: show sizes as a simple list
            doc.setDrawColor(V[0], V[1], V[2]);
            doc.setLineWidth(0.15);
            doc.line(rX, y - 1, rX + 15, y - 1);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.5);
            doc.setTextColor(DARK[0], DARK[1], DARK[2]);
            doc.text('MEDIDAS DISPONIBLES', rX, y);
            y += 4;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(6);
            doc.setTextColor(107, 114, 128);
            product.sizes.forEach(s => {
                if (y > PH - 30) return;
                doc.setFillColor(V[0], V[1], V[2]);
                doc.circle(rX + 1.5, y - 1.5, 0.4, 'F');
                doc.text(s, rX + 4, y);
                y += 3.2;
            });
            y += 2;
        }

        // ESPECIFICACIONES (dormitorio products) — show key-value pairs
        if (product.especificaciones && Object.keys(product.especificaciones).length > 0) {
            doc.setDrawColor(V[0], V[1], V[2]);
            doc.setLineWidth(0.15);
            doc.line(rX, y - 1, rX + 15, y - 1);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.5);
            doc.setTextColor(DARK[0], DARK[1], DARK[2]);
            doc.text('ESPECIFICACIONES', rX, y);
            y += 4;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(6);
            doc.setTextColor(107, 114, 128);
            Object.entries(product.especificaciones).forEach(([k, v]) => {
                if (y > PH - 30) return;
                doc.text(`${k}: ${v}`, rX + 4, y);
                y += 3.2;
            });
            y += 2;
        }

        // Firmness — only for products that have it
        if (product.firmness != null) {
            const fv = Number(product.firmness) || 5;
            const fl = product.firmnessLabel || 'Equilibrado';
            doc.setDrawColor(V[0], V[1], V[2]);
            doc.setLineWidth(0.15);
            doc.line(rX, y - 1, rX + 15, y - 1);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.5);
            doc.setTextColor(DARK[0], DARK[1], DARK[2]);
            doc.text('FIRMEZA', rX, y);
            y += 4;
            doc.setFillColor(229, 231, 235);
            doc.roundedRect(rX, y, 45, 3, 1, 1, 'F');
            if (fv <= 3) doc.setFillColor(34, 197, 253);
            else if (fv <= 7) doc.setFillColor(V[0], V[1], V[2]);
            else doc.setFillColor(245, 158, 11);
            const bw = Math.max(0.1, (fv / 10) * 45);
            doc.roundedRect(rX, y, bw, 3, 1, 1, 'F');
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(5.5);
            doc.setTextColor(107, 114, 128);
            doc.text(`${fl} (${fv}/10)`, rX + 49, y + 2.3);
        }

        // Footer
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.1);
        doc.line(10, PH - 14, PW - 10, PH - 14);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(5);
        doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        doc.text('VIVE — FÁBRICA PERUANA | ventasvive@colchonesvive.com | (01) 989 223 448 | www.colchonesvive.com', PW / 2, PH - 9, { align: 'center' });
    },

    _placeholder(doc, x, y, w, h) {
        doc.setDrawColor(229, 231, 235);
        doc.rect(x, y, w, h);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        doc.text('FOTOGRAFÍA', x + w / 2, y + h / 2 + 2, { align: 'center' });
    }
};
