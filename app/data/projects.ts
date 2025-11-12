export interface Project {
    title: string
    description: string
    tags: string[]
    link: string
}

export const projects: Project[] = [
    {
        title: 'The Law',
        description:
            'OseiPrempei.com built with React router v7 Framework mode, Typescript and Tailwind CSS',
        tags: ['React', 'React router', 'Typescript', 'Tailwind CSS'],
        link: 'https://www.oseiprempeh.com/',
    },
    {
        title: 'Church Website',
        description:
            'DLBC Tampa church website built with Next.js and Tailwind CSS',
        tags: ['Nextjs', 'Tailwind CSS'],
        link: 'https://www.dlbctampa.org/',
    },
    {
        title: 'FreeWillPay Dashboard',
        description: 'Dashboard for managing payments and transactions',
        tags: ['TypeScript', 'React', 'Java', 'Tailwind CSS'],
        link: '#',
    },
    {
        title: 'Ask Kumuyi Ai Interface',
        description:
            'Chatbot trained on the teachings of Pastor Dr. W.F. Kumuyi',
        tags: ['jQuery', 'BootStrap', 'Python', 'Azure'],
        link: 'https://askkumuyi.ai/',
    },
]
