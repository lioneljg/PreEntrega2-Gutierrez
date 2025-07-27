// Schema.org markup para Google - Hosanna Servicios de Limpieza

// Función para insertar Schema.org markup según la página
function insertSchemaMarkup() {
    const currentPage = window.location.pathname;
    let schemaData = {};

    // Determinar qué schema usar según la página
    if (currentPage === '/' || currentPage === '/index.html') {
        // Página principal
        schemaData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hosanna Servicios de Limpieza",
            "description": "Servicios de limpieza profesional para oficinas, consorcios, eventos e industrias",
                    "url": "https://hosannalimpieza.com",
        "logo": "https://hosannalimpieza.com/img/logo.png",
        "image": "https://hosannalimpieza.com/img/logo.png",
            "telephone": "+54-11-5796-6449",
            "email": "info@hosannalimpieza.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
            },
            "sameAs": [
                "https://www.instagram.com/hosanna_limpieza",
                "https://www.facebook.com/profile.php?id=61577468595512"
            ],
            "serviceType": "Servicios de Limpieza Profesional",
            "areaServed": "Buenos Aires",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Limpieza",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Limpieza de Oficinas"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Limpieza de Consorcios"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Limpieza de Eventos"
                        }
                    }
                ]
            }
        };
    } else if (currentPage.includes('/empresa.html')) {
        // Página de empresa
        schemaData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hosanna Servicios de Limpieza",
            "description": "Empresa líder en servicios de limpieza profesional con más de 2 años de experiencia",
                    "url": "https://hosannalimpieza.com",
        "logo": "https://hosannalimpieza.com/img/logo.png",
            "foundingDate": "2022",
            "numberOfEmployees": "20",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-11-5796-6449",
                "contactType": "customer service",
                "email": "info@hosannalimpieza.com"
            }
        };
    } else if (currentPage.includes('/servicios.html')) {
        // Página de servicios
        schemaData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Servicios de Limpieza Profesional",
            "description": "Ofrecemos servicios de limpieza profesional para oficinas, consorcios, eventos e industrias",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Hosanna Servicios de Limpieza"
            },
            "serviceType": "Limpieza Profesional",
            "areaServed": "Buenos Aires",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Limpieza",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Limpieza de Oficinas y Locales Comerciales",
                            "description": "Limpieza profesional para espacios de trabajo"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Limpieza de Consorcios",
                            "description": "Mantenimiento de áreas comunes en edificios"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Limpieza de Eventos y Ferias",
                            "description": "Limpieza antes, durante y después de eventos"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Limpieza Industrial",
                            "description": "Limpieza de depósitos, galpones e industrias"
                        }
                    }
                ]
            }
        };
    } else if (currentPage.includes('/contacto.html')) {
        // Página de contacto
        schemaData = {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto Hosanna Servicios de Limpieza",
            "description": "Página de contacto para servicios de limpieza profesional",
            "url": "https://hosannalimpieza.com/contacto",
            "mainEntity": {
                "@type": "LocalBusiness",
                "name": "Hosanna Servicios de Limpieza",
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+54-11-5796-6449",
                        "contactType": "customer service",
                        "availableLanguage": "Spanish",
                        "areaServed": "AR"
                    },
                    {
                        "@type": "ContactPoint",
                        "email": "info@hosannalimpieza.com",
                        "contactType": "customer service"
                    }
                ],
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Buenos Aires",
                    "addressCountry": "AR"
                }
            }
        };
    } else if (currentPage.includes('/galeria.html')) {
        // Página de galería
        schemaData = {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Galería de Trabajos Hosanna",
            "description": "Galería de trabajos de limpieza profesional realizados por Hosanna",
            "url": "https://hosannalimpieza.com/galeria",
            "publisher": {
                "@type": "Organization",
                "name": "Hosanna Servicios de Limpieza"
            },
            "image": [
                            "https://hosannalimpieza.com/img/teamhosanna.jpg",
            "https://hosannalimpieza.com/img/galeria1.jpg",
            "https://hosannalimpieza.com/img/fondo-limpieza3.png",
            "https://hosannalimpieza.com/img/fondo-limpieza.png",
            "https://hosannalimpieza.com/img/fondo-limpieza5.png",
            "https://hosannalimpieza.com/img/fondo-limpieza2.png"
            ]
        };
    }

    // Insertar el schema markup en el DOM
    if (Object.keys(schemaData).length > 0) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schemaData, null, 2);
        document.head.appendChild(script);
    }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertSchemaMarkup);
} else {
    insertSchemaMarkup();
} 