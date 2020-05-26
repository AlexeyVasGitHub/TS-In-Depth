showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

type Book = {
  title: string,
  category: Category,
  author: string,
  available: boolean
};

type Books = ReadonlyArray<Book>;

enum Category { Javascript, CSS, HTML, Typescript, Angular };

function getAllBooks(): Books {
  const books: Books = [
    { title: 'Refactoring JavaScript', category: Category.Javascript, author: 'Evan Burchard', available: true},
    { title: 'JavaScript Testing', category: Category.Javascript, author: 'Liang Yuxian Eugene', available: false },
    { title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
    { title: 'Mastering JavaScript Object-Oriented Programming', category: Category.Javascript, author: 'Andrea Chiarelli', available: true }
  ];

 return books;
}

function logFirstAvailabvle(books: Books): void {
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

function getBookTitlesByCategory(category: Category): Array<string> {
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
  const data = [
      { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
      { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
      { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

  const result = data.reduce((acc: bigint, obj: any) => {
    return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
  }, BigInt(0));

  return result;
}

logFirstAvailabvle(getAllBooks());
const result = getBookTitlesByCategory(Category.Javascript);
logBookTitles(result);
console.log(getBookAuthorByIndex(2));
