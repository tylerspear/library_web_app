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
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false

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
        if(book.read){
            li.classList.add('read')
        }
        //set a data attr on the element that corresponds to the arr position
        li.setAttribute('data-index', index)
        li.innerHTML = `<span class="title">${book.title}</span>
                        <span class="author">By: ${book.author}</span>
                        <button class="btn-read">Read?</button>
                        <button class="btn-remove">Remove</button>
                        `
        bookList.appendChild(li)
    })
    //add event listener to the delete button to remove element if clicked
    deleteListener()
    //add event listener for read buttons
    readListener()
}

function deleteListener(){
    const deleteBtns = document.querySelectorAll('.btn-remove')
    for(let i=0; i<deleteBtns.length; i++){
        deleteBtns[i].addEventListener('click', (e)=> {
            const index = e.target.parentElement.dataset.index
            myLibrary.splice(index, 1)
            displayBooks(myLibrary)
        })
    }
}

function readListener(){
    const readBtns = document.querySelectorAll('.btn-read')
    for(let i=0; i<readBtns.length; i++){
        readBtns[i].addEventListener('click', (e)=> {
            e.target.parentElement.classList.add('read')
            const index = e.target.parentElement.dataset.index
            myLibrary[index].read = true
        })
    }
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


//Adding some test books to update CSS
const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '377')
const fotr = new Book('The Fellowship of the Ring', 'JRR Tolkien', '500')
const twoTowers = new Book('The Two Towers', 'JRR Tolkien', '400')
const rotk = new Book('The Return of the King', 'JRR Tolkien', '650')
myLibrary.push(theHobbit, fotr, twoTowers, rotk)
displayBooks(myLibrary)
