import { Category } from "./enums";
import { UnivercityLibrarian, RefBook } from "./classes";
import { showHello, logFirstAvailabvle, getBookAuthorByIndex, getAllBooks, calcTotalPages, getBookById, getBookTitlesByCategory, createCustomerId, createCustomer, checkoutBooks, getTitles, bookTitleTransform, printBook, getBookProp } from "./functions";
import { Logger, Author, Librarian } from "./interfaces";
import { PersonBook } from "./types";

showHello('greeting', 'TypeScript');

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
  copies: 3,
  pages: 200,
  markDamaged: (reason: string) => { console.log(`Damaged : ${reason}`) }
}

printBook(myBook);
myBook.markDamaged('missing back cover');

//=======================================
const logDamage: Logger = (reason: string) => { console.log(`Damaged : ${reason}`) }
logDamage('missing cover');

//=======================================
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