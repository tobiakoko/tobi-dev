import BookReviews from "~/welcome/book";
import { technicalBooks } from "~/welcome/bookData";
import type { Route } from "./+types/books";

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
            href: "/favicon.ico",
            type: "image/ico"
        }
    ]
}

export default function Books() {
  return (
    <>
      <BookReviews books={technicalBooks} />
    </>
  );
}