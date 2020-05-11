class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
greetPatron(name, isMorning) {
  if (isMorning == true) {
    return "Good morning, "+name+"!";
  }
    return "Hello, "+name+"!";
}

findBook(title) {
  var genreOptions = Object.keys(this.library.shelves)
  for (var i = 0; i < genreOptions.length; i++) {
    var shelfGenre = genreOptions[i]
    var booksOnShelf = this.library.shelves[shelfGenre]
  for (var j = 0; j < booksOnShelf.length; j++) {
      if (booksOnShelf[j].title === title) {
        booksOnShelf.splice(j, 1)
        return `Yes, we have ${title}`;
      }
    }
  }
  return `Sorry, we do not have ${title}`;
  }

calculateLateFee(num) {
   return Math.ceil(num) * 0.25;
  }
}

module.exports = Librarian;
