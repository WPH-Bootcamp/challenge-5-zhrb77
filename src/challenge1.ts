// Type definition for a book
type Book = {
  title: string;
  author: string;
  year: number;
};

// Array to store all books
const books: Book[] = [];

/**
 * Adds a new book to the collection
 * @param title - The title of the book
 * @param author - The author of the book
 * @param year - The publication year
 */
function addBook(title: string, author: string, year: number): void {
  const book: Book = { title, author, year };
  books.push(book);
  console.log(`Book added: "${title}" by ${author} (${year})`);
}

/**
 * Lists all books in the collection
 */
function listBooks(): void {
  console.log("All Books:");
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

/**
 * Searches for books by title (case-sensitive)
 * @param title - Optional title to search for
 */
function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  const results = books.filter((book) => book.title.includes(title));

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  results.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// Adding some books
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);

// Displaying all books
listBooks();

// Searching for a book by title
searchBook('1984');

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
