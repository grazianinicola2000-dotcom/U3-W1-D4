import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
    showComments: false,
  };

  render() {
    const { searched, img, title, price, asin } = this.props;

    return (
      <div
        onClick={() => {
          this.setState({ selected: !this.state.selected, showComments: true });
        }}
        className={`${searched} mb-3 card col-12 col-md-5 col-lg-3 col-xxl-2 p-0 ${this.state.selected ? "border border-5 border-danger" : ""}`}
      >
        <img src={img} className="card-img-top" alt="book_cover" />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <p className="card-title">{title}</p>
            <h5 className="card-text p-0 m-0">{price}$</h5>
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
        {this.state.selected && <CommentArea asin={asin} show={this.state.showComments} hide={() => this.setState({ showComments: false })} />}
      </div>
    );
  }
}

export default SingleBook;
