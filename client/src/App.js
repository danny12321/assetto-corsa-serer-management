import React, { Component } from "react";
import "./styles/index.scss";
import Routes from "./routes";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

class App extends Component {

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
