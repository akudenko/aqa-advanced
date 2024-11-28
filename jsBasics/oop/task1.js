import { Book } from "./book.js";
import { EBook } from "./ebook.js";

let book1 = new Book('Game Of Thrones', 'J Martin', 1995);
let book2 = new Book('Lord of the rings', 'J R Tolkien', 1960);
let book3 = new Book('Name of the wind', 'P Roufus', 2010);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log('\n');

let ebook1 = new EBook('Game Of Thrones2', 'J Martin', 1995, 'pdf');
let ebook2 = new EBook('Lord of the rings2', 'J R Tolkien', 1955, 'fb2');
let ebook3 = new EBook('Name of the wind2', 'P Roufus', 2007, 'pdf');

ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();

book1.getTitle();
book1.setTitle('Changed Game Of Thrones title');
book1.getTitle();
book1.setYear('sd');
book1.setAuthor();

ebook1.getTitle();
ebook1.setTitle('New Game Of Thrones title');
ebook1.getTitle();

ebook1.getFormat();
ebook1.setFormat('mobi');
ebook1.getFormat();

let oldestBook = Book.findOldestBook(book1, book2, book3, ebook1, ebook2, ebook3);
console.log(oldestBook);

let ebookInstance = EBook.getInstanceOfEBook(book1, 'EPUB');
console.log(ebookInstance);
