import React, { Component } from "react";
import Paper from "../../components/Paper";
import MyContext from '../../MyContext';
import Input from '../../components/Input'

const Store = window.require('electron-store');
const store = new Store();

class Cars extends Component {
  state = {
    search: ''
  }

  handleSelectedCars(car) {
    let { selectedCars } = this.props.context;

    if (selectedCars[car.name]) {
      delete selectedCars[car.name];
    } else {
      selectedCars[car.name] = {
        name: car.name,
        skins: {}
      }
    }

    this.props.context.setSelectedCars(selectedCars)
  }

  render() {
    const { cars, selectedCars } = this.props.context;
    const { search } = this.state

    return (
      <div className="cars">

      <Input 
            type="text"
            label={"Search"}
            value={search}
            onChange={e => this.setState({ search: e.target.value })}
      />

        {/* <div className="form-group">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => this.setState({ search: e.target.value })}
          />
        </div> */}

        <div className="flex">
          {cars.map(car => {
            if (!car.name.includes(this.state.search)) return null

            const isSelected = selectedCars[car.name] ? true : false;

            return (
              <div className="cars__car" key={car.name} onClick={() => this.handleSelectedCars(car)}>

                <Paper
                  isSelected={isSelected}
                  title={car.name}
                >
                  <div className="cars__car__wrapper">
                    <img
                      src={`${store.get('ac_path')}/content/cars/${car.name}/skins/${car.skins[0]}/preview.jpg`}
                      alt="preview"
                      width="100%"
                      onError={e => {
                        e.target.src = "https://cheaphotels4uk.com/wp-content/uploads/2017/12/race-wide.jpg"
                      }}
                    />
                  </div>
                </Paper>
              </div>
            );
          })}
        </div>

      </div>
    );
  }
}


export default props => (
  <MyContext.Consumer>
    {context => <Cars {...props} context={context} />}
  </MyContext.Consumer>
)