// Book Class: Represents a Book

// class Book {
//   title: string;
//   author: string;
//   ISBN: string;

//   constructor(title: string, author: string, ISBN: string) {
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//   }
// }
class Book {
  constructor(
    public title: string,
    public author: string,
    public Isbn: string
  ) {
    //     this.title = title;
    //     this.author = author;
    //     this.ISBN = ISBN;
  }
}

// UI Class: Handle UI Tasks

class Ui {
  static displayBooks() {
    const BooksData = [
      {
        title: "BookOne",
        author: "authorOne",
        Isbn: "IsbnOne",
      },
      {
        title: "Book TwO",
        author: "authorTwO",
        Isbn: "IsbnTwO",
      },
    ];

    const books = BooksData;

    books.forEach((book) => Ui.addBookToLIst(book));
  }

  //   Methods

  static addBookToLIst(book) {
    let list = document.querySelector("#book-list");

    let row = document.createElement("tr");

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
  static removeBook(el) {
    console.log(el.target);

    if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
    }else{
        console.log('Not found in class');
        
    }
  }
}

// let myBook = new Book("author", "author", "author")
// console.log(myBook);

// Store Class: Handles Storage

//Events: displayed Books
document.addEventListener("DOMContentLoaded", Ui.displayBooks);

//Events: Adding  Books to form
let formBook = document.querySelector("#book-form");

formBook.addEventListener("submit", (e) => {
  // preventDefault to fix loading form
  e.preventDefault();
  const title = (document.querySelector("#title") as HTMLInputElement).value;
  const author = (document.querySelector("#author") as HTMLInputElement).value;
  const isbn = (document.querySelector("#isbn") as HTMLInputElement).value;

  //  show data  adding to form

  const book = new Book(title, author, isbn);

  //adding books to form
  Ui.addBookToLIst(book);
  //clear inputs filed
  Ui.clearFiled();

  //   remove book from list

  document.querySelector("#book-list").addEventListener('click', (e) => {

    // console.log(e.target);
    
    Ui.removeBook(e.target);
  });
});
