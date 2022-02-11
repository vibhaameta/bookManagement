import React, { Component } from "react";
import './AddBook.css';
class BookList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const books = JSON.parse(sessionStorage.getItem('addedBooks'));
    return(
        books.length?
      books.map((value)=>{
        return (
          <div className="addbook">
          <div className="addbook_Detail">
        <p>Book : {value.name}</p>
        <p>Author : {value.author}</p>
        <p>Edition : {value.edition}</p>
        <p>Price : {value.price}</p>
        {value.customer?<p>Customer : {value.customer}</p>:''}
        </div>
        </div>
        )
      }):<p>No book are added</p>
    )
  }
}
export default BookList;