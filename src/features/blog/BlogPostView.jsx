import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';

const BlogPostView = () => {
    const { postId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Mock blog posts data - in real app this would come from API/CMS
    const blogPosts = {
        1: {
            title: "La Ciencia del Descanso: Cómo Elegir el Colchón Perfecto en Lima",
            excerpt: "Descubre los factores clave que determinan la calidad de tu descanso y aprende a seleccionar el colchón ideal para tu estilo de vida.",
            category: "Guía de Compra",
            readTime: "8 min",
            date: "15 Ene 2026",
            image: "/api/placeholder/800/400",
            author: "Dr. Carlos Mendoza",
            authorBio: "Especialista en sueño y ergonomía con 15 años de experiencia",
            content: `
# La Ciencia del Descanso: Cómo Elegir el Colchón Perfecto en Lima

En el vibrante mercado de **colchones viscoelásticos Lima**, donde la demanda por productos de calidad ha aumentado significativamente, seleccionar el colchón adecuado puede marcar la diferencia entre noches de descanso reparador y mañanas de fatiga constante. Como especialista en sueño con más de 15 años de experiencia, he ayudado a miles de limeños a transformar su calidad de vida a través de mejores hábitos de descanso.

## ¿Por Qué es Crucial Elegir Bien tu Colchón?

El sueño representa aproximadamente un tercio de nuestra vida. Durante estas horas cruciales, nuestro cuerpo realiza procesos de reparación celular, consolidación de memoria y regulación hormonal. Un colchón inadecuado puede:

- Provocar dolores musculares y articulares crónicos
- Alterar el ciclo de sueño REM
- Reducir la productividad diaria en hasta un 30%
- Contribuir al desarrollo de problemas de salud a largo plazo

## Tipos de Colchones Disponibles en Lima

### Colchones Viscoelásticos

Los **colchones viscoelásticos lima** han revolucionado la industria del descanso en Perú. Estos colchones utilizan espuma de memoria que se adapta perfectamente a la forma del cuerpo, distribuyendo el peso de manera uniforme.

**Ventajas principales:**
- Adaptación perfecta a curvas corporales
- Reducción de puntos de presión
- Excelente aislamiento de movimiento
- Temperatura regulada

**Desventajas:**
- Mayor costo inicial
- Necesitan tiempo de adaptación (2-3 semanas)
- Sensibles a altas temperaturas

### Colchones Pocket (Muelles Ensacados)

Los colchones pocket representan la opción premium en **tiendas de colchones lima**. Cada muelle está individualmente ensacado, permitiendo movimientos independientes y mayor durabilidad.

**Características destacadas:**
- Durabilidad superior (hasta 15 años)
- Excelente soporte ortopédico
- Buena transpirabilidad
- Múltiples opciones de firmeza

### Colchones Spring (Muelles Continuos)

Más económicos pero con menor tecnología, los colchones spring son comunes en el mercado peruano. Ofrecen buen soporte básico pero carecen de las innovaciones modernas.

## Guía Paso a Paso para Elegir tu Colchón

### Paso 1: Evalúa tu Posición de Sueño

- **Dormidores de espalda:** Necesitan colchones de firmeza media-alta
- **Dormidores de lado:** Requieren colchones más blandos para reducir presión en hombros y caderas
- **Dormidores boca abajo:** Colchones firmes para mantener alineación espinal

### Paso 2: Considera tu Peso Corporal

| Peso Corporal | Firmeza Recomendada | Tipo de Colchón |
|---------------|-------------------|------------------|
| Menos de 55kg | Suave-Blanda | Viscoelástico 5-6cm |
| 55-80kg | Media | Pocket 18-20cm |
| 80-100kg | Media-Alta | Pocket 20-25cm |
| Más de 100kg | Alta | Pocket 25-30cm o Spring |

### Paso 3: Prueba el Colchón

Nunca compres un colchón sin probarlo. En **Sueño Dorado**, recomendamos:

- Acostarte en diferentes posiciones
- Probar por al menos 10-15 minutos
- Traer tu almohada habitual
- Probar durante el día (el cuerpo cambia de noche)

### Paso 4: Considera tu Entorno

En el clima de Lima, factores como humedad y temperatura son cruciales:

- **Humedad alta:** Colchones con buena transpirabilidad
- **Temperaturas variables:** Materiales que regulen temperatura
- **Espacio limitado:** Considera colchones enrollables

## Tecnología Sueño Dorado: Innovación Peruana

En **fábrica de colchones lima** como Sueño Dorado, combinamos tecnología europea con materiales premium:

### Sistema de Capas Múltiples
- Capa superior de viscoelástico premium
- Núcleo de muelles ensacados
- Base de espuma de alta densidad
- Tratamientos antiácaros y antibacteriales

### Beneficios para la Salud
- Reducción del 70% en dolores de espalda
- Mejora del 40% en calidad de sueño
- Mayor energía diaria
- Mejor concentración y productividad

## Mitos Comunes sobre Colchones

### "Los Colchones Caros son para Ricos"
**Realidad:** Un buen colchón es una inversión en salud. Comparado con costos médicos por mala postura, representa ahorro a largo plazo.

### "Todos los Colchones Viscoelásticos son Iguales"
**Falso:** La calidad varía enormemente según densidad, composición química y procesos de fabricación.

### "Puedo Comprar Cualquier Colchón Online"
**Mitad cierto:** Si bien es posible, recomendamos probar físicamente, especialmente para inversiones mayores a S/ 1000.

## Cuidados y Mantenimiento

### Limpieza Regular
- Aspira semanalmente
- Lava fundas cada 2 semanas
- Usa protectores antiácaros

### Rotación y Volteo
- Rota cada 3 meses
- Voltea cada 6 meses (si aplica)
- Evita doblar o forzar

### Vida Útil Esperada
- Colchones premium: 10-15 años
- Colchones económicos: 5-7 años
- Signos de reemplazo: hundimiento visible, dolores persistentes

## Conclusión: Invierte en tu Salud

Elegir un colchón no es solo comprar un mueble; es invertir en tu salud y calidad de vida. En **Sueño Dorado**, entendemos que cada persona es única, por eso ofrecemos asesoría personalizada y garantía extendida.

¿Listo para transformar tus noches? Nuestro equipo de expertos te espera para guiarte en esta importante decisión. Recuerda: un buen descanso no tiene precio, pero sí tiene un costo inicial que se amortiza rápidamente en beneficios para tu salud.

**¿Cuál es tu mayor desafío al elegir colchón? Comparte en comentarios y te ayudamos a resolverlo.**
            `,
            tags: ["colchones viscoelásticos lima", "guía compra colchones", "colchones premium lima", "descanso calidad", "salud sueño"]
        },
        2: {
            title: "Beneficios del Sueño de Calidad para tu Salud y Productividad",
            excerpt: "Estudios científicos demuestran cómo un descanso de calidad impacta directamente en tu productividad y bienestar diario.",
            category: "Salud & Bienestar",
            readTime: "6 min",
            date: "10 Ene 2026",
            image: "/api/placeholder/800/400",
            author: "Dra. Ana García",
            authorBio: "Neuróloga especializada en trastornos del sueño",
            content: `
# Beneficios del Sueño de Calidad para tu Salud y Productividad

En nuestra sociedad moderna, donde el ritmo de vida en **Lima** es cada vez más acelerado, el sueño se ha convertido en un lujo que muchos no pueden permitirse. Sin embargo, la ciencia es clara: el descanso de calidad no es un lujo, sino una necesidad fisiológica fundamental para el funcionamiento óptimo del organismo humano.

## El Sueño: Fundamento de la Salud Humana

Durante el sueño, nuestro cerebro y cuerpo realizan funciones vitales que no pueden llevarse a cabo durante la vigilia. Un **colchón viscoelástico lima** de calidad puede marcar la diferencia entre un descanso reparador y uno interrumpido.

### Procesos Nocturnos Críticos

1. **Reparación Celular:** Durante las fases profundas del sueño, el cuerpo produce proteínas esenciales para la reparación tisular
2. **Consolidación de Memoria:** El sueño REM fortalece las conexiones neuronales formadas durante el día
3. **Regulación Hormonal:** Se liberan hormonas de crecimiento y se regula el cortisol
4. **Limpieza Cerebral:** Se eliminan toxinas acumuladas durante la vigilia

## Impacto en la Salud Física

### Sistema Cardiovascular
Un sueño deficiente aumenta el riesgo de:
- Hipertensión arterial
- Enfermedades coronarias
- Accidentes cerebrovasculares
- Arritmias cardíacas

**Dato clave:** Personas que duermen menos de 6 horas tienen 200% más riesgo de infarto.

### Sistema Inmune
El sueño adecuado fortalece las defensas naturales:
- Mayor producción de anticuerpos
- Mejor respuesta inflamatoria
- Recuperación más rápida de enfermedades
- Mayor resistencia a infecciones

### Control del Peso Corporal
La falta de sueño afecta directamente el metabolismo:
- Aumento de grelina (hormona del apetito)
- Disminución de leptina (hormona de saciedad)
- Mayor tendencia a alimentos calóricos
- Reducción del metabolismo basal

## Beneficios Cognitivos y Mentales

### Memoria y Aprendizaje
- Mejor consolidación de información nueva
- Mayor capacidad de retención
- Aprendizaje más eficiente
- Mejor resolución de problemas

### Estado de Ánimo
- Reducción de síntomas depresivos
- Menor ansiedad
- Mejor regulación emocional
- Mayor resiliencia al estrés

### Productividad Laboral
Estudios demuestran que empleados bien descansados tienen:
- 30% más productividad
- Mejor toma de decisiones
- Mayor creatividad
- Menos errores en tareas complejas

## El Rol de los Colchones en la Calidad del Sueño

### ¿Por Qué Importa el Colchón?

Un colchón inadecuado puede causar:
- Dolor en espalda y cuello
- Interrupciones del sueño cada 2 horas
- Mayor movimiento durante la noche
- Despertares frecuentes

### Tecnología Moderna
Los **colchones premium lima** incorporan:
- Materiales adaptativos
- Sistemas de soporte ortopédico
- Reguladores de temperatura
- Tratamientos anti-alérgicos

## Consejos para Mejorar tu Sueño

### Rutina Nocturna
- Mantén horarios regulares
- Crea un ambiente oscuro y fresco
- Evita pantallas 1 hora antes
- Practica técnicas de relajación

### Hábitos Diarios
- Ejercicio regular (no tarde)
- Alimentación balanceada
- Hidratación adecuada
- Exposición a luz natural

### Entorno de Sueño
- Temperatura entre 18-22°C
- Humedad relativa 40-60%
- Ruido mínimo
- Colchón y almohada apropiados

## Estadísticas Alarmantes

- **35%** de adultos limeños duermen menos de 7 horas
- **65%** reportan fatiga crónica
- **40%** sufren dolores relacionados con mala postura
- **25%** han tenido accidentes por somnolencia

## Inversión en Salud

Invertir en un **colchón viscoelástico lima** de calidad representa:

### Ahorro a Largo Plazo
- Reducción de gastos médicos
- Mayor productividad laboral
- Mejor calidad de vida
- Prevención de enfermedades crónicas

### Retorno de Inversión
- Colchón premium S/ 2000-4000
- Beneficios anuales: S/ 5000+ en salud/productividad
- Durabilidad: 10-15 años
- ROI positivo desde el primer año

## Conclusión

El sueño de calidad no es un lujo, sino una inversión inteligente en tu salud y futuro. En **Sueño Dorado**, no solo vendemos colchones; transformamos vidas a través del descanso reparador.

¿Cuántas horas duermes realmente? ¿Sientes que despiertas renovado? Si la respuesta es no, es momento de cambiar. Tu cuerpo y mente te lo agradecerán.

**¿Listo para dormir mejor y vivir más?** Nuestros expertos te esperan con soluciones personalizadas para tu descanso perfecto.
            `,
            tags: ["beneficios sueño", "salud descanso", "colchones lima", "productividad sueño", "bienestar"]
        },
        3: {
            title: "Tecnología Sueño Dorado: Innovación en Cada Fibra",
            excerpt: "Conoce los materiales y tecnologías que hacen de nuestros productos una inversión inteligente para tu descanso.",
            category: "Tecnología",
            readTime: "7 min",
            date: "5 Ene 2026",
            image: "/api/placeholder/800/400",
            author: "Ing. Roberto Silva",
            authorBio: "Ingeniero textil especializado en materiales para descanso",
            content: `
# Tecnología Sueño Dorado: Innovación en Cada Fibra

En el competitivo mercado de **colchones viscoelásticos lima**, **Sueño Dorado** se destaca por su compromiso con la innovación tecnológica aplicada al descanso humano. Como fábrica peruana con estándares internacionales, combinamos investigación científica, materiales premium y procesos de manufactura avanzados para crear productos que no solo duermen, sino que mejoran la calidad de vida.

## Filosofía de Innovación

Nuestra aproximación combina:
- **Ciencia del sueño:** Basada en estudios de la NASA y universidades europeas
- **Materiales premium:** Sourcing global con certificaciones internacionales
- **Manufactura local:** Producción en Lima con control de calidad artesanal
- **Garantía extendida:** Confianza en nuestros productos

## Sistema de Capas Inteligentes

### Capa 1: Viscoelástico Premium
- **Densidad:** 50-80 kg/m³ (superior al estándar internacional)
- **Adaptación:** Respuesta en 3 segundos al contacto corporal
- **Temperatura:** Regulación automática 2-3°C
- **Durabilidad:** 15+ años de vida útil

**Tecnología exclusiva:** Nuestros viscoelásticos incorporan grafeno para mayor conductividad térmica y reducción de puntos calientes.

### Capa 2: Núcleo de Soporte
**Opciones disponibles:**
- **Pocket Individual:** 1000+ muelles por plaza
- **Sistema HR:** Espuma de alta resiliencia
- **Latex Natural:** Extraído de árboles Hevea

Cada núcleo está diseñado para proporcionar:
- Soporte ortopédico personalizado
- Distribución uniforme del peso
- Absorción de impactos
- Ventilación óptima

### Capa 3: Base de Estabilidad
- **Espuma HD:** Alta densidad para soporte estructural
- **Tratamientos:** Antiácaros, antibacterial, antihongos
- **Transpirabilidad:** >95% de eficiencia

## Innovaciones Tecnológicas Exclusivas

### Sistema Anti-Alérgico
- **Biolatex:** Tratamiento natural sin químicos
- **Barrera Sanitaria:** Protege contra ácaros y bacterias
- **Certificación:** Ecolabelling para productos saludables

### Tecnología de Temperatura
- **Regulación Térmica:** Mantiene temperatura corporal ideal
- **Transpirabilidad:** Evapora humedad 4x más rápido
- **Confort Estacional:** Adecuado para clima limeño

### Diseño Ergonómico
Basado en estudios antropométricos:
- **Análisis postural:** Adaptación a curvas naturales
- **Puntos de presión:** Reducción del 80%
- **Alineación espinal:** Mantenimiento natural

## Materiales Premium Certificados

### Viscoelástico Certificado
- **Certificación Oeko-Tex:** Libre de sustancias nocivas
- **Estándar Europeo:** Cumple normas EN 1725
- **Garantía:** 10 años contra defectos de fabricación

### Muelles Ensacados
- **Acero Sueco:** Alta resistencia y elasticidad
- **Tratamiento Térmico:** Durabilidad extendida
- **Ensacado Individual:** Movimiento independiente

### Tejidos Especializados
- **Fibra de Bambú:** Antibacterial natural
- **Algodón Orgánico:** Transpirable y hipoalergénico
- **Mezclas Técnicas:** Combinan confort y durabilidad

## Proceso de Manufactura

### Control de Calidad
1. **Inspección de Materias Primas:** Certificación de proveedores
2. **Producción Controlada:** Temperatura y humedad constantes
3. **Pruebas de Laboratorio:** Cada lote evaluado
4. **Empaque Especializado:** Protección durante transporte

### Sostenibilidad
- **Reciclaje:** 80% de materiales reutilizables
- **Eficiencia Energética:** Procesos de bajo consumo
- **Emisiones:** Controladas según estándares ISO 14001

## Beneficios Tecnológicos Medibles

### Salud y Bienestar
- **Reducción de Dolores:** 70% menos puntos de presión
- **Mejor Calidad de Sueño:** Aumento del 40% en sueño profundo
- **Recuperación Muscular:** 50% más eficiente

### Rendimiento Diario
- **Energía Matutina:** 30% más vitalidad
- **Concentración:** Mejora del 25% en tareas cognitivas
- **Productividad:** Incremento del 20% en rendimiento laboral

## Comparación Tecnológica

| Característica | Sueño Dorado | Competencia Estándar | Beneficio |
|----------------|----------------|---------------------|-----------|
| Densidad Visco | 80 kg/m³ | 40 kg/m³ | 2x más duradero |
| Adaptación | 3 segundos | 10 segundos | Respuesta inmediata |
| Temperatura | Regulada | Variable | Confort constante |
| Transpirabilidad | 95% | 70% | Mejor ventilación |

## Investigación y Desarrollo

### Colaboraciones Científicas
- **Universidad Cayetano Heredia:** Estudios de ergonomía
- **Instituto del Sueño:** Investigación en calidad de descanso
- **Laboratorios Europeos:** Certificación de materiales

### Innovación Continua
- **Prototipos:** 50+ desarrollos anuales
- **Patentes:** 12 tecnologías propias
- **Premios:** Reconocimiento internacional

## Garantía Tecnológica

### Cobertura Extendida
- **10 años:** Contra defectos de fabricación
- **Servicio Técnico:** Mantenimiento preventivo gratuito
- **Actualización:** Mejoras tecnológicas incluidas

### Compromiso con el Cliente
- **Prueba 30 días:** Ajuste sin costo
- **Devolución:** Política flexible
- **Soporte:** Asesoría especializada

## Conclusión

En **Sueño Dorado**, no vendemos colchones; invertimos en tu salud futura. Nuestra tecnología combina lo mejor de la ciencia moderna con la artesanía peruana, creando productos que duran años y mejoran vidas.

¿Quieres experimentar la diferencia tecnológica? Visítanos en nuestra **fábrica de colchones lima** y descubre por qué miles confían en nosotros para su descanso.

**¿Cuál tecnología te interesa más?** Comparte tus necesidades y te recomendamos la solución perfecta.
            `,
            tags: ["tecnologia colchones", "innovacion descanso", "colchones premium lima", "materiales avanzados", "fabrica colchones"]
        }
    };

    const post = blogPosts[postId];

    if (!post) {
        return (
            <MainLayout>
                <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post no encontrado</h1>
                        <Link to="/blog" className="text-gold-500 hover:text-gold-600">Volver al blog</Link>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <article className="min-h-screen bg-white dark:bg-black">
                {/* Hero Section */}
                <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-gold-50 to-white dark:from-gray-900 dark:to-black">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-8">
                            <span className="px-4 py-2 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium mb-4 inline-block">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime} de lectura</span>
                                <span>•</span>
                                <span>Por {post.author}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
                            {/* Featured Image */}
                            <div className="relative h-64 md:h-96 bg-gradient-to-br from-gold-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                                <div className="absolute inset-0 bg-gold-500/20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-8xl text-gold-500/30">🛏️</span>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-8 md:p-12">
                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                    <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
                                </div>

                                {/* Tags */}
                                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag, index) => (
                                            <span key={index} className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 rounded-full text-sm">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Author Bio */}
                                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">{post.author.charAt(0)}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">{post.author}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{post.authorBio}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 text-center bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12">
                            <h2 className="text-3xl font-display font-black text-gray-900 dark:text-white mb-4">
                                ¿Listo para Transformar tu Descanso?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                                Descubre cómo nuestros colchones premium pueden mejorar tu calidad de vida.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    Ver Catálogo
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link
                                    to="/blog"
                                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white font-bold rounded-full transition-all duration-300"
                                >
                                    Más Artículos
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </MainLayout>
    );
};

export default BlogPostView;