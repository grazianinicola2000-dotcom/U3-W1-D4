import { Component } from "react";
import Button from "react-bootstrap/Button";
import CommentForm from "./CommentForm.jsx";

class AddComment extends Component {
  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={(e) => {
            this.props.openForm();
            e.stopPropagation();
          }}
        >
          ADD COMMENT
        </Button>
      </>
    );
  }
}

export default AddComment;
