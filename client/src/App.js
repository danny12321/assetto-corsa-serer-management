import React, { Component } from "react";
import "./styles/index.scss";
import axios from "axios";
import Routes from "./routes";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    axios.post("/api");
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>

            <Header />
            <Routes />
            
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
