import React, { Component } from "react";
import { Col, Row } from "reactstrap";

import MovieList from "./Movie";
import AddMovie from "./AddMovie";

import Joker from "../Assets/joker.jpg";
import pacific from "../Assets/pacific.jpg";
import leo from "../Assets/300.jpg";
import sherlock from "../Assets/holmes.jpg";
import avengers from "../Assets/avengers.jpg";
import inception from "../Assets/inception.jpg";
import perfume from "../Assets/perfume.jpg";
import split from "../Assets/split.jpg";

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [
        {
          image: Joker,
          title: "Joker",
          year: "2019",
          rating: "5",
        },
        {
          image: pacific,
          title: "Pacific Rym",
          year: "2017",
          rating: "4",
        },
        {
          image: leo,
          title: "300",
          year: "2010",
          rating: "4",
        },
        {
          image: sherlock,
          title: "sherlock",
          year: "2015",
          rating: "3",
        },
        {
          image: avengers,
          title: "avengers",
          year: "2018",
          rating: "2",
        },
        {
          image: inception,
          title: "inception",
          year: "2012",
          rating: "5",
        },
        {
          image: perfume,
          title: "perfume",
          year: "2007",
          rating: "2",
        },
        {
          image: split,
          title: "split",
          year: "2018",
          rating: "4",
        },
      ],
      modal: false,
    };
  }
  toggle = () =>
    this.setState({
      modal: !this.state.modal,
    });

  addMovie = (item) => {
    let newState = this.state.movie;
    newState.push(item);
    this.setState({
      movie: newState,
    });
  };

  render() {
    return (
      <div className="container">
        <Row>
          {this.props.search
            ? this.state.movie
                .filter((el) =>
                  el.title.match(this.props.search.toLowerCase().trim())
                )
                .map((element, key) => (
                  <Col key={key} sm={3}>
                    <MovieList movie={element} />
                  </Col>
                ))
            : this.props.rate
            ? this.state.movie
                .filter((el) => {
                  return el.rating >= this.props.rate;
                })
                .map((element, key) => (
                  <Col key={key} sm={3}>
                    <MovieList movie={element} />
                  </Col>
                ))
            : this.state.movie.map((element, key) => (
                <Col key={key} sm={3}>
                  <MovieList movie={element} />
                </Col>
              ))}
        </Row>
        <Row>
          <AddMovie
            modal={this.state.modal}
            toggle={this.toggle}
            addItem={this.addMovie}
          />
        </Row>
      </div>
    );
  }
}

export default MovieContainer;
