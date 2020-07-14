//this should be a private variable in the BookStore Class
//let listOfAllKnownAuthors = []

class BookStore
{
    constructor(name, address, owner)
    {
        this._name = name;
        this._address = address;
        this._owner = owner;
        this._booksAvailable = [];
        this._totalCopiesOfAllBooks = 0;

        //listOfAllKnownAuthors should be in the bookstore class
        this._listOfAllKnownAuthors =[];
        //NumTitles initially not defined, now added
        this._NumTitles = 0;
    }

    authorKnown(authorName)
    {
        //authorKnown should return author index in listOfAllKnownAuthors
        var foundThem = null;
        for (var pos = 0; pos < this._listOfAllKnownAuthors.length; pos++)
        {
            if (authorName === this._listOfAllKnownAuthors[pos])
            {
                foundThem = pos; //sets foundThem to the index position
            }
        }
        return foundThem; //return position
    }


    addBook(bookInstance, copies)
    {
        //stops the function if the number of copies added is an illegal number, or not a number
        if ( isNaN(copies) || copies <= 0){
          console.log("Invalid number of copies!");
          return;
        }
        //continues if valid

        var positionOfBook = this.checkForBook(bookInstance);
        if (positionOfBook != null)
        {
             var foundBook = this._booksAvailable[positionOfBook];
             foundBook.copies += copies;
             console.log("Added " + copies + " copies of " + foundBook.book.title); //foundBook.book.title

             //new authors only added when book is not found in booksAvailable
             //this._listOfAllKnownAuthors.push(foundBook.book.author);
        }
        else
        {
             var bookCopies = {
                 book: bookInstance,
                 copies: copies
             };
             this._booksAvailable.push(bookCopies);
             //add the new book Author
             this._listOfAllKnownAuthors.push(bookInstance.author);
             //increment the number of titles
             this._NumTitles += 1;
             console.log("Added " + copies + " copies of a new book: " + bookInstance.title);//bookInstance.title
        }

        this._totalCopiesOfAllBooks += copies;
    }

    sellBook(bookInstance, numberSold)
    {

        //stops the function if the number of copies added is an illegal number, or not a number
        if (numberSold <= 0){
          console.log("invalid number of copies!");
          return;
        }
        //continues if valid

        var positionOfBook = this.checkForBook(bookInstance);
        if (positionOfBook != null)
        {
            var foundBook = this._booksAvailable[positionOfBook];
            if (numberSold > this._booksAvailable[positionOfBook].copies)
            {
                console.log("Not enough copies of " + foundBook.book.title + " to sell"); //foundBook.book.title
            }
            else
            {
                foundBook.copies -= numberSold;
                if (foundBook.copies === 0)
                {
                    //this._booksAvailable.pop(positionOfBook);
                    //this._listOfAllKnownAuthors.pop(foundAuth);
                    //Pop doesnt take in arguments, it removes the last items
                    //use splice method instead
                    this._booksAvailable.splice(positionOfBook,1);
                    this._NumTitles -= 1;
                    var foundAuth = this.authorKnown(foundBook.book.author);
                    this._listOfAllKnownAuthors.splice(foundAuth,1);
                }
                this._totalCopiesOfAllBooks -= numberSold;
                console.log("Sold " + numberSold + " copies of " + foundBook.book.title); //foundBook.book.title
            }
        }
        else
        {
            console.log(bookInstance + " not found");
        }
    }

    checkForBook(bookInstance)
    {
        //should use a for loop since the length of booksAvailable is known
        /*
        var currBookNum = 0;
        while (currBookNum < this._booksAvailable.length)
        {
            if (this._booksAvailable[currBookNum].book.isTheSame(bookInstance))
            {
                return currBookNum;
            }
            //logical error, should not have an else statement or will only check for the 1st book
            else
            {
                return null;
            }
            currBookNum += 1;
        }
        return null;
        */

        //much simpler this way
        for (var currBookNum = 0; currBookNum < this._booksAvailable.length; currBookNum++) {
          if (this._booksAvailable[currBookNum].book.isTheSame(bookInstance)){
            return currBookNum;
          }
          //Should not have an else statement or will only check for the 1st book
        }
        //returns null if the for loop doesnt find the book
        return null;
    }

    get name()
    {
        return this._name;
    }

    set name(newName)
    {
        this._name = newName;
    }

    get address()
    {
        return this._address;
    }

    set address(newAddress)
    {
        this._address = newAddress;
    }

    get owner()
    {
        return this._owner;
    }

    //set owner, not set address
    set owner(newOwner)
    {
        this._owner = newOwner;
    }

    //new get method for listOfAllKnownAuthors
    get listOfAllKnownAuthors()
    {
        return this._listOfAllKnownAuthors;
    }

}

class Book
{
    constructor(title, author, publicationYear, price)
    {
        this._title = title;
        this._author = author;
        this._publicationYear = publicationYear;
        this._price = price;

        //listOfAllKnownAuthors should belong to the bookstore class
        /*
        if (this.authorKnown(this._author) === false)
        {
            listOfAllKnownAuthors.push(this._author)
        }
        */
    }

    isTheSame(otherBook)
    {
        //book's identity should be identified using their title, not price
        return otherBook.title === this._title;
    }

    //this method should belong to the bookstore class
    /*
    authorKnown(authorName)
    {
        var foundThem = false;
        for (var pos = 0; pos < listOfAllKnownAuthors.length; pos++)
        {
            if (authorName === listOfAllKnownAuthors[pos])
            {
                foundThem = true;
            }
        }
        return foundThem;
    }
    */

    get title()
    {
        return this._title;
    }

    get author()
    {
        return this._author;
    }

    get publicationYear()
    {
        return this._publicationYear;
    }

    get price()
    {
        return this._price;
    }

    toString()
    {
        return this.title + ", " + this.author + ". " + this.publicationYear + " ($" + this.price + ")";
    }
}

// Book details courtesy of Harry Potter series by J.K. Rowling
var cheapSpellBook = new Book("The idiot's guide to spells","Morlan",2005,40);
var flourishAndBlotts = new BookStore("Flourish & Blotts", "North side, Diagon Alley, London, England", "unknown");
var monsterBook = new Book("The Monster Book of Monsters", "Edwardus Lima", 1978, 40);

//no need to create new bookInstance, use back the old MonsterBook Instance
//var monsterBookToSell = new Book("The Monster Book of Monsters", "Edwardus Lima", 1978, 40);
var spellBook = new Book("The Standard Book of Spells, Grade 4", "Miranda Goshawk", 1921, 80);

flourishAndBlotts.addBook(cheapSpellBook,1000);
flourishAndBlotts.addBook(monsterBook, 500);
//using back old book instance
flourishAndBlotts.sellBook(monsterBook, 200);
flourishAndBlotts.addBook(spellBook, 40);
flourishAndBlotts.addBook(spellBook, 20);
flourishAndBlotts.sellBook(spellBook, 15);
flourishAndBlotts.addBook(monsterBook, -30);//invalid but handled by the function
flourishAndBlotts.sellBook(monsterBook, 750);

console.log("Authors known: " + flourishAndBlotts.listOfAllKnownAuthors);
