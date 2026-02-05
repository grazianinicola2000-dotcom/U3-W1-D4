import { Component } from "react";
import Button from "react-bootstrap/Button";
import CommentForm from "./CommentForm.jsx";

class AddComment extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={(e) => {
            this.props.closeCommentsModal();
            e.stopPropagation();
            this.setState({ show: true });
          }}
        >
          ADD COMMENT
        </Button>

        {this.state.show && <CommentForm asin={this.props.asin} show={this.state.show} onHide={() => this.setState({ show: false })} />}
      </>
    );
  }
}

export default AddComment;
