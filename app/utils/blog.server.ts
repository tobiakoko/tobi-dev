import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
 
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
 
const postsDirectory = path.join(process.cwd(), 'content/blog')
 
/**
 * Get all blog posts
 * @param includeUnpublished - Whether to include unpublished posts (default: false)
 */
export async function getAllPosts(
    includeUnpublished = false
): Promise<BlogPost[]> {
    try {
        const fileNames = fs.readdirSync(postsDirectory)
 
        const allPosts = await Promise.all(
            fileNames
                .filter((fileName) => fileName.endsWith('.md'))
                .map(async (fileName) => {
                    const slug = fileName.replace(/\.md$/, '')
                    const post = await getPostBySlug(slug)
                    return post
                })
        )
 
        // Filter out null posts and unpublished if needed
        const filteredPosts = allPosts.filter(
            (post): post is BlogPost =>
                post !== null && (includeUnpublished || post.published)
        )
 
        // Sort posts by date (newest first)
        return filteredPosts.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
    } catch (error) {
        console.error('Error reading blog posts:', error)
        return []
    }
}
 
/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(
    slug: string
): Promise<BlogPost | null> {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
 
        if (!fs.existsSync(fullPath)) {
            return null
        }
 
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
 
        // Parse markdown to HTML
        const htmlContent = await marked.parse(content)
 
        return {
            slug,
            title: data.title || '',
            date: data.date || '',
            author: data.author || 'Daniel Akoko',
            excerpt: data.excerpt || '',
            category: data.category || 'General',
            readTime: data.readTime || '5 min read',
            published: data.published !== false,
            content: htmlContent,
        }
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error)
        return null
    }
}
 
/**
 * Get posts by category
 */
export async function getPostsByCategory(
    category: string
): Promise<BlogPost[]> {
    const allPosts = await getAllPosts()
    return allPosts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
    )
}
 
/**
 * Get all unique categories
 */
export async function getCategories(): Promise<string[]> {
    const allPosts = await getAllPosts()
    const categories = new Set(allPosts.map((post) => post.category))
    return Array.from(categories).sort()
}