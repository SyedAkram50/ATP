//Library Book Management System
//Create a Book class with title,author,pages,isAvailable
class Book{
    title;
    author;
    pages;
    isAvailable;
    constructor(title,author,pages){
        this.title=title;
        this.pages=pages;
        this.author=author;
        this.isAvailable=true;
    }
    //borrow() - Marks the book as not available
    borrow(){
        this.isAvailable=false;
    }
    //returnBook() - Marks the book as available
    returnBook(){
        this.isAvailable=true;
    }
    //getInfo() - Returns a string with book details
    getInfo(){
        return `${this.title} by ${this.author} (${this.pages} pages)`
    }
    //isLongBook() - Returns true if pages > 300
    isLongBook(){
        if(this.pages>300){
            return true
        }
        return false
    }
}
// Create at least 5 book objects
let b1=new Book("Harry Potter","J K Rowling",500)
let b2=new Book("1984","J K L",280)
let b3=new Book("The Hobbit","J R R Tolkien",320)
let b4=new Book("Tested","Pat Cummins",314)
let b5=new Book("Wings of Fire",'A P J Abdul Kalam',210)
//Display info of all books
console.log(b1.getInfo())
console.log(b2.getInfo())
console.log(b3.getInfo())
console.log(b4.getInfo())
console.log(b5.getInfo())
//Borrow 2 books and show their availability status
b3.borrow()
console.log('Avaliablity of The Hobbit:',b1.isAvailable)
b4.borrow()
console.log('Avaliablity of Tested:',b4.isAvailable)
//Return 1 book and show updated status
b4.returnBook()
console.log('Avaliablity of Tested:',b4.isAvailable)
//Count how many books are "long books"
let c=0
if(b1.isLongBook){
    c=c+1
}
if(b2.isLongBook){
    c=c+1
}
if(b3.isLongBook){
    c=c+1
}
if(b4.isLongBook){
    c=c+1
}
if(b5.isLongBook){
    c=c+1
}
console.log('Number of book which are long:',c)
//List all available books
if(b1.isAvailable){
    console.log(b1.getInfo())
}
if(b2.isAvailable){
    console.log(b2.getInfo())
}
if(b3.isAvailable){
    console.log(b3.getInfo())
}
if(b4.isAvailable){
    console.log(b4.getInfo())
}
if(b5.isAvailable){
    console.log(b5.getInfo())
}
