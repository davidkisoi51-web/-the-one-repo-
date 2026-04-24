const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
// STEP 2: Manipulating Existing Elements
// 1. Select the DOM element with the id of 'header'
const bookStoreTitle = document.getElementById('header');

// 2. Change the textContent to the name property of the bookStore variable
bookStoreTitle.textContent = bookStore.name;


// STEP 3: Book Elements
// (Note: You likely need to select the existing bookList element from the HTML first)
// Check your index.html, it usually has an id of "book-list"
const bookList = document.getElementById('book-list'); 

// Loop through the books array inside the bookStore object
bookStore.books.forEach(book => {
    
    // 1. Create elements for each book
    const bookContainer = document.createElement('li');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookImage = document.createElement('img');

    // 2. Change the textContent and src to match the book object
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    
    // *Heads up: check your data file to see if the property is called 'image', 'imageUrl', or 'url'
    bookImage.src = book.imageUrl; 

    // 3. Append book elements to the bookContainer
    bookContainer.append(bookTitle, bookAuthor, bookImage);

    // 4. Append the fully built bookContainer to the main bookList on the page
    bookList.append(bookContainer);
});
