import { Category } from "./enums";
import { UnivercityLibrarian, RefBook, Shelf } from "./classes";
import {
  showHello, logFirstAvailabvle, getBookAuthorByIndex,
  getAllBooks, calcTotalPages, getBookById,
  getBookTitlesByCategory, createCustomerId,
  createCustomer, checkoutBooks, getTitles,
  bookTitleTransform, printBook, getBookProp, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults
} from "./functions";
import { Logger, Author, Librarian, Book, Magazine } from "./interfaces";
import { PersonBook, BookRequiredFields, UpdatedBook, CreateCustomerFunctionType } from "./types";

showHello('greeting', 'TypeScript');

//=============================================
logFirstAvailabvle(getAllBooks());
//const result = getBookTitlesByCategory(Category.Javascript);
//logBookTitles(result);
console.log(getBookAuthorByIndex(2));
console.log(calcTotalPages());

//=============================================
const result = getBookTitlesByCategory(Category.Javascript);
result.forEach(title => console.log(title));
console.log(getBookById(1));

//=============================================
const myId: string = createCustomerId('Ann', 10);
console.log(myId);
let idGenerator: (p1: string, p2: number) => string = (name: string, id: number) => `${id} - ${name}`;
idGenerator = createCustomerId;
console.log(idGenerator('Boris', 20));

//=============================================
createCustomer('Anna');
createCustomer('Boris', 20);
createCustomer('Clara', 20, 'Kyiv');
console.log(getBookTitlesByCategory());
logFirstAvailabvle();

const myBooks = checkoutBooks('Ann', 1, 2, 4);
console.log(myBooks);

//=============================================
const checkedOutBooks = getTitles(false);
console.log(checkedOutBooks);

const s = bookTitleTransform('some string');
console.log(s);
// const n = bookTitleTransform(10);
// console.log(n);

//=============================================
const myBook = {
  id: 5,
  title: 'Colors, Backgrounds and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  year: 2015,
  copies: 3,
  pages: 200,
  markDamaged: (reason: string) => { console.log(`Damaged : ${reason}`) }
}

printBook(myBook);
myBook.markDamaged('missing back cover');

//=============================================
const logDamage: Logger = (reason: string) => { console.log(`Damaged : ${reason}`) }
logDamage('missing cover');

//=============================================
const favoriteAuthor: Author = {
  email: 'anna@example.com',
  name: 'Anna',
  numBooksPublished: 10
}

const favoriteLibrarian: Librarian = {
  name: 'Boris',
  email: 'boris@example.com',
  department: 'Security',
  assistCustomer: null
}

const offer: any = {
  book: {
    title: 'Essential Typescript'
  }
}
console.log(offer?.book?.title);

//=============================================
console.log(getBookProp(getAllBooks()[0], 'title'));
console.log(getBookProp(getAllBooks()[0], 'markDamaged'));

//=============================================
// const ref: ReferenceItem = new ReferenceItem('Facts and Figures', 2020);
// ref.printItem();
// ref.publisher = 'Press';
// console.log(ref.publisher);

//=============================================
const refBook: RefBook = new RefBook('Super Title', 2020, 2);
refBook.printItem();
console.log(refBook);

//=============================================
const refBook2: RefBook = new RefBook('Super Title', 2020, 2);
refBook2.printCitation();

//=============================================
const favoriteLibrarian2: Librarian = new UnivercityLibrarian();
favoriteLibrarian2.name = 'Anna';
console.log(favoriteLibrarian2);
favoriteLibrarian2.assistCustomer('Boris');

//=============================================
const personBook: PersonBook = {
  author: 'Anna',
  available: false,
  category: Category.Angular,
  email: 'anna@example.com',
  id: 1,
  name: 'Anna',
  title: 'Unknown'
}
console.log(personBook)

//=============================================
const flag = true;
if (flag) {
  import('./classes').then(module => {
    const reader = new module.Reader();
    reader.name = 'Anna';
    console.log(reader);
  });
}

//=============================================
const inventory: Array<Book> =
  [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
  ];
// let res: number[] | Book[] = purge<Book>(inventory);
// console.log(res);
// res = purge([1, 2, 3, 4]);
// console.log(res);

//=============================================
const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst());

const magazines: Magazine[] = [
  { title: 'Programming Language Monthly', publisher: 'Code Mags' },
  { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
  { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf: Shelf<Magazine> = new Shelf();
magazines.forEach(mag => magazineShelf.add(mag));
console.log(magazineShelf.getFirst());

//=============================================
magazineShelf.printTitles();
const mag = magazineShelf.find('Five Points');
console.log(mag);

//=============================================
const book: BookRequiredFields = {
  id: 1,
  author: 'Anna',
  available: false,
  category: Category.Typescript,
  markDamaged: null,
  pages: 200,
  title: 'Unknown'
}

const updatedBook: UpdatedBook = {
  id: 1
};

const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
createCustomer(...params);

//=============================================
const librarian = new UnivercityLibrarian();
librarian.name = 'Anna';
console.log(librarian);
librarian['printLibrarian']();

//=============================================
const librarian2 = new UnivercityLibrarian();
librarian2.assistFaculty = null;
// librarian2.teachCommunity = null;

//=============================================
const enc = new RefBook('My title', 2020, 3);
enc.printItem();

//=============================================
const librarian3 = new UnivercityLibrarian();
librarian3.name = 'Anna';
librarian3.assistCustomer('Boris');

//=============================================
const librarian4 = new UnivercityLibrarian();
librarian4.name = 'Anna';
librarian4.assistCustomer('Boris');

//=============================================
const enc2 = new RefBook('My title', 2020, 3);
enc.copies = 10;

//=============================================
console.log('start');
getBooksByCategory(Category.Javascript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('end');

//=============================================
console.log('start');
getBooksByCategoryPromise(Category.Javascript)
  .then(titles => {
    console.log(titles);
    return titles.length;
  })
  .then(numOfBooks => {
    console.log(numOfBooks);
  })
  .catch(err => console.log(err))
  .finally(() => console.log('completed'));
getBooksByCategoryPromise(Category.Software);
console.log('end');

//=============================================
console.log('start');
logSearchResults(Category.Javascript);
logSearchResults(Category.Software);
console.log('end');
