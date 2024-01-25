class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class Ui {
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book) => Ui.addBookToLIst(book));
    }
    static addBookToLIst(book) {
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href ="#" class = "btn btn-danger btn-sm delete ">X</a></td>
    
    `;
        list.appendChild(row);
    }
    static clearFiled() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
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
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 1000);
    }
}
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}
document.addEventListener("DOMContentLoaded", Ui.displayBooks);
document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    if (title === "" || author === "" || isbn === "") {
        Ui.showAlert("Please fill  all fields", "danger");
    }
    else {
        const book = new Book(title, author, isbn);
        Ui.addBookToLIst(book);
        Ui.showAlert("Book Add to list ", "success");
        Store.addBook(book);
        Ui.clearFiled();
    }
});
document.querySelector("#book-list").addEventListener("click", (e) => {
    Ui.deleteBook(e.target);
    const target = e.target;
    Store.removeBook(target.parentElement.previousElementSibling.textContent);
    Ui.showAlert(" Book Remove ", "info");
});
//# sourceMappingURL=main.js.map