import { Book } from "./book";

class Library {
  books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  removeBook(isbn: string) {
    this.books = this.books.filter(book => book.isbn !== isbn);
  }
}
