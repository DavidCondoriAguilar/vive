# 🚀 QUICK START - EJEMPLOS DE INTEGRACIÓN

## 1. Usar validación en un formulario nuevo

### Paso 1: Importar el hook
```jsx
import { useFormValidation } from '@/hooks/useFormValidation';
```

### Paso 2: Crear el formulario
```jsx
function ContactForm() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = 
    useFormValidation(
      // Valores iniciales
      { 
        name: '', 
        email: '', 
        phone: '',
        message: '' 
      },
      
      // Callback cuando se envía
      (formData) => {
        console.log('Enviando:', formData);
        const msg = `Contacto de ${formData.name}\nEmail: ${formData.email}\nTelefono: ${formData.phone}\n\nMensaje: ${formData.message}`;
        window.open(getWhatsAppLink(msg), '_blank');
      },
      
      // Esquema de validación
      {
        name: { 
          required: true, 
          type: 'name',
          minLength: 2
        },
        email: { 
          required: true, 
          type: 'email' 
        },
        phone: { 
          required: true, 
          type: 'phone' 
        },
        message: { 
          required: true,
          minLength: 10,
          maxLength: 500
        }
      }
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campo: Nombre */}
      <div>
        <label htmlFor="name">Nombre *</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.name && errors.name ? 'border-red-500' : 'border-gray-300'}
          aria-invalid={touched.name && errors.name ? 'true' : 'false'}
          aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
        />
        {touched.name && errors.name && (
          <p id="name-error" className="text-red-600 text-sm">
            {errors.name}
          </p>
        )}
      </div>

      {/* Campo: Email */}
      <div>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.email && errors.email ? 'border-red-500' : 'border-gray-300'}
          aria-invalid={touched.email && errors.email ? 'true' : 'false'}
          aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
        />
        {touched.email && errors.email && (
          <p id="email-error" className="text-red-600 text-sm">
            {errors.email}
          </p>
        )}
      </div>

      {/* Campo: Teléfono */}
      <div>
        <label htmlFor="phone">Teléfono *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="+51 989 223 448"
          className={touched.phone && errors.phone ? 'border-red-500' : 'border-gray-300'}
          aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
          aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
        />
        {touched.phone && errors.phone && (
          <p id="phone-error" className="text-red-600 text-sm">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Campo: Mensaje */}
      <div>
        <label htmlFor="message">Mensaje *</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows="5"
          className={touched.message && errors.message ? 'border-red-500' : 'border-gray-300'}
          aria-invalid={touched.message && errors.message ? 'true' : 'false'}
          aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
        />
        <div className="flex justify-between mt-2">
          {touched.message && errors.message && (
            <p id="message-error" className="text-red-600 text-sm">
              {errors.message}
            </p>
          )}
          <p className="text-gray-500 text-xs ml-auto">
            {values.message.length}/500
          </p>
        </div>
      </div>

      {/* Botón Enviar */}
      <button
        type="submit"
        className="w-full bg-black text-white py-3 font-bold uppercase"
        aria-label="Enviar formulario de contacto"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}

export default ContactForm;
```

---

## 2. Agregar ARIA labels a un componente existente

### Antes (sin accessibility):
```jsx
<div className="modal">
  <h2>Detalles del Producto</h2>
  <button onClick={onClose}>X</button>
  <input type="email" placeholder="Tu email" />
  <button>Guardar</button>
</div>
```

### Después (con accessibility):
```jsx
<div 
  className="modal"
  role="dialog"
  aria-labelledby="modal-title"
  aria-modal="true"
>
  <h2 id="modal-title">Detalles del Producto</h2>
  
  <button 
    onClick={onClose}
    aria-label="Cerrar detalles del producto"
    title="Cerrar"
  >
    X
  </button>
  
  <div>
    <label htmlFor="email">Tu Email *</label>
    <input 
      id="email"
      type="email" 
      placeholder="tu@email.com"
      aria-required="true"
      aria-invalid={hasError}
      aria-describedby={hasError ? 'email-error' : undefined}
    />
    {hasError && (
      <p id="email-error" className="text-red-600">
        Email inválido
      </p>
    )}
  </div>
  
  <button 
    onClick={handleSave}
    aria-label="Guardar cambios"
  >
    Guardar
  </button>
</div>
```

---

## 3. Agregar Schema JSON-LD para SEO

### Paso 1: Importar
```jsx
import { Helmet } from 'react-helmet';
import { getProductSchema, getOrganizationSchema } from '@/utils/seo';
```

### Paso 2: Agregar al componente
```jsx
function ProductPage({ product }) {
  return (
    <>
      {/* SEO Schema */}
      <Helmet>
        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify(getProductSchema(product))}
        </script>
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify(getOrganizationSchema())}
        </script>
        
        {/* Meta tags */}
        <title>{product.name} - Sueño Dorado</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:image" content={product.image} />
        <meta property="og:description" content={product.description} />
      </Helmet>

      {/* Contenido de la página */}
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </>
  );
}
```

---

## 4. Usar variables de entorno

### Paso 1: Agregar a .env.local
```env
VITE_WHATSAPP_NUMBER=51989223448
VITE_BRAND_NAME=Sueño Dorado
VITE_PRODUCTION_URL=https://suenodorado.pe
```

### Paso 2: Usar en código
```jsx
// En componentes
function Header() {
  const brandName = import.meta.env.VITE_BRAND_NAME;
  
  return <h1>{brandName}</h1>;
}

// En utils
export const getWhatsAppLink = (msg) => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
};

// En constants
export const BRAND_NAME = import.meta.env.VITE_BRAND_NAME || 'Sueño Dorado';
```

