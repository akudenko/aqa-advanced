import { Book } from './book.js';

export class EBook extends Book {
	format;

	constructor(title, author, year, format) {
		super(title, author, year);
		this.format = format;
	}

	printInfo() {
		console.log(`Title is ${this.title}`);
		console.log(`Author is ${this.author}`);
		console.log(`Year is ${this.year}`);
		console.log(`Format is ${this.format}\n`);
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

	getFormat() {
		return console.log(this.format);
	}

	setTitle(title) {
		if (typeof title !== 'string') {
			return console.log('Title should have string value');
		} else if (title === null) {
			return console.log("Title value can't be an empty");
		} else {
			this.title = title;
		}
	}

	setAuthor(author) {
		if (typeof author !== 'string') {
			return console.log('Author should have string value');
		} else if (author === null) {
			return console.log("Author value can't be an empty");
		} else {
			this.author = author;
		}
	}

	setYear(year) {
		if (typeof year !== 'number') {
			return console.log('Year should have number value');
		} else if (year === null) {
			return console.log("Year value can't be an empty");
		} else {
			this.year = year;
		}
	}

	setFormat(format) {
		if (typeof format !== 'string') {
			return console.log('Format should have string value');
		} else if (format === null) {
			return console.log("Format value can't be an empty");
		} else {
			this.format = format;
		}
	}

	static getInstanceOfEBook(book, format) {
		return new EBook(book.title, book.author, book.year, format);
	}
}
