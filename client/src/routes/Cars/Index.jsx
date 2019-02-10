import React, { Component } from "react";
import Paper from "../../components/Paper";
import MyContext from '../../MyContext';

class Cars extends Component {
  state = {
    selectedCars: {}
  };


  handleSelectedCars(car) {
    let { selectedCars } = this.state;

    if (selectedCars[car.name]) {
      delete selectedCars[car.name];
    } else {
      selectedCars[car.name] = {
        name: car.name,
        skins: {}
      }
    }

    this.setState({ selectedCars })
  }

  handleSetSkin(car, skin, amount) {
    let { selectedCars } = this.state;

    if (amount <= 0) {
      delete selectedCars[car.name].skins[skin];
    } else {
      selectedCars[car.name].skins[skin] = amount
    }

    this.setState({ selectedCars })
  }

  render() {
    const { selectedCars } = this.state;
    const { cars } = this.props.context;

    return (
      <div className="cars grid">
        {cars.map(car => {
          const isSelected = selectedCars[car.name] ? true : false;

          return (
            <div key={car.name} className="grid__item">

              <Paper
                isSelected={isSelected}
                title={
                  <React.Fragment>
                    <input type="checkbox" onChange={() => this.handleSelectedCars(car)} />
                    {car.name}
                  </React.Fragment>
                }
              >

                {isSelected ?

                  car.skins.map(skin => {
                    return (
                      <div key={skin} className="cars__car">
                        <img
                          src={`/api/cars/preview?car=${car.name}&skin=${skin}`}
                          alt="preview"
                          width="200px"
                          onError={e =>
                            (e.target.src =
                              "https://cheaphotels4uk.com/wp-content/uploads/2017/12/race-wide.jpg")
                          }
                        />

                        <input
                          type="number"
                          onChange={e => {
                            this.handleSetSkin(car, skin, e.target.value)
                          }}
                          value={selectedCars[car.name].skins[skin] || 0}
                          min={0}
                          style={{
                            position: "absolute",
                            bottom: 5,
                            right: 5,
                            width: 40
                          }}
                        />
                      </div>
                    );
                  })
                  :
                  <div className="cars__car">
                    <img
                      src={`/api/cars/preview?car=${car.name}&skin=${car.skins[0]}`}
                      alt="preview"
                      width="200px"
                      onError={e =>
                        (e.target.src =
                          "https://cheaphotels4uk.com/wp-content/uploads/2017/12/race-wide.jpg")
                      }
                    />
                  </div>
                }
              </Paper>
            </div>
          );
        })}
      </div>
    );
  }
}


export default props => (
  <MyContext.Consumer>
    {context => <Cars {...props} context={context} />}
  </MyContext.Consumer>
)