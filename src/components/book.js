import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/books/booksSlice';
import BookInformation from './bookInformation';
import BookCompletionPercentage from './bookCompletionPercent';
import BookChapterInfo from './bookChapterInfo';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books.bookList);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
