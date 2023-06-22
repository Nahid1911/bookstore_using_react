import { useSelector } from 'react-redux';
import BookInformation from './bookInformation';
import BookCompletionPercentage from './bookCompletionPercent';
import BookChapterInfo from './bookChapterInfo';

const Book = () => {
  const books = useSelector((store) => store.books.bookList);

  return (
    books.map((book) => (
      <div className="booksContainer" key={book.item_id + 1}>
        <BookInformation
          category={book.category}
          title={book.title}
          author={book.author}
          id={book.item_id}
        />
        <BookCompletionPercentage />
        <BookChapterInfo />
      </div>
    ))
  );
};

export default Book;
