import React, { Component } from "react";
import "./styles/index.scss";
import Routes from "./routes";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import MyContext from './MyContext';
import axios from 'axios';
import Loading from "./components/Loading";

class MyProvider extends Component {
  state = {
    settings: null,
    tracks: null,
    cars: null,

  }

  componentDidMount() {
    this.fetchSettings();
    this.fetchTracks();
    this.fetchCars();
  }

  fetchSettings() {
    axios.post("/api/settings/fetchAll").then(res => {
      this.setState({ settings: res.data });
    });
  }

  fetchTracks() {
    axios.post("/api/track/fetchAll").then(res => {
      this.setState({ tracks: res.data });
    });
  }

  fetchCars() {
    axios.post("/api/cars/fetchAll").then(res => {
      this.setState({ cars: res.data });
    });
  }


  save() {
    console.log("SAVE")
  }

  render() {
    return (
      <React.Fragment>
        <MyContext.Provider value={{
          settings: this.state.settings,
          tracks: this.state.tracks,
          cars: this.state.cars,

          setSettings: settings => this.setState({ settings }),

          save: this.save.bind(this)
        }}>

          {this.props.children}
        </MyContext.Provider>
      </React.Fragment>

    )
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <MyProvider>
          <BrowserRouter>
            <MyContext.Consumer>
              {(context) => (
                !context.settings || !context.tracks || !context.cars ?

                  <Loading />
                  :

                  <React.Fragment>

                    <Header />
                    <Routes />

                  </React.Fragment>

              )}
            </MyContext.Consumer>

          </BrowserRouter>
        </MyProvider>
      </div>
    );
  }
}

export default App;
