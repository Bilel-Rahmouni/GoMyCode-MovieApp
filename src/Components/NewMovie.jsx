import React, { Component } from "react";
import Joker from "../Assets/joker.jpg";

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newmovie: [
        {
          image: Joker,
          title: "Joker",
          year: "2019",
          rating: "5",
        },
      ],
      visible: false,
      picture: "",
      title: "",
      date: "",
    };

    newMovie = () => {
      this.setState({
        addedmovie: [
          ...this.state.newmovie,
          {
            picture: this.state.picture,
            title: this.state.title,
            date: this.state.date,
            star: this.state.star,
          },
        ],
      });
    };

    addMovie = (event) => {
      this.setState({
        visible: true,
      });
    };

    closeMovie = (event) => {
      this.setState({
        visible: false,
      });
    };

    render();
    return <div></div>;
  }
}

export default NewMovie;
