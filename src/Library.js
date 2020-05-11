function createLibrary(name) {
  var shelves = {fantasy: [], fiction: [], nonFiction: []};
  var newLibrary = {name: name, shelves: shelves};
    return newLibrary;
}

function addBook(library, book) {
  var bookGenre = book.genre;
    if (bookGenre == 'fantasy') {
    library.shelves.fantasy.push(book);
  } else if (bookGenre == 'nonFiction') {
    library.shelves.nonFiction.push(book);
  } else {
    library.shelves.fiction.push(book);
  }
}

function checkoutBook(library, name) {
  for (var i = 0; i < library.shelves.fantasy.length; i++) {
    if (library.shelves.fantasy[i].title == name) {
      library.shelves.fantasy.splice(i, 1);
      return "You have now checked out "+name+" from the "+library.name;
    }
  }
  for (var i = 0; i < library.shelves.fiction.length; i++) {
    if (library.shelves.fiction[i].title == name) {
      library.shelves.fiction.splice(i, 1);
      return "You have now checked out "+name+" from the "+library.name;
    }
  }
  for (var i = 0; i < library.shelves.nonFiction.length; i++) {
    if (library.shelves.nonFiction[i].title == name) {
      library.shelves.nonFiction.splice(i, 1);
      return "You have now checked out "+name+" from the "+library.name;
    }
  }
  return "Sorry, there are currently no copies of "+name+" available at the "+library.name;
}

module.exports = {
createLibrary: createLibrary,
addBook: addBook,
checkoutBook: checkoutBook
};
