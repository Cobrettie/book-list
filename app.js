// ES5 Object Oriented Programming

// Book Constructor - will handle creating actual book object
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor - set of prototype methods to add book to list, delete, show alerts on page
function UI() {}

// Add Book To List
// UI prototype set to a function, function takes in book object
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');

    // Create table row (tr) element 
    const row = document.createElement('tr');


    // Insert columns - can also use textContent =;
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X or Remove</a></td>
    `;

    // append (add) to list
    list.appendChild(row);
}

// Clear input fields
UI.prototype.clearFields = function () {
    // setting values to nothing
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (event) {
    // Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI 
    const ui = new UI();

    // Add book to list
    ui.addBookToList(book);

    // Clear input fields
    ui.clearFields(book);

    // prevent form continiously submitting
    event.preventDefault();
});