import { Route, Routes } from 'react-router-dom';
import './App.css';
import BooksContainer from './components/books';
import Categories from './components/categories';
import NavBar from './components/navBar';

function App() {
  return (
    <>
      <div>
        <NavBar />
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
