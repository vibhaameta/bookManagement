import React, { Component } from "react";
import './DeleteBook.css';
class DeleteBook extends Component{
  constructor(props){
    super(props);
    this.state = {
      savedBooks:[],
      searchTerm:'',
      searchedBooks:[]
    }
  }

  componentDidMount(){
    const booksInSession = JSON.parse(sessionStorage.getItem('addedBooks'));
    this.setState({savedBooks: booksInSession})
  }

  render(){
    const {savedBooks, searchTerm, searchedBooks} = this.state
    return(
      <div>
        <div className="topSearch"><input placeholder="Search Book by Name" onChange={(event)=>{
        this.setState({searchTerm:event.target.value})
      }}></input><button onClick={()=>{
        savedBooks.map((value)=>{
          if(value.name===searchTerm){
           searchedBooks.push(value);
           this.setState({searchedBooks})
          }
        })
      }}>Search</button></div>
     { searchedBooks.map((value)=>{
        return (
          <div className="deleteBook">
        <p>Book : {value.name}</p>
        <p>Author : {value.author}</p>
        <p>Edition : {value.edition}</p>
        <p>Price : {value.price}</p>
        {value.customer?
        <div>
        <p>Customer : {value.customer}</p>
        <p>this can not be deleted as it has been assigned to customer</p>
        </div>
        :<button onClick={()=>{
          savedBooks.splice(savedBooks.indexOf(value), 1);
          searchedBooks.splice(searchedBooks.indexOf(value), 1);
          this.setState({savedBooks, searchedBooks},()=>{
            sessionStorage.setItem('addedBooks',JSON.stringify(this.state.savedBooks))
          })  
        }}>
          Delete
          </button>}
        </div>
        )
      })}
      </div>
    )
  }
}
export default DeleteBook;