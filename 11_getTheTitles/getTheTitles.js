const books = [
    {
      title: 'Book 1',
      author: 'Author 1'
    },
    {
      title: 'Book2',
      author: 'Author 2'
    }
  ]

const getTheTitles = function(books) {
    return books.map((books => books.title))
    

};
// Do not edit below this line
module.exports = getTheTitles;
