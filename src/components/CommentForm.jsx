import { Component } from "react";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const commentURL = "https://striveschool-api.herokuapp.com/api/comments/";

const commentData = {
  comment: "",
  rate: "",
};

class CommentForm extends Component {
  state = {
    commentData: commentData,
  };

  render() {
    console.log("CommentForm props:", this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} backdrop="static" keyboard={false} onClick={(e) => e.stopPropagation()}>
        <Modal.Header closeButton>
          <Modal.Title>Write your comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              fetch(commentURL, {
                method: "POST",
                body: JSON.stringify({
                  ...this.state.commentData,
                  elementId: this.props.asin,
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OWQ4OTgwMjA2ODAwMTUwNGRjNjYiLCJpYXQiOjE3NzAyOTg3NjEsImV4cCI6MTc3MTUwODM2MX0.5HPVG6w8TCM0o7XPYaMQ5viB5Dbf_otJopgN0CeBnRA",
                },
              })
                .then((response) => {
                  if (response.ok) {
                    alert("commento salvato con successo!");
                    this.setState({
                      commentData: commentData,
                    });
                  } else {
                    throw new Error("errore nel salvataggio del commento");
                  }
                })
                .catch((err) => {
                  console.log("ERRORE NEL SALVATAGGIO", err);
                });
            }}
          >
            <Form.Label htmlFor="comment">Add your comment:</Form.Label>
            <Form.Control
              className="mb-4"
              type="text"
              id="comment"
              value={this.state.commentData.comment}
              onChange={(e) => {
                console.log("NAME CAMBIATO", e.target.value);

                this.setState({
                  commentData: {
                    ...this.state.commentData,
                    comment: e.target.value,
                  },
                });
              }}
              required
            />
            <Form.Select
              value={this.state.commentData.rate}
              onChange={(e) => {
                console.log("NAME CAMBIATO", e.target.value);

                this.setState({
                  commentData: {
                    ...this.state.commentData,
                    rate: e.target.value,
                  },
                });
              }}
              aria-label="Default select example"
            >
              <option>Rate</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
            <Button className="mt-3" type="submit" variant="dark">
              ADD
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default CommentForm;
