// page.book.tsx
import SubHeading from "~/components/SubHeading";
import Badge from "~/components/Badge";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import  {type Book, type BookCategory, technicalBooks } from "./bookData";
import { useEffect, useState, useRef, type SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";


const ChevronLeft = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="rgb(78,92,188)" viewBox="0 0 256 256" className="hover:fill-indigo-500 ">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z" />
    </svg>
);
const ChevronRight = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="rgb(78,92,188)" viewBox="0 0 256 256" className="hover:fill-indigo-900 ">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z" />
    </svg>
);

export default function BookReviews({ books }: { books: Book[] }) {
    const [selectedCategory, setSelectedCategory] = useState<BookCategory | 'All'>('All');
    const navigate = useNavigate();
    
    const categories: (BookCategory | 'All')[] = ['All', 'Technical', 'Productivity', 'Problem Solving', 'Career Development', 'Communication', 'Leadership'];
    
    const filteredBooks = selectedCategory === 'All' 
        ? technicalBooks 
        : technicalBooks.filter(book => book.category === selectedCategory);
    
    // Carousel functionality
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Check scroll buttons on mount and when books change
  useEffect(() => {
    checkScrollButtons();
  }, [filteredBooks]);

  const scroll = (direction: string) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320; 
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Check scroll buttons after scrolling
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section
      id="books"
      className="overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge badge={'Book Reviews'} />
          <p className="text-xl md:text-md font-light tracking-tight text-gray-600 mb-8 max-w-2xl mx-auto">
            Books I've Read
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <p className="text-md font-light tracking-tight text-gray-600 mb-8 max-w-6xl mx-auto italic">
                So when I'm not coding or breaking things in the web or 'outside', I enjoy my solitude by reading books. 
                I decided to add this section to keep me accountable to never stop feeding my mind by reading good books 
                and I'll be dropping book reviews after every read, I hope you enjoy it!
          </p>
        </motion.div>

        {/* Carousel Container with Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* Left Arrow 
          inline-grid place-items-center border align-middle select-none font-sans font-medium text-center 
          transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none 
          text-sm min-w-[38px] min-h-[38px] rounded-md shadow-sm hover:shadow-md bg-stone-200 border-stone-200 
          text-stone-800 hover:bg-stone-100 hover:bg-stone-100"
          */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 place-items-center border align-middle select-none font-medium p-0.5 rounded-full text-center shadow-md hover:shadow-lg bg-stone-200 border-stone-200 
          text-stone-800 hover:bg-stone-100 transition-all duration-300 ease-in  ${
              canScrollLeft ? 'opacity-100' : 'opacity-50 shadow-none cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="hover:fill-indigo-500" />
          </button>
          
          {/* Carousel */}
          <div 
            ref={carouselRef}
            onScroll={checkScrollButtons}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2 -mx-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 px-2">
              {filteredBooks.map((book) => (
                <div key={book.id} className="flex-shrink-0 w-64">
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 place-items-center border align-middle select-none font-medium p-0.5 rounded-full text-center shadow-md hover:shadow-lg bg-stone-200 border-stone-200 
          text-stone-800 hover:bg-stone-100 transition-all duration-300 ease-in ${
              canScrollRight ? 'opacity-100' : 'opacity-50 shadow-none cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="hover:fill-indigo-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
export const BookCard: React.FC<{ book: Book }> = ({ book }) => {
    const navigate = useNavigate();
    const fallbackImage = `/images/books/${book.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
  
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      onClick={() => navigate(`/books/${book.id}`)}
      className="relative rounded-lg overflow-hidden shadow-lg h-[450px] w-80 cursor-pointer group"
    >
      {/* Book Cover - Takes up full height */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={book.coverImage || fallbackImage}
          alt={`Cover of ${book.title}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback for broken images
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = '/images/placeholder-book.jpg'; // Assuming you have a placeholder
          }}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-10 bg-white/20 backdrop-blur-md p-5 
                     border-t border-white/30 transition-all duration-300
                     group-hover:bg-white/30">
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-[color:var(--primary-color)] mb-1 drop-shadow-sm">
            {book.title}
          </h3>
          <p className="text-sm text-[color:var(--primary-foreground)] drop-shadow-sm">
            by {book.author}
          </p>
        </div>
      </div>
    </motion.div>
  );
};


export const BookReviewContent: React.FC<{ book: Book }> = ({ book }) => {

    return (
        <div className="container mx-auto px-4 py-8">
          <Link to="/books" className="text-blue-600 hover:underline mb-6 inline-block">
            &larr; Back to book library
          </Link>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Book cover/placeholder */}
              <div className="w-full md:w-1/3">
                {book.coverImage ? (
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-auto rounded-md shadow-md" 
                  />
                ) : (
                  <div className="bg-gray-200 h-80 rounded-md shadow-md flex items-center justify-center p-4">
                    <h2 className="text-center text-gray-600 font-bold">
                      {book.title}
                      <br />
                      <span className="font-normal">by {book.author}</span>
                    </h2>
                  </div>
                )}
              </div>
              
              {/* Book details */}
              <div className="w-full md:w-2/3">
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800 mb-2">
                  {book.category}
                </span>
                <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
                <p className="text-xl text-gray-600 mb-6">by {book.author}</p>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Overview</h2>
                  <p className="text-gray-700">{book.description}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">Developer Relevance</h2>
                  <p className="text-gray-700">{book.relevance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };