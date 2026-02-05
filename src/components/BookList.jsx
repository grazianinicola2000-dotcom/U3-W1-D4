import { Container } from "react-bootstrap";
import SingleBook from "./SingleBook";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    const { books } = this.props;
    return (
      <>
        <Container>
          <Form className="d-flex my-3 gap-2 mx-5">
            <Form.Group className="w-100" controlId="formBasicEmail">
              <Form.Control
                value={this.state.searchQuery}
                onChange={(e) => {
                  this.setState({ searchQuery: e.target.value });
                  console.log(this.state.searchQuery);
                }}
                type="text"
                placeholder="Search..."
              />
            </Form.Group>
          </Form>
        </Container>
        <Container className="d-flex justify-content-between flex-wrap gap-3">
          {books
            .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
            .map((book) => (
              <SingleBook key={book.asin} asin={book.asin} img={book.img} title={book.title} price={book.price} />
            ))}
        </Container>
      </>
    );
  }
}

export default BookList;
