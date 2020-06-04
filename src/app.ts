showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

interface Book {
  id: number,
  title: string,
  category: Category,
  author: string,
  available: boolean
};

type Books = ReadonlyArray<Book>;

enum Category { Javascript, CSS, HTML, Typescript, Angular };

function getAllBooks(): Books {
  const books: Books = <const>[
    { id: 1, title: 'Refactoring JavaScript', category: Category.Javascript, author: 'Evan Burchard', available: true},
    { id: 2, title: 'JavaScript Testing', category: Category.Javascript, author: 'Liang Yuxian Eugene', available: false },
    { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.Javascript, author: 'Andrea Chiarelli', available: true }
  ];

 return books;
}

function logFirstAvailabvle(books: Books = getAllBooks()): void {
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

function getBookTitlesByCategory(category: Category = Category.Javascript): Array<string> {
  const books: Books = getAllBooks();
  let titles: Array<string> = [];

  for (const book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }

  return titles;
}

function logBookTitles(titles: Array<string>): void {
  for (const title of titles) {
    console.log(title);
  }
}

function getBookAuthorByIndex(index: number): [string, string] {
  const books = getAllBooks();
  const { title, author } = books[index];

  return [title, author];
}

function calcTotalPages(): bigint {
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

function getBookById(id: number): Book {
  const books = getAllBooks();
  return books.find(book => book.id === id);
}

function createCustomerId(name: string, id: number): string {
  return `${id} - ${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer Name: ${name}`);

  if (age) {
    console.log(`Customer Age: ${age}`);
  }

  if (city) {
    console.log(`Customer City: ${city}`);
  }
}

function checkoutBooks(customer: string, ...bookIds: number[]){
  console.log(`Customer Name: ${customer}`);

  const titles: string[] = [];

  for (const id of bookIds){
    const book = getBookById(id);
    if (book && book.available){
      titles.push(book.title);
    }
  }

  return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
  const books = getAllBooks();

  if (args.length === 1){
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

function assertStringValue(value: any): asserts value is string {
  if (typeof value !== 'string'){
    throw new Error('value should have been a string'); 
  }
}

function bookTitleTransform(title: any): string {
  assertStringValue(title);
  return [...title].reverse().join('');
}

function printBook(book: Book): void {
  console.log (`${book.title} by ${book.author}`);
}

//===================================

logFirstAvailabvle(getAllBooks());
//const result = getBookTitlesByCategory(Category.Javascript);
//logBookTitles(result);
console.log(getBookAuthorByIndex(2));
console.log(calcTotalPages());

//===================================

const result = getBookTitlesByCategory(Category.Javascript);
result.forEach(title => console.log(title));
console.log(getBookById(1));

//===================================

const myId: string = createCustomerId('Ann', 10);
console.log(myId);
let idGenerator: (p1: string, p2: number) => string = (name: string, id: number) => `${id} - ${name}`;
idGenerator = createCustomerId;
console.log(idGenerator('Boris', 20));

//===================================

createCustomer('Anna');
createCustomer('Boris', 20);
createCustomer('Clara', 20, 'Kyiv');
console.log(getBookTitlesByCategory());
logFirstAvailabvle();

const myBooks = checkoutBooks('Ann', 1, 2, 4);
console.log(myBooks);

//====================================
const checkedOutBooks = getTitles(false);
console.log(checkedOutBooks);


const s = bookTitleTransform('some string');
console.log(s);
const n = bookTitleTransform(10);
console.log(n);

//======================================

const myBook = {
  id: 5,
  title: 'Colors, Backgrounds and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  year: 2015,
  copies: 3
}

printBook(myBook);