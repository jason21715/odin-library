const book1Title = document.getElementsByClassName("book1Title");
const book1Author = document.getElementsByClassName("book1Title");
const book1Pages = document.getElementsByClassName("book1Title");
const book1Completion = document.getElementsByClassName("book1Title");

const newBookButton = document.getElementById("newBook");
const addBookButton = document.getElementById("addBook");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPages = document.getElementById("bookPages");
const bookCompletion = document.getElementById("bookCompletion");
const toggleNewBookForm = document.getElementById("newBookForm");

class Book {
  constructor(title, author, pages, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
  }
}

let myLibrary = [];

function Books() {
  for (const i of myLibrary) {
    const book1TitleElement = document.querySelector(".book1Title");
    const book1AuthorElement = document.querySelector(".book1Author");
    const book1PagesElement = document.querySelector(".book1Pages");
    const book1CompletionElement = document.querySelector(".book1Completion");

    book1TitleElement.textContent = `Book #1 TITLE: ${i.title}`;
    book1AuthorElement.textContent = `AUTHOR: ${i.author}`;
    book1PagesElement.textContent = `PAGES: ${i.pages}`;
    if (i.completed === "on") {
      book1CompletionElement.textContent = "STATUS: COMPLETED";
    } else if (i.completed === "off") {
      book1CompletionElement.textContent = "STATUS: NOT COMPLETED";
    }
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

newBookButton.addEventListener("click", () => {
  newBookButton.style.display = "none";
  toggleNewBookForm.style.display = "block";
});

addBookButton.addEventListener("click", function (e) {
  const book1 = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookCompletion.value
  );

  addBookToLibrary(book1);
  Books();

  addBookButton.style.display = "none";
  toggleNewBookForm.style.display = "none";

  e.preventDefault();
});

Books();
