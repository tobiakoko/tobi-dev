export interface BlogPost {
    slug: string
    title: string
    date: string
    author: string
    excerpt: string
    category: string
    readTime: string
    published: boolean
    content?: string
}

const blogPostsData: Record<string, BlogPost> = {
    'what-was-your-win-this-week': {
        slug: 'what-was-your-win-this-week',
        title: 'What was your win this week?',
        date: '2025-04-12',
        author: 'Daniel Akoko',
        excerpt:
            "System adapted as a result of inspiration from Jess Lee. Looking back on your week -- what was something you're proud of?",
        category: 'Personal Development',
        readTime: '6 min read',
        published: true,
        content: `
            <p class="mb-4 italic">System adapted as a result of inspiration from Jess Lee.</p>
 
            <h2 class="text-2xl font-bold mt-8 mb-4">What was your win this week?</h2>
            <p class="mb-4">Looking back on your week -- what was something you're proud of?</p>
            <p class="mb-4">All wins count -- big or small</p>
            <p class="mb-4">Examples of 'wins' include:</p>
            <ul class="list-disc ml-6 mb-6">
                <li class="mb-2">Getting a promotion!</li>
                <li class="mb-2">Starting a new project</li>
                <li class="mb-2">Fixing a tricky bug</li>
                <li class="mb-2">Cleaning your house...or whatever else that may spark joy</li>
            </ul>
 
            <p class="italic">Happy winning y'all!</p>
        `,
    },
    'hello-world': {
        slug: 'hello-world',
        title: 'Hello World!',
        date: '2025-03-28',
        author: 'Daniel Akoko',
        excerpt:
            "I wonder if in a different time continuum, they write 'howdy universe!'. I promise, that legit sounded better in my head.",
        category: 'General',
        readTime: '8 min read',
        published: true,
        content: `
            <p class="mb-4 italic">I wonder if in a different time continuum, they write 'howdy universe!'. I promise, that legit sounded better in my head.</p>
 
            <h2 class="text-2xl font-bold mt-8 mb-4">Hello World!</h2>
            <p class="mb-4">Welcome to my blog! This is the traditional first post that developers make when starting something new. But instead of just saying "Hello World," let me tell you a bit about what you can expect here.</p>
 
            <h3 class="text-xl font-bold mt-6 mb-3">The Journey Ahead</h3>
            <p class="mb-4">This blog will be a space where I share:</p>
            <ul class="list-disc ml-6 mb-6">
                <li class="mb-2">Technical insights and tutorials</li>
                <li class="mb-2">Lessons learned from building projects</li>
                <li class="mb-2">Thoughts on software engineering best practices</li>
                <li class="mb-2">Personal reflections on the developer journey</li>
            </ul>
 
            <h3 class="text-xl font-bold mt-6 mb-3">So, this is the game plan:</h3>
            <ol class="list-decimal ml-6 mb-6">
                <li class="mb-2">Write consistently and authentically</li>
                <li class="mb-2">Share knowledge that helps others</li>
                <li class="mb-2">Document my learning process</li>
            </ol>
 
            <p class="mb-4">I know, I know. I hear the dissenting voices saying that this is too ambitious but, you can't fault a man from being aspirational can you?</p>
            <p class="mb-4">Don't worry, it's a journey and we'll reflect again in better times!</p>
 
            <p class="italic">Happy coding y'all!</p>
        `,
    },
}
 
/**
 * Get all published blog posts (client-side)
 */
export function getAllPosts(): BlogPost[] {
    return Object.values(blogPostsData)
        .filter((post) => post.published)
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
}
 
/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
    return blogPostsData[slug] || null
}
 
/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
    return getAllPosts().filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
    )
}
 
/**
 * Get all unique categories
 */
export function getCategories(): string[] {
    const categories = new Set(getAllPosts().map((post) => post.category))
    return Array.from(categories).sort()
}