import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import AddComment from "./AddComment";
import Spinner from "react-bootstrap/Spinner";
import CommentForm from "./CommentForm.jsx";

const commentURL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
    close: true,
    loading: true,
    showForm: false,
  };

  getComments = () => {
    fetch(`${commentURL}${this.props.asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OWQ4OTgwMjA2ODAwMTUwNGRjNjYiLCJpYXQiOjE3NzAyOTg3NjEsImV4cCI6MTc3MTUwODM2MX0.5HPVG6w8TCM0o7XPYaMQ5viB5Dbf_otJopgN0CeBnRA",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      .then((data) => {
        this.setState({
          comments: data,
          loading: false,
        });
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  componentDidMount() {
    this.getComments();
  }
  render() {
    return (
      <>
        <Modal show={this.props.show && !this.state.showForm} onHide={this.props.hide} backdrop="static" keyboard={false} onClick={(e) => e.stopPropagation()}>
          <Modal.Header closeButton>
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.loading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {this.state.comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <h6>{comment.author}</h6>
                  <p>{comment.comment}</p>
                  <p>{comment.rate}/5</p>
                </div>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <AddComment asin={this.props.asin} openForm={() => this.setState({ showForm: true })} />
          </Modal.Footer>
        </Modal>
        <CommentForm asin={this.props.asin} show={this.state.showForm} onHide={() => this.setState({ showForm: false })} />
      </>
    );
  }
}
export default CommentArea;