---

## 5. Validación personalizada

### Ejemplo: Password fuerte
```jsx
const validationSchema = {
  password: {
    required: true,
    validate: (value) => {
      if (value.length < 8) 
        return 'Mínimo 8 caracteres';
      
      if (!/[A-Z]/.test(value)) 
        return 'Debe contener mayúscula';
      
      if (!/[0-9]/.test(value)) 
        return 'Debe contener número';
      
      if (!/[!@#$%^&*]/.test(value)) 
        return 'Debe contener símbolo (!@#$%^&*)';
      
      return null; // Sin error
    }
  }
};
```

### Ejemplo: Campo de edad
```jsx
age: {
  required: true,
  validate: (value) => {
    const age = parseInt(value);
    if (age < 18) return 'Debes ser mayor de 18 años';
    if (age > 120) return 'Por favor ingresa una edad válida';
    return null;
  }
}
```

---

## 6. Mostrar errores con estilo

### Opción 1: Texto simple
```jsx
{touched.email && errors.email && (
  <p className="text-red-600 text-sm mt-1">
    {errors.email}
  </p>
)}
```

### Opción 2: Con icono
```jsx
import { FaTimes, FaCheck } from 'react-icons/fa';

{touched.email && (
  <div className={`flex items-center gap-2 mt-1 text-sm ${
    errors.email ? 'text-red-600' : 'text-green-600'
  }`}>
    {errors.email ? <FaTimes /> : <FaCheck />}
    {errors.email || 'Email válido'}
  </div>
)}
```

### Opción 3: Con badge
```jsx
{touched.email && errors.email && (
  <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
    <p className="text-sm text-red-800 font-medium">
      ⚠️ {errors.email}
    </p>
  </div>
)}
```

---

## 7. Enviar form con WhatsApp

### Paso 1: Importar
```jsx
import { getWhatsAppLink } from '@/utils/constants';
```

### Paso 2: Crear mensaje
```jsx
const handleSubmit = (values) => {
  const message = `
*Nuevo Pedido*

Nombre: ${values.name}
Email: ${values.email}
Teléfono: ${values.phone}

Mensaje:
${values.message}
  `.trim();

  // Abrir WhatsApp
  window.open(getWhatsAppLink(message), '_blank');
};
```

### Paso 3: En formulario
```jsx
<form onSubmit={handleSubmit}>
  {/* inputs */}
  <button type="submit">Enviar por WhatsApp</button>
</form>
```

---

## 8. Usar WholesaleFormDrawer en componente

```jsx
import { useState } from 'react';
import WholesaleFormDrawer from '@/components/forms/WholesaleFormDrawer';

function MyComponent() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Botón para abrir formulario */}
      <button onClick={() => setIsFormOpen(true)}>
        Solicitar Cotización
      </button>

      {/* Drawer con formulario */}
      <WholesaleFormDrawer 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
}

export default MyComponent;
```

---

## 9. Verificar estados de validación

```jsx
// Verificar si hay errores
const hasErrors = Object.keys(errors).length > 0;

// Verificar si fue tocado
const isTouched = Object.values(touched).some(t => t === true);

// Verificar si está listo para enviar
const isValid = !hasErrors && isTouched;

// Deshabilitar botón mientras hay errores
<button disabled={!isValid}>
  Enviar
</button>
```

---

## 10. Testing con validación

```javascript
import { renderHook, act } from '@testing-library/react';
import { useFormValidation } from '@/hooks/useFormValidation';

describe('useFormValidation', () => {
  test('should validate email correctly', () => {
    const { result } = renderHook(() =>
      useFormValidation(
        { email: '' },
        () => {},
        { email: { required: true, type: 'email' } }
      )
    );

    act(() => {
      result.current.setFieldValue('email', 'invalid');
      result.current.validate();
    });

    expect(result.current.errors.email).toBe('Email inválido');
  });

  test('should validate phone with 8+ digits', () => {
    const { result } = renderHook(() =>
      useFormValidation(
        { phone: '' },
        () => {},
        { phone: { required: true, type: 'phone' } }
      )
    );

    act(() => {
      result.current.setFieldValue('phone', '123');
      result.current.validate();
    });

    expect(result.current.errors.phone).toBeTruthy();
  });
});
```

---

## 📝 CHECKLIST RÁPIDO

- [ ] Copiar validationSchema a tu formulario
- [ ] Importar `useFormValidation`
- [ ] Agregar `aria-*` attributes a inputs
- [ ] Mostrar errores con `touched` y `errors`
- [ ] Probar con datos inválidos
- [ ] Verificar en mobile
- [ ] Probar en dark mode
- [ ] Revisar en navegador sin JavaScript (debe tener fallback)

---

## 🎯 EJEMPLOS DE VALIDACIÓN COMÚN

### Email
```jsx
{ email: { required: true, type: 'email' } }
// Válido: user@domain.com
// Inválido: user@domain, @domain.com
```

### Teléfono
```jsx
{ phone: { required: true, type: 'phone' } }
// Válido: 989223448, +51989223448, +51 989 223 448
// Inválido: 123, +51 123
```

### Nombre
```jsx
{ name: { required: true, type: 'name', minLength: 2 } }
// Válido: Juan, María José
// Inválido: J, 123
```

### Empresa
```jsx
{ company: { required: true, type: 'company', minLength: 2 } }
// Válido: Sueño Dorado S.A.C, Hotel Paradise Ltd.
// Inválido: X, 123 (solo números)
```

---

**¡Ahora estás listo para usar validación en toda tu app!** 🚀
