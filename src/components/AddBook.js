import React, { Component } from "react";
import './AddBook.css';
class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          index: 0,
          name: "Sapiens",
          author: "Yuval Noah herrari",
          edition: "23th",
          price: "Rs. 450",
          customer: "Prashant",
        },
        {
          index: 1,
          name: "21 Lessons of 21st century",
          author: "Yuval Noah herrari",
          edition: "17th",
          price: "Rs. 500",
          customer: "",
        },
        {
          index: 2,
          name: "The Selfish Gene",
          author: "Richard Dawkins",
          edition: "30th",
          price: "Rs. 475",
          customer: "Prashant",
        },
        {
          index: 3,
          name: "Immortals of Meluha",
          author: "Amish Tripathi",
          edition: "10th",
          price: "350",
          customer: "Vibha",
        },
        {
          index: 4,
          name: "Hit Refresh",
          author: "Satya Nadella",
          edition: "4th",
          price: "Rs. 550",
          customer: "Epsa",
        },
        {
          index: 5,
          name: "Introduction of Algorithm",
          author: "CLRS",
          edition: "40th",
          price: "Rs. 1250",
          customer: "Prashant",
        },
        {
          index: 6,
          name: "Meghdutas",
          author: "Narendra",
          edition: "9th",
          price: "Rs. 320",
          customer: "Sonu",
        },
        {
          index: 7,
          name: "Magic of thinking big",
          author: "David Schwartz",
          edition: "34th",
          price: "Rs. 390",
          customer: "",
        },
        {
          index: 8,
          name: "Factfulness",
          author: "Hans Rosling",
          edition: "14th",
          price: "Rs. 420",
          customer: "",
        },
        {
          index: 9,
          name: "Rich Dad Poor Dad",
          author: "Robert T. Kiyosaki",
          edition: "30th",
          price: "Rs. 340",
          customer: "",
        },
      ],
      addedBooks: [],
    };
  }

  getButton(value) {
    const { addedBooks } = this.state;
    return addedBooks.indexOf(value) === -1 ? (
      <button className="addBook_btn"
        onClick={() => {
          addedBooks.push(value);
          this.setState({ addedBooks }, () => {
            sessionStorage.setItem(
              "addedBooks",
              JSON.stringify(this.state.addedBooks)
            );
          });
        }}
      >
        Add Book
      </button>
    ) : (
      ""
    );
  }
  render() {
    const { books } = this.state;
    const booksInSession = JSON.parse(sessionStorage.getItem("addedBooks"));
    const bookName =
      booksInSession &&
      booksInSession.length &&
      booksInSession.map((value) => value.name);
    return books.map((value) => {
      return (
        <div className="addbook">
          <div className="addbook_Detail">
          <p>Books : {value.name}</p>
          <p>Author : {value.author}</p>
          <p>Edition : {value.edition}</p>
          <p>Price : {value.price}</p>
          {value.customer ? <p>Customer : {value.customer}</p> : ""}
          {(bookName &&
            bookName.length &&
            bookName.indexOf(value.name) === -1) ||
          !bookName
            ? this.getButton(value)
            : ""}
          </div>
        </div>
      );
    });
  }
}
export default AddBook;
