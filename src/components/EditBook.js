import React, { Component } from "react";
import './EditBook.css';
class EditBook extends Component{
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
     { searchedBooks.map((val, index)=>{
        return (
          <div className="updateBook">
              <input
              value={val.name}
              onChange={(val)=>{
                  searchedBooks[index].name=val.target.value;
                  this.setState({searchedBooks})
              }}></input>
              <input
              value={val.author}
              onChange={(val)=>{
                searchedBooks[index].author=val.target.value;
                this.setState({searchedBooks})
            }}
              ></input>
              <input
              value={val.edition}
              onChange={(val)=>{
                searchedBooks[index].edition=val.target.value;
                this.setState({searchedBooks})
            }}
              ></input>
              <input
              value={val.price}
              onChange={(val)=>{
                searchedBooks[index].price=val.target.value;
                this.setState({searchedBooks})
            }}
              ></input>
              <button onClick={()=>{
                  savedBooks.map((value, index)=>{
                      if(value.index===val.index){
                        savedBooks[index] = val;
                        this.setState({savedBooks}, ()=>{
                            sessionStorage.setItem('addedBooks',JSON.stringify(this.state.savedBooks))
                        })
                      }
                  })
                  searchedBooks.splice(searchedBooks.indexOf(val), 1);
              }}>Save</button>
        </div>
        )
      })}
      </div>
    )
  }
}
export default EditBook;