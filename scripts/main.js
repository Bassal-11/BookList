class Book {
    constructor(title, author, Isbn) {
        this.title = title;
        this.author = author;
        this.Isbn = Isbn;
    }
}
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
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
    static removeBook(el) {
        console.log(el.target);
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
        else {
            console.log('Not found in class');
        }
    }
}
document.addEventListener("DOMContentLoaded", Ui.displayBooks);
let formBook = document.querySelector("#book-form");
formBook.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    const book = new Book(title, author, isbn);
    Ui.addBookToLIst(book);
    Ui.clearFiled();
    document.querySelector("#book-list").addEventListener('click', (e) => {
        Ui.removeBook(e.target);
    });
});
//# sourceMappingURL=main.js.map