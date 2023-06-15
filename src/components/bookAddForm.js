const BookAddForm = () => (
  <div className="bookFormDiv">
    <h3>ADD NEW BOOK</h3>
    <form className="formFields">
      <input className="bookTtlInp" type="text" id="inputBookName" placeholder="Book title" />
      <select className="bookCateg" type="dropdown" id="inputBookName" placeholder="Category">
        <option value="action">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="fantacy">Fantasy</option>
      </select>
      <button className="formBtn" type="submit" id="inputBookName"> ADD BOOK </button>
    </form>
  </div>
);

export default BookAddForm;
