import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import BooksContainer from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <>
      <div>
        <nav className="navBar">
          <h1>Bookstore CMS</h1>
          <ul className="navUl">
            <li className="naveLi">
              <Link to="/">Books</Link>
            </li>
            <li className="naveLi">
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="appDiv">
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
