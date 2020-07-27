import React, { Component } from "react";
import MovieContainer from "./Components/MovieContainer";
import "./App.css";
import SearchMovie from "./Components/Search";
import Ratings from "./Components/Ratings";
import Withloading from "./Components/WithLoading";

const Content = Withloading(MovieContainer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchWords: "",
      star: "",
      loading: true,
    };
  }
  searchHandler = (event) => this.setState({ searchWords: event.target.value });
  handlchange = (newStar) => this.setState({ star: newStar });

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 20000);
  }

  render() {
    return (
      <>
        <div className="nav-search">
          <SearchMovie look={this.searchHandler} />
          <div className="stars">
            <Ratings rate={this.state.star} onChange={this.handlchange} />
          </div>
        </div>

        <div>
          <Content
            isLoading={this.state.loading}
            rate={this.state.star}
            search={this.state.searchWords}
          />
        </div>
      </>
    );
  }
}
export default App;
