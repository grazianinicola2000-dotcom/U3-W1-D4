import { Component } from "react";
import books from "../data/fantasy.json";
import { Container } from "react-bootstrap";

class AllTheBooks extends Component {
  // state = {
  //     activeBooks: books[0]
  // };
  render() {
    return (
      <Container className="d-flex justify-content-between flex-wrap gap-3">
        {books.map((book) => {
          return (
            <div key={book.asin} className="mb-3 card col-12 col-md-5 col-lg-3 col-xxl-2 p-0">
              <img src={book.img} className="card-img-top" alt="book_cover" />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <p className="card-title">{book.title}</p>
                  <h5 className="card-text p-0 m-0">{book.price}$</h5>
                </div>
                <div className="mt-2 d-flex justify-content-end justify-content-lg-between mx-4">
                  <button type="button" className="btnDelete btn btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                  <button type="button" className="btnCart btn btn-dark">
                    <i className="bi bi-cart-plus text-light"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    );
  }
}

export default AllTheBooks;
