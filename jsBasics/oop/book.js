export class Book {
  title;
  author;
  year;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    console.log(`Title is ${this.title}`);
    console.log(`Author is ${this.author}`);
    console.log(`Year is ${this.year}\n`);
  }

  getTitle() {
    return console.log(this.title);
  }

  getAuthor() {
    return console.log(this.author);
  }

  getYear() {
    return console.log(this.year);
  }

  setTitle(title) {
    if (typeof title !== "string") {
      return console.log("Title should have string value");
    } else if (title === null) {
      return console.log("Title value can't be an empty");
    } else {
      this.title = title;
    }
  }

  setAuthor(author) {
    if (typeof author !== "string") {
      return console.log("Author should have string value");
    } else if (author === null) {
      return console.log("Author value can't be an empty");
    } else {
      this.author = author;
    }
  }

  setYear(year) {
    if (typeof year !== "number") {
      return console.log("Year should have number value");
    } else if (year === null) {
      return console.log("Year value can't be an empty");
    } else {
      this.year = year;
    }
  }

  static findOldestBook(...books) {
    let oldestBook = books[0];

    for(let book of books){
        if(oldestBook.year >= book.year){
            oldestBook = book;
        }
    }

    return `The oldest book is: ${oldestBook.title}, author: ${oldestBook.author} and a year is: ${oldestBook.year}`;
  }
}
