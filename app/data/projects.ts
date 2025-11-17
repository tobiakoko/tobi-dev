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
        title: 'OseiPrempeh Law Firm',
        description:
            'Modern law firm website built with React Router v7 featuring dynamic routing, responsive design, and optimized performance. Showcases legal services with elegant UI/UX.',
        tags: ['React Router v7', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://www.oseiprempeh.com/',
        category: 'Web Application',
    },
    {
        title: 'DLBC Tampa',
        description:
            'Full-featured church website with event management, sermon archive, and community engagement features. Built for scalability and ease of content management.',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'CMS'],
        link: 'https://www.dlbctampa.org/',
        category: 'Web Application',
    },
    {
        title: 'Ask Kumuyi AI',
        description:
            'AI-powered chatbot interface trained on religious teachings, featuring natural language processing and context-aware responses. Deployed on Azure with scalable architecture.',
        tags: ['Python', 'Azure AI', 'React', 'REST API'],
        link: 'https://askkumuyi.ai/',
        category: 'AI/ML Application',
    },
    {
        title: 'Portfolio Website',
        description:
            'Personal portfolio website built with React Router v7, featuring smooth animations, responsive design, and modern UI patterns. Showcases projects and technical skills.',
        tags: ['React Router v7', 'TypeScript', 'Tailwind CSS', 'Vite'],
        link: 'https://tobiakoko.com',
        category: 'Web Application',
    },
]
