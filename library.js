let myLibrary = []
const bookList = document.getElementById('book-list')
const add = document.getElementById('add')
const bookForm = document.getElementById('book-form')
const submitBook = document.getElementById('submit')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function() {
        return(`${this.title}, by ${this.author} has ${this.pages} pages, this book ${read ? 'has been read' : 'has not been read'}`)
    }
}

function addToLibrary() {
    const formTitle = document.getElementById('form-title').value
    const formPages = document.getElementById('form-pages').value
    const formAuthor = document.getElementById('form-author').value
    const newBook = new Book(formTitle, formAuthor, formPages)
    myLibrary.push(newBook)
}

function displayBooks(arr){
    bookList.innerHTML = ''
    arr.forEach(book => {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(`${book.title}`));
        bookList.appendChild(li)
    })
}

add.addEventListener('click', ()=> {
    bookForm.style.display = "flex"
})

submitBook.addEventListener('click', (e)=> {
    e.preventDefault()
    addToLibrary()
    displayBooks(myLibrary)
})