// // ES6 refactoring

// // ES6 Classes
// class Book {
//     constructor(title, author, isbn) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }

// class UI {
//     // Add Book To List
//     // UI prototype set to a function, function takes in book object
//     addBookToList(book) {
//         const list = document.getElementById('book-list');

//         // Create table row (tr) element 
//         const row = document.createElement('tr');

//         // Insert columns - can also use textContent =;
//         row.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td>
//     <td><a href="#" class="delete">X</a></td>
//     `;

//         // append (add) to list
//         list.appendChild(row);
//     }

//     // Show Alert for validation
//     showAlert(message, className) {
//         // Create element to allow showAlert to appear on page
//         // create div
//         const div = document.createElement('div');
//         // Add classes
//         div.className = `alert ${className}`;
//         // Add text - to add text we need to add a text node - text node takes in message created from the function
//         div.appendChild(document.createTextNode(message));
//         // Get parent
//         const container = document.querySelector('.container');
//         // Get form
//         const form = document.querySelector('#book-form');

//         // Insert alert
//         // insertBefore = what we want to insert, what we want to insert it before 
//         container.insertBefore(div, form);

//         // Timeout alert after three seconds
//         setTimeout(function () {
//             document.querySelector('.alert').remove();
//         }, 3000);
//     }

//     // Delete book from list

//     deleteBook(target) {
//         if (target.className === 'delete') {
//             // DOM traversing
//             // go from <td> to <tr>, then remove from DOM
//             target.parentElement.parentElement.remove();
//         }
//     }

//     // Clear input fields

//     clearFields() {
//         // setting values to nothing
//         document.getElementById('title').value = '';
//         document.getElementById('author').value = '';
//         document.getElementById('isbn').value = '';
//     }
// }

// // Local Storage Class
// class Store {
//     // single method to fetch book from local storage
//     static getBooks() {
//         let books;
//         if (localStorage.getItem('books') === null) {
//             books = [];
//         } else { // need to use JSON.parse function to make books a JavaScript Object
//             books = JSON.parse(localStorage.getItem('books'));
//         }

//         return books;
//     }

//     static displayBooks() {
//         const books = Store.getBooks();

//         books.forEach(function (book) {
//             const ui = new UI;

//             // Add book to UI
//             ui.addBookToList(book);
//         });
//     }

//     // add book to local storage
//     static addBook(book) {
//         const books = Store.getBooks();

//         books.push(book);

//         localStorage.setItem('books', JSON.stringify(books));
//     }

//     static removeBook(isbn) {
//         const books = Store.getBooks();

//         books.forEach(function (book, index) {
//             if (book.isbn === isbn) {
//                 books.splice(index, 1);
//             }
//         });

//         localStorage.setItem('books', JSON.stringify(books));
//     }
// }

// // DOM Load Event
// document.addEventListener('DOMContentLoaded', Store.displayBook);

// // Event Listener for adding book to list
// document.getElementById('book-form').addEventListener('submit', function (event) {
//     // Get form values
//     const title = document.getElementById('title').value,
//         author = document.getElementById('author').value,
//         isbn = document.getElementById('isbn').value

//     // Instantiate book
//     const book = new Book(title, author, isbn);

//     // Instantiate UI 
//     const ui = new UI();

//     // Validate input fields
//     if (title === '' || author === '' || isbn === '') {
//         // Error alert - takes in two fields - ('message') ('error')
//         ui.showAlert('Please fill in all fields', 'error');
//     } else {
//         // Add book to list
//         ui.addBookToList(book);

//         // Add to local storage
//         Store.addBook();

//         // Show success class when book is added to list
//         ui.showAlert('Book Added!', 'success');

//         // Clear input fields
//         ui.clearFields(book);
//     }

//     // prevent form continiously submitting
//     event.preventDefault();
// });

// // Event Listener for deleting book from list
// // use parent, not delete class
// document.getElementById('book-list').addEventListener('click', function (event) {

//     // Instantiate UI
//     const ui = new UI();

//     // delete book
//     ui.deleteBook(event.target);

//     // Remove from local storage
//     Store.removeBook(event.target.parentElement.previousElementSibling.textContent);

//     // Show message
//     ui.showAlert('Book Removed!', 'success');

//     event.preventDefault();
// });




class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.container');
        // Get form
        const form = document.querySelector('#book-form');
        // Insert alert
        container.insertBefore(div, form);

        // Timeout after 3 sec
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local Storage Class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function (book) {
            const ui = new UI;

            // Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
    // Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    console.log(ui);

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        // Add to LS
        Store.addBook(book);

        // Show success
        ui.showAlert('Book Added!', 'success');

        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

    // Instantiate UI
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    // Remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});