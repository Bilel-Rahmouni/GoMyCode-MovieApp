import React, { Component, Fragment } from "react";
import "./MovieList.css";
import Ratings from "./Ratings";

import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class MovieList extends Component {
  render() {
    return (
      <Fragment>
        <Card className="card-container">
          <div className="saf">
            <Ratings rate={this.props.movie.rating} />
          </div>

          <CardImg top src={this.props.movie.image} alt="Card image cap" />
          <CardBody>
            <CardTitle className="card-title">
              {this.props.movie.title}
            </CardTitle>
            <CardSubtitle className="card-year">
              {this.props.movie.year}
            </CardSubtitle>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

export default MovieList;
