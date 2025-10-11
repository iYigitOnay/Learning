interface Book {
  isbn: string;
  title: string;
  author: string;
  pages: number;
  isPublished?: boolean;
}

function getBookSummary(book: Book): string {
  return `${book.title} by ${book.author} has ${book.pages} pages and ISBN ${
    book.isbn
  }, Published: ${book.isPublished ? "Yes" : "No"}`;
}

const myBook: Book = {
  isbn: "1128",
  title: "Learn TypeScript",
  author: "Mely",
  pages: 250,
  isPublished: true,
};
