import { useParams, Link } from "react-router";
import { BookReviewContent } from "~/welcome/book";
import { technicalBooks } from "~/welcome/bookData";
import type { Route } from "./+types/book";

export function meta({}: Route.MetaArgs) {
    return [
        { name: 'author', content: 'Daniel Akoko'},
        { title: 'Daniel Akoko Website' },
        { name: 'description', content: "Daniel Akoko's Portfolio website"},
        { name: 'description', content: "Daniel Akoko is a Software Engineer and program Manager based in Tampa Florida and is a dedicated problem solver who thrives on learning and building" },
    ]
}

export function links() {
    return [
        {
            rel: "icon",
            href: "/Logo-dark.ico",
            type: "image/png"
        }
    ]
}

export default function Book() {
  const { id } = useParams<{ id: string }>();
  const book = technicalBooks.find((book) => book.id === id);
  
  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p>Book not found</p>
        </div>
        <Link to="/books" className="text-blue-600 hover:underline">
          &larr; Back to book library
        </Link>
      </div>
    );
  }
  
  return <BookReviewContent book={book} />;
}