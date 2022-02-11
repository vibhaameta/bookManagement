import React, { Component } from "react";
import logo from "./images/shopping-cart.png";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="navBar">
          <div className="item-flex">
            <div className="Company-name">VERIZON</div>
            <div className="HomePage_cart">
              <button></button>
            </div>
          </div>
        </div>
        <div className="Home_products_wd">
          <h3>Verizon Store</h3>
          <div className="Home_products">
            <div className="product_link">
              <Link to="/addBook" style={{ marginLeft: "20px" }}>
                Add Books
              </Link>
            </div>
            <div className="product_link">
              <Link to="/bookList" style={{ marginLeft: "20px" }}>
                Book List
              </Link>
            </div>
            <div className="product_link">
              <Link to="/deleteBook" style={{ marginLeft: "20px" }}>
                Delete Books
              </Link>
            </div>
            <div className="product_link">
              <Link to="/editBook" style={{ marginLeft: "20px" }}>
                Update Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
