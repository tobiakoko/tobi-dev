export interface Project {
    title: string
    description: string
    tags: string[]
    link: string
    category?: string
    image?: string
}

export const projects: Project[] = [
    {
        title: 'Afromerica Entertainment',
        description:
            'A comprehensive entertainment platform enabling seamless content management, event ticketing, and artist promotion. Built with modern full-stack architecture featuring real-time updates, secure authentication, and scalable cloud infrastructure.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
        link: 'https://www.afromericaent.com/',
        category: 'Full-Stack Web Application',
    },
    {
        title: 'Ron\'s Body Shop',
        description:
            'Premium automotive service website showcasing collision repair expertise through immersive animations and responsive design. Features smooth scroll interactions, dynamic service galleries, and optimized performance for exceptional user experience.',
        tags: ['React', 'Vite','TypeScript', 'Tailwind CSS', 'GSAP','Framer Motion'],
        link: 'https://www.ronsbodyshop.net/',
        category: 'Web Application',
    },
    {
        title: 'OseiPrempeh Law Firm',
        description:
            'Professional legal services platform leveraging React Router v7 for fluid navigation and dynamic content delivery. Combines sophisticated UI/UX design with performance optimization to deliver an elegant, trustworthy client experience.',
        tags: ['React Router v7', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://www.oseiprempeh.com/',
        category: 'Web Application',
    },
    {
        title: 'DLBC Tampa',
        description:
            'Community-focused church platform integrating event management, multimedia sermon archives, and member engagement tools. Architected for growth with intuitive content management and seamless mobile accessibility.',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'CMS'],
        link: 'https://www.dlbctampa.org/',
        category: 'Web Application',
    },
    {
        title: 'Ask Kumuyi AI',
        description:
            'Intelligent conversational AI powered by Azure, delivering context-aware spiritual guidance through advanced natural language processing. Features sophisticated prompt engineering, vector-based knowledge retrieval, and enterprise-grade cloud deployment.',
        tags: ['Python', 'Azure AI', 'React', 'REST API'],
        link: 'https://askkumuyi.ai/',
        category: 'AI/ML Application',
    },
    {
        title: 'Portfolio Website',
        description:
            'Modern developer portfolio showcasing technical expertise through performant animations, responsive layouts, and clean architecture. Built with cutting-edge React Router v7 and optimized for speed, accessibility, and visual impact.',
        tags: ['React Router v7', 'TypeScript', 'Tailwind CSS', 'Vite'],
        link: 'https://tobiakoko.com',
        category: 'Web Application',
    },
]
