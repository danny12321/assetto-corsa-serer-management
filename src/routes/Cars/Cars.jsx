import React, { Component } from "react";
import MyContext from '../../MyContext';

import SelectCar from './SelectCar';
import AddCar from './AddCar';
import SelectedCars from './SelectedCars';

const Store = window.require('electron-store');
const store = new Store();

class Cars extends Component {

  render() {
    const { cars, carsToSelect } = this.props.context;
    let { selectedCars } = this.props.context;
    const ac_path = store.get('ac_path');

    console.log(carsToSelect)
    return (
      <div className="route cars">

        <div className="flex nowrap cars__container">
          <SelectCar
            cars={cars}
            carsToSelect={carsToSelect}
            update={(car, value) => this.props.context.setCarsToSelect(car, value)}
          />

          <AddCar
            ac_path={ac_path}
            carsToSelect={carsToSelect}
            add={(car, skin) => {
              selectedCars.push({ name: car.name, skin });
              this.props.context.setSelectedCars(selectedCars);
            }}
          />

          <SelectedCars
            ac_path={ac_path}
            selectedCars={selectedCars}
            remove={index => {
              selectedCars.splice(index, 1);
              this.props.context.setSelectedCars(selectedCars);
            }}
          />
        </div>



        {/* <div className="flex">
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
        </div> */}

      </div>
    );
  }
}


export default props => (
  <MyContext.Consumer>
    {context => <Cars {...props} context={context} />}
  </MyContext.Consumer>
)