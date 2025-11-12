export interface BlogPost {
    id: string
    date: string
    title: string
    excerpt: string
    readTime: string
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        date: 'April 12, 2025',
        title: 'What was your win this week?',
        excerpt:
            "System adapted as a result of inspiration from Jess Lee. Looking back on your week -- what was something you're proud of?",
        readTime: '6 min read',
    },
    {
        id: '2',
        date: 'March 28, 2025',
        title: 'Hello World!',
        excerpt:
            'I wonder if in a different time continum, they write `howdy universe!`. I promise, that legit sounded better in my head',
        readTime: '8 min read',
    },
]
