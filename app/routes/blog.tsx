import { Blogs } from '~/welcome/blog'


/*
Blog Posts Idea for the future 


1. The Open Graph Protocol. How I would optimise it for my websites 
    Sources - source 1: [https://vercel.com/guides/using-tailwind] 
              source 2: [https://ogp.me/]
              source 3: [https://vercel.com/docs/og-image-generation]
              source 4: [https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/]
              source 5: [https://seosetups.com/blog/open-graph/]
              source 6: [https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image]
              source 7: [https://developers.google.com/search/docs/appearance/structured-data]
              source 8: []

2. Google Analytics. What they forgot to tell us
    Sources - source 1: [https://www.freecodecamp.org/news/making-sense-of-google-analytics-and-the-traffic-to-your-website/]
*/

export default function Blog() {
    return <Blogs />
}


//
// export function meta({}: Route.MetaArgs) {
//     return [
//         { title: "Blog" },
//         { name: "description", content: "Welcome to my blog! Here you will find my latest posts." },
//     ];
// }

/* 
const blogPosts = [
    {
      id: 1,
      title: "The Evolution of React Hooks in Modern Applications",
      excerpt: "Exploring how React Hooks have transformed component design and state management in React applications.",
      date: "April 12, 2025",
      category: "react",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Optimizing Performance in Large-Scale React Applications",
      excerpt: "Techniques and best practices for maintaining high performance in complex React projects with multiple components.",
      date: "March 28, 2025",
      category: "performance",
      readTime: "10 min read",
      featured: true
    },
    {
        id: 3,
        title: "Building Accessible Web Applications: A Comprehensive Guide",
        excerpt: "Essential strategies for creating inclusive web experiences that work for all users regardless of abilities.",
        date: "February 15, 2025",
        category: "accessibility",
        readTime: "12 min read",
        featured: false
      },
      {
        id: 4,
        title: "TypeScript Best Practices for React Developers",
        excerpt: "Leveraging TypeScript to create type-safe, maintainable React applications with fewer bugs.",
        date: "January 22, 2025",
        category: "typescript",
        readTime: "7 min read",
        featured: false
      },
      {
        id: 5,
        title: "CSS Grid vs Flexbox: When to Use Which",
        excerpt: "A detailed comparison of two powerful CSS layout systems and guidelines on choosing the right one for your project.",
        date: "December 10, 2024",
        category: "css",
        readTime: "9 min read",
        featured: false
      },
      {
        id: 6,
        title: "State Management Solutions in 2025: Beyond Redux",
        excerpt: "Exploring modern alternatives to Redux for state management in React applications.",
        date: "November 18, 2024",
        category: "react",
        readTime: "11 min read",
        featured: false
      }
    ];
    
    // const blogCategories = []
    const categories = [
      { value: 'all', label: 'All Posts' },
      { value: 'react', label: 'React' },
      { value: 'performance', label: 'Performance' },
      { value: 'accessibility', label: 'Accessibility' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'css', label: 'CSS' }
    ];
*/
