import { motion } from 'framer-motion'
import { Link } from 'react-router'

interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
}

// Define type for category
interface Category {
  value: string;
  label: string;
}

interface FeaturedPostProps {
  post: Post;
  categories: Category[];
}

interface FeaturedPostsProps {
  blogPosts: Post[];
  categories: Category[];
}

// FeaturedPost component needs to receive post as a prop
export function FeaturedPost({ post, categories }: FeaturedPostProps) {
    return (
        <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:translate-y-1 hover:shadow-lg"
        >
            <div className="h-48 bg-gray-200"></div>
            <div className="pt-2 px-4 flex flex-wrap gap-2 text-gray-500 pb-0">
                <span className="text-xs post-date">{post.date}</span>
                <span className="text-xs post-category">
                    {
                        categories.find(
                            (c: { value: string }) => c.value === post.category
                        )?.label
                    }
                </span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
            </div>
            <h3 className="pt-1 px-4 pb-1 text-lg">{post.title}</h3>
            <p className="px-4 text-xs text-gray-500 mb-2 py-0">
                {post.excerpt}
            </p>
            <Link
                to={`/blog/${post.id}`}
                className="text-sm mx-4 mb-4 mt-0 block text-blue-500"
            >
                Read Article
            </Link>
        </motion.div>
    )
}

export default function FeaturedPosts({ blogPosts, categories }: FeaturedPostsProps) {
    return (
        <>
            <h2 className="text-center text-lg mb-[var(--spacing-md)]">
                Featured Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                    .filter((post) => post.featured)
                    .map((post) => (
                        <FeaturedPost
                            key={post.id}
                            post={post}
                            categories={categories}
                        />
                    ))}
            </div>
        </>
    )
}

/*

// Sample data (you'd likely fetch this from an API or props)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first component.",
    date: "April 20, 2025",
    category: "react",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Advanced CSS Techniques",
    excerpt: "Discover powerful CSS techniques to enhance your web designs.",
    date: "April 15, 2025",
    category: "css",
    readTime: "7 min read",
    featured: true
  },
  {
    id: 3,
    title: "JavaScript Best Practices",
    excerpt: "Write cleaner, more maintainable JavaScript with these tips.",
    date: "April 10, 2025",
    category: "javascript",
    readTime: "6 min read",
    featured: false
  }
];

const categories = [
  { value: "react", label: "React" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" }
];

// FeaturedPost component needs to receive post as a prop
export function FeaturedPost({ post }) {
  return (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:translate-y-1 hover:shadow-lg"
    >
      <div className="h-48 bg-gray-200"></div>
      <div className="pt-2 px-4 flex flex-wrap gap-2 text-gray-500 pb-0">
        <span className="text-xs post-date">{post.date}</span>
        <span className="text-xs post-category">
          {categories.find(c => c.value === post.category)?.label}
        </span>
        <span className="text-xs text-gray-500">{post.readTime}</span>
      </div>
      <h3 className="pt-1 px-4 pb-1 text-lg">{post.title}</h3>
      <p className="px-4 text-xs text-gray-500 mb-2 py-0">{post.excerpt}</p>
      <Link to={`/blog/${post.id}`} className="text-sm mx-4 mb-4 mt-0 block text-blue-500">
        Read Article
      </Link>
    </motion.div>
  );
}

export default function FeaturedPosts() {
  return (
    <>
      <h2 className="text-center text-lg mb-4">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts
          .filter(post => post.featured)
          .map(post => (
            <FeaturedPost key={post.id} post={post} />
          ))}
      </div>
    </>
  );
}

*/
