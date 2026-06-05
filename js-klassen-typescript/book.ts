export class Book {
  private readonly title: string;
  private readonly author: string;
  private readonly isbn: string;

  constructor(title: string, author: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  getDetails (): string {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
  }
}
