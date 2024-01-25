// Book Class: Represents a Book

class Book {
  title: string;
  author: string;
  ISBN: string;

  constructor(title: string, author: string, ISBN: string) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

// UI Class: Handle UI Tasks

class Ui {
  //   Methods

  static displayBooks() {
    const BooksData = [
      {
        title: "BookOne",
        author: "authorOne",
        isbn: "IsbnOne",
      },
      {
        title: "Book TwO",
        author: "authorTwO",
        isbn: "IsbnTwO",
      },
    ];

    const books = BooksData;

    books.forEach((book) => Ui.addBookToLIst(book));
  }

  static addBookToLIst(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.Isbn}</td>
    <td><a href ="#" class = "btn btn-danger btn-sm delete ">X</a></td>
    
    `;

    list.appendChild(row);
  }

  static clearFiled() {
    (document.querySelector("#title") as HTMLInputElement).value = "";
    (document.querySelector("#author") as HTMLInputElement).value = "";
    (document.querySelector("#isbn") as HTMLInputElement).value = "";
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(massage, className) {
    const div = document.createElement("div");
    const alertClass = (div.className = `alert  alert-${className}`);
    div.appendChild(document.createTextNode(massage));

    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    container.insertBefore(div, form);

    // vanish the alert

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 1000);
  }
}
// Store Class: Handles Storage

//Events: displayed Books
document.addEventListener("DOMContentLoaded", Ui.displayBooks);

//Events: Adding  Books to form
// let formBook = document.querySelector("#book-form");

document.querySelector("#book-form").addEventListener("submit", (e) => {
  // preventDefault to fix loading form

  e.preventDefault();
  // Get form values
  const title = (document.querySelector("#title") as HTMLInputElement).value;
  const author = (document.querySelector("#author") as HTMLInputElement).value;
  const isbn = (document.querySelector("#isbn") as HTMLInputElement).value;

  // validation
  if (title === "" || author === "" || isbn === "") {
    Ui.showAlert("Please fill  all fields", "danger");
  } else {
    // Insatiate book
    const book = new Book(title, author, isbn);

    // Add Book to UI

    Ui.addBookToLIst(book);

    //success add to list
    Ui.showAlert("Book Add to list ", "success");

    // Clear fields
    Ui.clearFiled();
  }
});

document.querySelector("#book-list").addEventListener("click", (e) => {
  //   remove book from list

  Ui.deleteBook(e.target);

    //success add to list
    Ui.showAlert(" Book Remove ", "info");
});
