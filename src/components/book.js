import BookInformation from './bookInformation';
import BookCompletionPercentage from './bookCompletionPercent';
import BookChapterInfo from './bookChapterInfo';

const Book = () => {
  const books = [
    {
      index: 1, category: 'Fiction', title: 'To Kill a Mockingbird', author: 'Harper Lee',
    },
    {
      index: 2, category: 'Non-Fiction', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari',
    },
    {
      index: 3, category: 'Fantasy', title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling',
    },
  ];
  return (
    books.map((book) => (
      <div className="booksContainer" key={book.index}>
        <BookInformation
          category={book.category}
          title={book.title}
          author={book.author}
        />
        <BookCompletionPercentage />
        <BookChapterInfo />
      </div>
    ))
  );
};

export default Book;
