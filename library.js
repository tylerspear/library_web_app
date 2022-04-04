// initial array to store book objects
let myLibrary = []
//ul to store book titles
const bookList = document.getElementById('book-list')
//Add book button
const add = document.getElementById('add')
//the form to add a new book
const bookForm = document.getElementById('book-form')
//confirmation button to add book
const submitBook = document.getElementById('submit')

//Book object constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages

    this.info = function() {
        return(`${this.title}, by ${this.author} has ${this.pages} pages, this book ${read ? 'has been read' : 'has not been read'}`)
    }
}


function addToLibrary() {
    //get the values from the form
    const formTitle = document.getElementById('form-title').value
    const formPages = document.getElementById('form-pages').value
    const formAuthor = document.getElementById('form-author').value

    //create new object from the values
    const newBook = new Book(formTitle, formAuthor, formPages)

    //append to array
    myLibrary.push(newBook)
}

function displayBooks(arr){
    //clear out the UL to prevent duplicate rendering to the DOM
    bookList.innerHTML = ''

    //loop through obj array and create li for each element and append to ul
    arr.forEach((book,index) => {
        let li = document.createElement('li')
        //set a data attr on the element that corresponds to the arr position
        li.setAttribute('data-index', index)
        li.innerHTML = `<span class="title">${book.title}</span>
                        <span class="author">${book.author}</span>
                        <button class="remove">Remove</button>`
        // li.appendChild(document.createTextNode(`${book.title}`));
        bookList.appendChild(li)
    })
}

//on btn click, display the form
add.addEventListener('click', ()=> {
    bookForm.style.display = "flex"
})

//on confirmation, grab form values, append to array, and then render the array elements
submitBook.addEventListener('click', (e)=> {
    e.preventDefault()
    addToLibrary()
    bookForm.style.display = "none"
    document.getElementById('form-title').value = ''
    document.getElementById('form-pages').value = ''
    document.getElementById('form-author').value = ''
    displayBooks(myLibrary)
})