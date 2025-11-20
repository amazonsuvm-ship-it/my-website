import { createContext, useContext } from 'react';

export type Language = 'en' | 'hi' | 'es';

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustBadge: string;
  };
  services: {
    title: string;
    subtitle: string;
    amazonManagement: {
      title: string;
      description: string;
    };
    metaAdvertising: {
      title: string;
      description: string;
    };
    accountHealth: {
      title: string;
      description: string;
    };
    cataloging: {
      title: string;
      description: string;
    };
    ebc: {
      title: string;
      description: string;
    };
    policyCompliance: {
      title: string;
      description: string;
    };
    learnMore: string;
  };
  platforms: {
    title: string;
    subtitle: string;
  };
  howItWorks: {
    title: string;
    step1Title: string;
    step1Description: string;
    step2Title: string;
    step2Description: string;
    step3Title: string;
    step3Description: string;
    step4Title: string;
    step4Description: string;
  };
  caseStudies: {
    title: string;
    subtitle: string;
    readCaseStudy: string;
  };
  recommendations: {
    title: string;
    subtitle: string;
    businessType: string;
    platforms: string;
    revenue: string;
    getRecommendations: string;
    recommendedServices: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    businessName: string;
    platform: string;
    serviceInterest: string;
    message: string;
    submit: string;
    hours: string;
    responseTime: string;
  };
  footer: {
    services: string;
    company: string;
    resources: string;
    contact: string;
    about: string;
    team: string;
    careers: string;
    blog: string;
    faqs: string;
    newsletter: string;
    subscribe: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Get Started'
    },
    hero: {
      title: 'Accelerate Your E-Commerce Success',
      subtitle: 'Expert Amazon, Flipkart & Meta services to scale your online business. From account management to enhanced brand content, we drive results.',
      primaryCta: 'Get Started Today',
      secondaryCta: 'View Services',
      trustBadge: 'Trusted by 500+ sellers across 15 countries'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive e-commerce solutions tailored to your business needs',
      amazonManagement: {
        title: 'Amazon & Flipkart Management',
        description: 'Complete seller account management, listing optimization, and sales strategy for Amazon and Flipkart platforms.'
      },
      metaAdvertising: {
        title: 'Facebook & Meta Advertising',
        description: 'Strategic social media advertising campaigns that drive traffic and conversions across Facebook and Instagram.'
      },
      accountHealth: {
        title: 'Account Health Management',
        description: 'Proactive monitoring and maintenance to keep your seller accounts in excellent standing with marketplace compliance.'
      },
      cataloging: {
        title: 'Cataloging Services',
        description: 'Professional product data entry, categorization, and attribute optimization for maximum discoverability.'
      },
      ebc: {
        title: 'Enhanced Brand Content',
        description: 'Compelling A+ content and EBC creation that showcases your brand story and increases conversion rates.'
      },
      policyCompliance: {
        title: 'Policy Compliance',
        description: 'Expert guidance on marketplace policies, regulations, and best practices to avoid violations and suspensions.'
      },
      learnMore: 'Learn More'
    },
    platforms: {
      title: 'Platform Expertise',
      subtitle: 'We specialize in the platforms that matter most to your business'
    },
    howItWorks: {
      title: 'How It Works',
      step1Title: 'Initial Consultation',
      step1Description: 'We analyze your business goals and current marketplace presence',
      step2Title: 'Strategy Development',
      step2Description: 'Custom action plan tailored to your specific needs and objectives',
      step3Title: 'Implementation',
      step3Description: 'Expert execution of services with regular progress updates',
      step4Title: 'Ongoing Optimization',
      step4Description: 'Continuous monitoring and refinement for sustained growth'
    },
    caseStudies: {
      title: 'Success Stories',
      subtitle: 'Real results from businesses we\'ve helped grow',
      readCaseStudy: 'Read Case Study'
    },
    recommendations: {
      title: 'Find Your Perfect Service',
      subtitle: 'Answer a few questions to get personalized service recommendations',
      businessType: 'What type of business do you operate?',
      platforms: 'Which platforms do you sell on?',
      revenue: 'Monthly revenue range',
      getRecommendations: 'Get Recommendations',
      recommendedServices: 'Recommended Services for You'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to accelerate your e-commerce growth? Let\'s talk.',
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number',
      businessName: 'Business Name',
      platform: 'Primary Platform',
      serviceInterest: 'Services of Interest',
      message: 'Tell us about your needs',
      submit: 'Send Message',
      hours: 'Mon-Fri: 9AM - 6PM EST',
      responseTime: 'Response within 24 hours'
    },
    footer: {
      services: 'Services',
      company: 'Company',
      resources: 'Resources',
      contact: 'Contact',
      about: 'About Us',
      team: 'Our Team',
      careers: 'Careers',
      blog: 'Blog',
      faqs: 'FAQs',
      newsletter: 'Subscribe to our newsletter',
      subscribe: 'Subscribe',
      rights: '© 2024 E-Commerce Excellence. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      services: 'सेवाएं',
      about: 'हमारे बारे में',
      contact: 'संपर्क',
      getStarted: 'शुरू करें'
    },
    hero: {
      title: 'अपनी ई-कॉमर्स सफलता को तेज करें',
      subtitle: 'आपके ऑनलाइन व्यवसाय को बढ़ाने के लिए विशेषज्ञ Amazon, Flipkart और Meta सेवाएं। अकाउंट प्रबंधन से लेकर उन्नत ब्रांड सामग्री तक।',
      primaryCta: 'आज ही शुरू करें',
      secondaryCta: 'सेवाएं देखें',
      trustBadge: '15 देशों में 500+ विक्रेताओं द्वारा भरोसेमंद'
    },
    services: {
      title: 'हमारी सेवाएं',
      subtitle: 'आपकी व्यावसायिक आवश्यकताओं के अनुरूप व्यापक ई-कॉमर्स समाधान',
      amazonManagement: {
        title: 'Amazon और Flipkart प्रबंधन',
        description: 'Amazon और Flipkart प्लेटफॉर्म के लिए संपूर्ण विक्रेता खाता प्रबंधन, लिस्टिंग अनुकूलन और बिक्री रणनीति।'
      },
      metaAdvertising: {
        title: 'Facebook और Meta विज्ञापन',
        description: 'रणनीतिक सोशल मीडिया विज्ञापन अभियान जो Facebook और Instagram पर ट्रैफिक और रूपांतरण बढ़ाते हैं।'
      },
      accountHealth: {
        title: 'खाता स्वास्थ्य प्रबंधन',
        description: 'मार्केटप्लेस अनुपालन के साथ आपके विक्रेता खातों को उत्कृष्ट स्थिति में रखने के लिए सक्रिय निगरानी।'
      },
      cataloging: {
        title: 'कैटलॉगिंग सेवाएं',
        description: 'अधिकतम खोज के लिए पेशेवर उत्पाद डेटा प्रविष्टि, वर्गीकरण और विशेषता अनुकूलन।'
      },
      ebc: {
        title: 'उन्नत ब्रांड सामग्री',
        description: 'आकर्षक A+ सामग्री और EBC निर्माण जो आपकी ब्रांड कहानी प्रदर्शित करता है और रूपांतरण दर बढ़ाता है।'
      },
      policyCompliance: {
        title: 'नीति अनुपालन',
        description: 'उल्लंघन और निलंबन से बचने के लिए मार्केटप्लेस नीतियों और सर्वोत्तम प्रथाओं पर विशेषज्ञ मार्गदर्शन।'
      },
      learnMore: 'और जानें'
    },
    platforms: {
      title: 'प्लेटफॉर्म विशेषज्ञता',
      subtitle: 'हम उन प्लेटफार्मों में विशेषज्ञ हैं जो आपके व्यवसाय के लिए सबसे महत्वपूर्ण हैं'
    },
    howItWorks: {
      title: 'यह कैसे काम करता है',
      step1Title: 'प्रारंभिक परामर्श',
      step1Description: 'हम आपके व्यावसायिक लक्ष्यों और वर्तमान बाजार उपस्थिति का विश्लेषण करते हैं',
      step2Title: 'रणनीति विकास',
      step2Description: 'आपकी विशिष्ट आवश्यकताओं के अनुरूप कस्टम कार्य योजना',
      step3Title: 'कार्यान्वयन',
      step3Description: 'नियमित प्रगति अपडेट के साथ सेवाओं का विशेषज्ञ निष्पादन',
      step4Title: 'निरंतर अनुकूलन',
      step4Description: 'निरंतर विकास के लिए लगातार निगरानी और सुधार'
    },
    caseStudies: {
      title: 'सफलता की कहानियां',
      subtitle: 'हमने जिन व्यवसायों को बढ़ने में मदद की है उनके वास्तविक परिणाम',
      readCaseStudy: 'केस स्टडी पढ़ें'
    },
    recommendations: {
      title: 'अपनी सही सेवा खोजें',
      subtitle: 'व्यक्तिगत सेवा सिफारिशें प्राप्त करने के लिए कुछ प्रश्नों के उत्तर दें',
      businessType: 'आप किस प्रकार का व्यवसाय संचालित करते हैं?',
      platforms: 'आप किन प्लेटफार्मों पर बेचते हैं?',
      revenue: 'मासिक राजस्व सीमा',
      getRecommendations: 'सिफारिशें प्राप्त करें',
      recommendedServices: 'आपके लिए अनुशंसित सेवाएं'
    },
    contact: {
      title: 'संपर्क करें',
      subtitle: 'अपने ई-कॉमर्स विकास को तेज करने के लिए तैयार हैं? आइए बात करें।',
      name: 'आपका नाम',
      email: 'ईमेल पता',
      phone: 'फोन नंबर',
      businessName: 'व्यवसाय का नाम',
      platform: 'प्राथमिक प्लेटफॉर्म',
      serviceInterest: 'रुचि की सेवाएं',
      message: 'हमें अपनी आवश्यकताओं के बारे में बताएं',
      submit: 'संदेश भेजें',
      hours: 'सोम-शुक्र: सुबह 9 बजे - शाम 6 बजे EST',
      responseTime: '24 घंटे के भीतर प्रतिक्रिया'
    },
    footer: {
      services: 'सेवाएं',
      company: 'कंपनी',
      resources: 'संसाधन',
      contact: 'संपर्क',
      about: 'हमारे बारे में',
      team: 'हमारी टीम',
      careers: 'करियर',
      blog: 'ब्लॉग',
      faqs: 'सामान्य प्रश्न',
      newsletter: 'हमारे न्यूज़लेटर की सदस्यता लें',
      subscribe: 'सदस्यता लें',
      rights: '© 2024 ई-कॉमर्स एक्सीलेंस। सर्वाधिकार सुरक्षित।',
      privacy: 'गोपनीयता नीति',
      terms: 'सेवा की शर्तें'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto',
      getStarted: 'Comenzar'
    },
    hero: {
      title: 'Acelera Tu Éxito en E-Commerce',
      subtitle: 'Servicios expertos de Amazon, Flipkart y Meta para escalar tu negocio en línea. Desde gestión de cuentas hasta contenido de marca mejorado.',
      primaryCta: 'Comenzar Hoy',
      secondaryCta: 'Ver Servicios',
      trustBadge: 'Confiado por más de 500 vendedores en 15 países'
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones integrales de comercio electrónico adaptadas a tus necesidades',
      amazonManagement: {
        title: 'Gestión Amazon & Flipkart',
        description: 'Gestión completa de cuentas de vendedor, optimización de listados y estrategia de ventas para plataformas Amazon y Flipkart.'
      },
      metaAdvertising: {
        title: 'Publicidad Facebook & Meta',
        description: 'Campañas estratégicas de publicidad en redes sociales que impulsan el tráfico y las conversiones en Facebook e Instagram.'
      },
      accountHealth: {
        title: 'Gestión de Salud de Cuenta',
        description: 'Monitoreo proactivo para mantener tus cuentas de vendedor en excelente estado con cumplimiento del mercado.'
      },
      cataloging: {
        title: 'Servicios de Catalogación',
        description: 'Entrada profesional de datos de productos, categorización y optimización de atributos para máxima visibilidad.'
      },
      ebc: {
        title: 'Contenido de Marca Mejorado',
        description: 'Creación convincente de contenido A+ y EBC que muestra tu historia de marca y aumenta las tasas de conversión.'
      },
      policyCompliance: {
        title: 'Cumplimiento de Políticas',
        description: 'Orientación experta sobre políticas del mercado y mejores prácticas para evitar violaciones y suspensiones.'
      },
      learnMore: 'Saber Más'
    },
    platforms: {
      title: 'Experiencia en Plataformas',
      subtitle: 'Nos especializamos en las plataformas que más importan para tu negocio'
    },
    howItWorks: {
      title: 'Cómo Funciona',
      step1Title: 'Consulta Inicial',
      step1Description: 'Analizamos tus objetivos comerciales y presencia actual en el mercado',
      step2Title: 'Desarrollo de Estrategia',
      step2Description: 'Plan de acción personalizado adaptado a tus necesidades específicas',
      step3Title: 'Implementación',
      step3Description: 'Ejecución experta de servicios con actualizaciones regulares de progreso',
      step4Title: 'Optimización Continua',
      step4Description: 'Monitoreo y refinamiento continuo para un crecimiento sostenido'
    },
    caseStudies: {
      title: 'Historias de Éxito',
      subtitle: 'Resultados reales de negocios que hemos ayudado a crecer',
      readCaseStudy: 'Leer Caso de Estudio'
    },
    recommendations: {
      title: 'Encuentra Tu Servicio Perfecto',
      subtitle: 'Responde algunas preguntas para obtener recomendaciones personalizadas',
      businessType: '¿Qué tipo de negocio operas?',
      platforms: '¿En qué plataformas vendes?',
      revenue: 'Rango de ingresos mensuales',
      getRecommendations: 'Obtener Recomendaciones',
      recommendedServices: 'Servicios Recomendados para Ti'
    },
    contact: {
      title: 'Contáctanos',
      subtitle: '¿Listo para acelerar tu crecimiento en e-commerce? Hablemos.',
      name: 'Tu Nombre',
      email: 'Correo Electrónico',
      phone: 'Número de Teléfono',
      businessName: 'Nombre del Negocio',
      platform: 'Plataforma Principal',
      serviceInterest: 'Servicios de Interés',
      message: 'Cuéntanos sobre tus necesidades',
      submit: 'Enviar Mensaje',
      hours: 'Lun-Vie: 9AM - 6PM EST',
      responseTime: 'Respuesta en 24 horas'
    },
    footer: {
      services: 'Servicios',
      company: 'Empresa',
      resources: 'Recursos',
      contact: 'Contacto',
      about: 'Sobre Nosotros',
      team: 'Nuestro Equipo',
      careers: 'Carreras',
      blog: 'Blog',
      faqs: 'Preguntas Frecuentes',
      newsletter: 'Suscríbete a nuestro boletín',
      subscribe: 'Suscribirse',
      rights: '© 2024 E-Commerce Excellence. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio'
    }
  }
};

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
});

export const useLanguage = () => useContext(LanguageContext);
