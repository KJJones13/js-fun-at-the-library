function createTitle(title) {
  return (`The ${title}`);
}

function buildMainCharacter(name, age, pronouns) {
  var character = {name: name, age: age, pronouns: pronouns}
  return character;
}

function saveReview(qoute, reviews) {
  if (!(reviews.includes(qoute)))
  reviews.push(qoute)
}

function calculatePageCount(bookTitle) {
 var bookPageCount = bookTitle.length * 20;
  return bookPageCount;
}

function writeBook(title, mainCharacter, genre) {
  var pageCount = calculatePageCount(title)
  var book = {title: title, mainCharacter: mainCharacter, pageCount: pageCount, genre: "fantasy"}
    return book;
}

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount * .75;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
