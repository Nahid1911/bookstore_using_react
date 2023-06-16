const BookAddForm = () => (
  <div className="bookFormDiv">
    <h3>ADD NEW BOOK</h3>
    <form className="formFields">
      <input className="bookTtlInp" type="text" id="inputBookName" placeholder="Book title" />
      <input className="bookCateg" type="dropdown" id="inputBookName" placeholder="Author" />
      <button className="formBtn" type="submit" id="inputBookName"> ADD BOOK </button>
    </form>
  </div>
);

export default BookAddForm;
