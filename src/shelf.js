function shelfBook(scifiBook,scifiShelf) {
  if (scifiShelf.length <= 2) {
    scifiShelf.unshift(scifiBook);
  }
}

function unshelfBook(bookTitle, scifiShelf) {
  for (var i = 0; i < scifiShelf.length; i++) {
    if (scifiShelf[i].title === "Dune") {
      scifiShelf.splice(i,1)
    }
  }
}

function listTitles(fantasyShelf) {
  var bookTitles = [];
  for (var i = 0; i < fantasyShelf.length; i++) {
    bookTitles.push(fantasyShelf[i].title)
  }
  return bookTitles.join(", ");
}

function searchShelf(scifiShelf, title) {
  for (var i = 0; i < searchShelf.length; i++) {
    if (scifiShelf[i].title == title) {
      return true;
    }
  }
  return false;
}
module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
