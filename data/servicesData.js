'use client';

import { FaBullhorn, FaCode, FaMobileAlt, FaPalette, FaVideo, FaCubes } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: FaBullhorn,
    title: {
      en: "Digital Marketing",
      ar: "التسويق الرقمي"
    },
    description: {
      en: "Boost your online presence with data-driven digital marketing strategies. From SEO to social media campaigns, we help you reach your target audience and achieve measurable results.",
      ar: "عزز تواجدك الرقمي باستراتيجيات تسويق رقمي مدروسة. من تحسين محركات البحث إلى حملات التواصل الاجتماعي، نساعدك في الوصول لجمهورك المستهدف وتحقيق نتائج قابلة للقياس."
    },
    alt: {
      en: "Digital Marketing Services - SEO & Social Media",
      ar: "خدمات التسويق الرقمي - تحسين محركات البحث ووسائل التواصل"
    },
    delay: 0.5,
    portfolio: [
      {
        id: 1,
        title: { en: "E-commerce SEO Campaign", ar: "حملة تحسين محركات البحث للتجارة الإلكترونية" },
        description: { en: "Increased organic traffic by 250% for online retail store", ar: "زيادة الزيارات العضوية بنسبة 250٪ لمتجر بيع بالتجزئة عبر الإنترنت" },
        image: "/images/portfolio/marketing-1.jpg",
        results: { en: "250% increase in traffic", ar: "زيادة 250٪ في الزيارات" }
      },
      {
        id: 2,
        title: { en: "Social Media Brand Awareness", ar: "الوعي بالعلامة التجارية عبر وسائل التواصل" },
        description: { en: "Built engaged community of 50K+ followers across platforms", ar: "بناء مجتمع متفاعل من أكثر من 50 ألف متابع عبر المنصات" },
        image: "/images/portfolio/marketing-2.jpg",
        results: { en: "50K+ followers gained", ar: "أكثر من 50 ألف متابع" }
      },
      {
        id: 3,
        title: { en: "PPC Campaign Optimization", ar: "تحسين حملة الدفع لكل نقرة" },
        description: { en: "Reduced cost per acquisition by 40% while increasing conversions", ar: "تقليل تكلفة الاكتساب بنسبة 40٪ مع زيادة التحويلات" },
        image: "/images/portfolio/marketing-3.jpg",
        results: { en: "40% cost reduction", ar: "تخفيض 40٪ في التكلفة" }
      }
    ]
  },
  {
    id: 2,
    icon: FaCode,
    title: {
      en: "Website Building",
      ar: "بناء المواقع الإلكترونية"
    },
    description: {
      en: "Create stunning, responsive websites that drive results. From corporate sites to e-commerce platforms, we build digital experiences that engage your audience and grow your business.",
      ar: "نصمم مواقع ويب مذهلة ومتجاوبة تحقق النتائج. من المواقع المؤسسية إلى منصات التجارة الإلكترونية، نبني تجارب رقمية تجذب جمهورك وتنمي أعمالك."
    },
    alt: {
      en: "Website Building Services - Custom Web Solutions",
      ar: "خدمات بناء المواقع - حلول ويب مخصصة"
    },
    delay: 0.6,
    portfolio: [
      {
        id: 1,
        title: { en: "Corporate Business Website", ar: "موقع شركة مؤسسية" },
        description: { en: "Modern corporate website with CMS integration", ar: "موقع مؤسسي حديث مع تكامل نظام إدارة المحتوى" },
        image: "/images/portfolio/web-1.jpg",
        results: { en: "Modern & Professional", ar: "حديث واحترافي" }
      },
      {
        id: 2,
        title: { en: "E-commerce Platform", ar: "منصة تجارة إلكترونية" },
        description: { en: "Full-featured online store with payment integration", ar: "متجر إلكتروني كامل الميزات مع تكامل الدفع" },
        image: "/images/portfolio/web-2.jpg",
        results: { en: "1000+ products managed", ar: "إدارة أكثر من 1000 منتج" }
      },
      {
        id: 3,
        title: { en: "Real Estate Portal", ar: "بوابة عقارية" },
        description: { en: "Property listing website with advanced search features", ar: "موقع قوائم عقارية مع ميزات بحث متقدمة" },
        image: "/images/portfolio/web-3.jpg",
        results: { en: "500+ listings", ar: "أكثر من 500 قائمة" }
      }
    ]
  },
  {
    id: 3,
    icon: FaMobileAlt,
    title: {
      en: "Mobile App Development",
      ar: "تطوير تطبيقات الجوال"
    },
    description: {
      en: "Build powerful mobile applications for iOS and Android. We create intuitive, feature-rich apps that provide seamless experiences and keep your users engaged.",
      ar: "نطور تطبيقات جوال قوية لأنظمة iOS و Android. نصنع تطبيقات سهلة الاستخدام وغنية بالميزات توفر تجارب سلسة وتحافظ على تفاعل المستخدمين."
    },
    alt: {
      en: "Mobile App Development - iOS & Android Apps",
      ar: "تطوير تطبيقات الجوال - تطبيقات iOS و Android"
    },
    delay: 0.7,
    portfolio: [
      {
        id: 1,
        title: { en: "Fitness Tracking App", ar: "تطبيق تتبع اللياقة البدنية" },
        description: { en: "Health & fitness app with workout plans and nutrition tracking", ar: "تطبيق صحة ولياقة مع خطط تمارين وتتبع التغذية" },
        image: "/images/portfolio/app-1.jpg",
        results: { en: "10K+ downloads", ar: "أكثر من 10 آلاف تحميل" }
      },
      {
        id: 2,
        title: { en: "Food Delivery App", ar: "تطبيق توصيل الطعام" },
        description: { en: "On-demand food delivery with real-time tracking", ar: "توصيل الطعام عند الطلب مع التتبع في الوقت الفعلي" },
        image: "/images/portfolio/app-2.jpg",
        results: { en: "50+ restaurants", ar: "أكثر من 50 مطعم" }
      },
      {
        id: 3,
        title: { en: "Learning Management App", ar: "تطبيق إدارة التعلم" },
        description: { en: "Educational app with courses, quizzes, and certificates", ar: "تطبيق تعليمي مع دورات واختبارات وشهادات" },
        image: "/images/portfolio/app-3.jpg",
        results: { en: "5K+ active users", ar: "أكثر من 5 آلاف مستخدم نشط" }
      }
    ]
  },
  {
    id: 4,
    icon: FaPalette,
    title: {
      en: "Graphic Design",
      ar: "التصميم الجرافيكي"
    },
    description: {
      en: "Transform your brand with stunning visual designs. From logos to marketing materials, our creative team crafts eye-catching graphics that communicate your message effectively.",
      ar: "حوّل علامتك التجارية بتصاميم بصرية مذهلة. من الشعارات إلى المواد التسويقية، يصنع فريقنا الإبداعي تصاميم جرافيكية جذابة تنقل رسالتك بفعالية."
    },
    alt: {
      en: "Graphic Design Services - Creative Visual Solutions",
      ar: "خدمات التصميم الجرافيكي - حلول بصرية إبداعية"
    },
    delay: 0.8,
    portfolio: [
      {
        id: 1,
        title: { en: "Brand Identity Design", ar: "تصميم الهوية التجارية" },
        description: { en: "Complete brand identity with logo, colors, and typography", ar: "هوية تجارية كاملة مع شعار وألوان وخطوط" },
        image: "/images/portfolio/design-1.jpg",
        results: { en: "Full brand package", ar: "حزمة علامة تجارية كاملة" }
      },
      {
        id: 2,
        title: { en: "Social Media Graphics", ar: "تصاميم وسائل التواصل" },
        description: { en: "Engaging social media posts and story templates", ar: "منشورات وسائل التواصل الاجتماعي وقوالب القصص الجذابة" },
        image: "/images/portfolio/design-2.jpg",
        results: { en: "50+ templates", ar: "أكثر من 50 قالب" }
      },
      {
        id: 3,
        title: { en: "Packaging Design", ar: "تصميم العبوات" },
        description: { en: "Product packaging that stands out on shelves", ar: "تصميم عبوات منتجات مميزة على الأرفف" },
        image: "/images/portfolio/design-3.jpg",
        results: { en: "Premium packaging", ar: "عبوات فاخرة" }
      }
    ]
  },
  {
    id: 5,
    icon: FaVideo,
    title: {
      en: "Video Montage",
      ar: "مونتاج الفيديو"
    },
    description: {
      en: "Bring your stories to life with professional video editing. From promotional videos to social media content, we create compelling video montages that captivate your audience.",
      ar: "أحيِ قصصك بمونتاج فيديو احترافي. من الفيديوهات الترويجية إلى محتوى وسائل التواصل، نصنع مقاطع فيديو جذابة تأسر جمهورك."
    },
    alt: {
      en: "Video Montage Services - Professional Video Editing",
      ar: "خدمات مونتاج الفيديو - تحرير فيديو احترافي"
    },
    delay: 0.9,
    portfolio: [
      {
        id: 1,
        title: { en: "Corporate Promo Video", ar: "فيديو ترويجي مؤسسي" },
        description: { en: "Professional company introduction video", ar: "فيديو تعريفي احترافي للشركة" },
        image: "/images/portfolio/video-1.jpg",
        results: { en: "2 min promo", ar: "فيديو ترويجي دقيقتين" }
      },
      {
        id: 2,
        title: { en: "Product Demo Video", ar: "فيديو عرض توضيحي للمنتج" },
        description: { en: "Engaging product features showcase", ar: "عرض جذاب لميزات المنتج" },
        image: "/images/portfolio/video-2.jpg",
        results: { en: "500K+ views", ar: "أكثر من 500 ألف مشاهدة" }
      },
      {
        id: 3,
        title: { en: "Social Media Reels", ar: "مقاطع ريلز لوسائل التواصل" },
        description: { en: "Short-form content for Instagram and TikTok", ar: "محتوى قصير لإنستجرام وتيك توك" },
        image: "/images/portfolio/video-3.jpg",
        results: { en: "20+ reels created", ar: "أكثر من 20 ريلز" }
      }
    ]
  },
  {
    id: 6,
    icon: FaCubes,
    title: {
      en: "Digital Products",
      ar: "المنتجات الرقمية"
    },
    description: {
      en: "Access premium digital subscriptions and services at competitive prices. We provide Netflix, Canva, ChatGPT, Visa/Mastercard, online courses, and more - making premium digital products accessible to everyone.",
      ar: "احصل على اشتراكات وخدمات رقمية مميزة بأسعار تنافسية. نوفر Netflix، Canva، ChatGPT، بطاقات Visa/Mastercard، الدورات التدريبية، والمزيد - نجعل المنتجات الرقمية المميزة في متناول الجميع."
    },
    alt: {
      en: "Digital Products & Premium Subscriptions - Netflix, Canva, ChatGPT",
      ar: "المنتجات الرقمية والاشتراكات المميزة - نتفليكس، كانفا، تشات جي بي تي"
    },
    delay: 1,
    portfolio: [
      {
        id: 1,
        title: { en: "Premium Subscriptions", ar: "الاشتراكات المميزة" },
        description: { en: "Netflix, Canva Pro, ChatGPT Plus, and more streaming services", ar: "نتفليكس، كانفا برو، تشات جي بي تي بلس، والمزيد من خدمات البث" },
        image: "/images/portfolio/product-1.jpg",
        results: { en: "500+ active users", ar: "أكثر من 500 مستخدم نشط" }
      },
      {
        id: 2,
        title: { en: "Payment Cards", ar: "بطاقات الدفع" },
        description: { en: "Visa and Mastercard virtual cards for online purchases", ar: "بطاقات فيزا وماستركارد افتراضية للشراء عبر الإنترنت" },
        image: "/images/portfolio/product-2.jpg",
        results: { en: "Secure payments", ar: "مدفوعات آمنة" }
      },
      {
        id: 3,
        title: { en: "Online Courses", ar: "الدورات التدريبية" },
        description: { en: "Access to premium educational platforms and courses", ar: "الوصول إلى منصات تعليمية ودورات تدريبية مميزة" },
        image: "/images/portfolio/product-3.jpg",
        results: { en: "100+ courses available", ar: "أكثر من 100 دورة متاحة" }
      }
    ]
  }
];

export default servicesData;
