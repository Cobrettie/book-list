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
    console.log(book);
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

    // prevent form continiously submitting
    event.preventDefault();
});