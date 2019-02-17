import React, { Component } from "react";
import "./styles/index.scss";
// import "./styles/index.css";
import Routes from "./routes";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import MyContext from './MyContext';
import axios from 'axios';
import Loading from "./components/Loading";

const fetch = require('./fetch')

const { remote, ipcRenderer } = window.require('electron')
const mainProcess = remote.require('./electron')

const Store = window.require('electron-store');
const store = new Store();

class MyProvider extends Component {

  state = {
    settings: fetch.settings.fetchAll(),
    tracks: fetch.tracks.fetchAll(),
    cars: fetch.cars.fetchAll(),
    selectedCars: fetch.cars.fetchSelected(),
    selectedTrack: null,
    serverData: [],
    serverOn: false
  }

  componentDidMount() {
    ipcRenderer.on('serverUpdate', (event, data) => {
      this.setState({ serverData: [...this.state.serverData, data] })
    })
  }

  save() {
    const data = {
      settings: this.state.settings,
      selectedCars: this.state.selectedCars,
    }

    axios.post('/api/save', data).then(res => {
      alert('Save succesfull')
    })
  }

  render() {
    return (
      <React.Fragment>
        <MyContext.Provider value={{
          settings: this.state.settings,
          tracks: this.state.tracks,
          cars: this.state.cars,

          selectedCars: this.state.selectedCars,
          selectedTrack: this.state.selectedTrack,

          serverData: this.state.serverData,
          serverOn: this.state.serverOn,

          setServerOn: serverOn => this.setState({ serverOn }),

          setSettings: settings => {
            this.setState({ settings })
            fetch.settings.save();
          },

          setSelectedCars: selectedCars => {
            this.setState({ selectedCars })
            fetch.settings.save();
          },
          
          setSelectedTrack: track => {
            this.setState({ selectedTrack: track.name })
          },

        }}>

          {this.props.children}
        </MyContext.Provider>
      </React.Fragment>

    )
  }
}

class App extends Component {

  selectPath() {
    const path = mainProcess.selectDirectory({
      title: "Select the Assetto Corsa installation folder",
      properties: 'openDirectory '
    })

    store.set('ac_path', path);
    this.forceUpdate()
  }

  renderSelectPath() {
    return (
      <div>
        <button onClick={this.selectPath.bind(this)}>Select path of Assetto Corsa</button>
      </div>
    )
  }

  renderApp() {

    return (
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
    )
  }

  render() {
    if (store.get('ac_path')) return this.renderApp()
    else return this.renderSelectPath();
  }
}

export default App;
