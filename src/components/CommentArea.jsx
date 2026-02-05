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

  deleteComment = (commentId) => {
    fetch(`${commentURL}${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OWQ4OTgwMjA2ODAwMTUwNGRjNjYiLCJpYXQiOjE3NzAyOTg3NjEsImV4cCI6MTc3MTUwODM2MX0.5HPVG6w8TCM0o7XPYaMQ5viB5Dbf_otJopgN0CeBnRA",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Commento eliminato con successo!");
          this.getComments();
        } else {
          throw new Error("Errore nell'eliminazione del commento");
        }
      })
      .catch((error) => {
        console.log("ERRORE NELL'ELIMINAZIONE DEL COMMENTO", error);
      });
  };

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
                <div key={comment._id} className="d-flex justify-content-between align-items-center mb-3 border-bottom border-1">
                  <div>
                    <h6 className="m-0 p-0">{comment.author}</h6>
                    <p className="m-0 p-0 mb-2">{comment.comment}</p>
                    <p className="m-0 p-0">
                      Rating: <strong>{comment.rate}</strong>/5
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      this.deleteComment(comment._id);
                    }}
                    type="button"
                    className="btnDelete btn btn-danger h-25"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
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
