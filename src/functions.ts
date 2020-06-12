import { Category } from "./enums";
import { Books, BookOrUndefined, BookProperties } from "./types";
import { Book } from "./interfaces";

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export function getAllBooks(): Books {
    const books: Books = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.Javascript, author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', category: Category.Javascript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.Javascript, author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

export function logFirstAvailabvle(books: Books = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let title: string = '';

    for (const book of books) {
        if (book.available) {
            title = book.title;
            break;
        }
    }

    console.log(`Total number of Books: ${numberOfBooks}`);
    console.log(`First available book: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.Javascript): Array<string> {
    const books: Books = getAllBooks();
    let titles: Array<string> = [];

    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }

    return titles;
}

export function logBookTitles(titles: Array<string>): void {
    for (const title of titles) {
        console.log(title);
    }
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];

    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const result = data.reduce((acc: bigint, obj: any) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, BigInt(0));

    return result;
}

export function getBookById(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function createCustomerId(name: string, id: number): string {
    return `${id} - ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer Name: ${name}`);

    if (age) {
        console.log(`Customer Age: ${age}`);
    }

    if (city) {
        console.log(`Customer City: ${city}`);
    }
}

export function checkoutBooks(customer: string, ...bookIds: number[]) {
    console.log(`Customer Name: ${customer}`);

    const titles: string[] = [];

    for (const id of bookIds) {
        const book = getBookById(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    }

    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return book[prop][name];
    } else {
        return book[prop];
    }
}

