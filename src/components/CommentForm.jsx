import { Component } from "react";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AddComment from "./AddComment.jsx";

class CommentForm extends Component {
  render() {
    console.log("CommentForm props:", this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Write your comment</Modal.Title>
        </Modal.Header>
        <Form.Label htmlFor="comment">Add your comment:</Form.Label>
        <Form.Control type="text" id="comment" />
        <Modal.Body>
          <Form.Select aria-label="Default select example">
            <option>Rate</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <AddComment asin={this.props.asin} />
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CommentForm;
