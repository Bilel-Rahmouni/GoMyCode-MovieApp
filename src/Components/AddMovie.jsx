import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {
        image: "",
        title: "",
        year: "",
        rating: "",
      },
    };
  }
  changeHandler = (e) => {
    this.setState({
      movie: {
        ...this.state.movie,
        [e.target.name]: e.target.value,
      },
    });
  };
  click = () => {
    this.props.addItem(this.state.movie);
    this.props.toggle();
  };
  render() {
    return (
      <div>
        <Button className="add-btn" color="success" onClick={this.props.toggle}>
          +
        </Button>
        <Modal isOpen={this.props.modal}>
          <ModalHeader>New Movie</ModalHeader>
          <ModalBody>
            <Label for="Movie Name">Adding Movie</Label>
            <Input
              type="text"
              name="image"
              placeholder="Enter movie image..."
              onChange={this.changeHandler}
            />
            <Input
              type="text"
              name="title"
              id="movie"
              placeholder="Enter movie title..."
              onChange={this.changeHandler}
            />
            <Input
              type="text"
              name="year"
              id="movie"
              placeholder="Enter movie year..."
              onChange={this.changeHandler}
            />
            <Input
              type="text"
              name="rating"
              id="movie"
              placeholder="Enter movie rating..."
              onChange={this.changeHandler}
            />
          </ModalBody>
          <ModalFooter className="buttons">
            <Button
              className="submit-btn"
              color="success"
              onClick={this.click}

              // onClick={() => this.props.toggle()}
            >
              Submit
            </Button>{" "}
            <Button
              className="cancel-btn"
              color="danger"
              onClick={() => this.props.toggle()}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;
