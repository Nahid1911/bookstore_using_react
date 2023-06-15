/* eslint-disable react/prop-types */
const BookInformation = ({ category, title, author }) => (
  <div className="bookInformation">
    <span className="bookType">{category}</span>
    <h3 className="bookTtl">{title}</h3>
    <p className="author">{author}</p>
    <ul className="comntRmvEdt">
      <li className="comntRmvEdtLi">Comments</li>
      <li className="comntRmvEdtLi">Remove</li>
      <li>Edit</li>
    </ul>
  </div>
);

export default BookInformation;
