export interface SkillCategory {
    title: string
    icon: string
    skills: string[]
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Languages & Frameworks',
        icon: 'code',
        skills: [
            'React.js',
            'Nextjs',
            'JavaScript (ES6+)',
            'TypeScript',
            'Java',
            'SQL',
            'Python',
            'HTML5 & CSS3',
        ],
    },
    {
        title: 'Tools & Libraries',
        icon: 'tools',
        skills: [
            'Redux',
            'Webpack',
            'Vite',
            'Jest',
            'Tailwind CSS',
            'Framer Motion',
        ],
    },
    {
        title: 'Other',
        icon: 'plus',
        skills: [
            'Git/GitHub',
            'RESTful APIs',
            'GraphQL',
            'Responsive Design',
            'Accessibility',
            'Performance Optimization',
        ],
    },
]
