// ES5 Object Oriented Programming

// Book Constructor - will handle creating actual book object
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor - set of prototype methods to add book to list, delete, show alerts on page
function UI() {}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (event) {
    // Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(title, author, isbn);
    console.log(book);

    // prevent form continiously submitting
    event.preventDefault();
});