
function createBook(title, author, publishedYear) {
    const book = {
        title,
        author,
        publishedYear: new Date(publishedYear),
        getSummary() {
            return `${this.title} was published by the Author ${this.author} in the year ${this.publishedYear.getFullYear()}`;
        }
    };
    return book;
}


function createEbook(title, author, publishedYear, fileSize) {
    const book = createBook(title, author, publishedYear);
    return {
        ...book,
        fileSize,
        getSummary() {
            return `${book.getSummary()} File size: ${this.fileSize}MB`;
        }
    };
}


const book1 = createBook("The Da Vince Code", "Dan", 2003);
const book2 = createBook("The Girl on the Train", "Paula", 2015);
const book3 = createEbook("Harry Potter", "J.K. Rowling", 1990, 5.7);
const book4 = createEbook("It Ends with Us", "Hoover", 2016, 2.5);


console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());
console.log(book4.getSummary());
