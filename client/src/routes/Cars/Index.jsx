import React, { Component } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import Paper from "../../components/Paper";

export default class Cars extends Component {
  state = {
    cars: null
  };

  componentDidMount() {
    this.fetchCars();
  }

  fetchCars() {
    axios.post("/api/cars/fetchAll").then(res => {
      this.setState({ cars: res.data });
    });
  }

  render() {
    if (!this.state.cars) return <Loading />;

    return (
      <div className="cars grid">
        {this.state.cars.map(car => {
          return (
            <div key={car.name} className="grid__item">
              <Paper title={car.name}>
                {car.skins.map(skin => {
                  return (
                    <div className="cars__car">
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
                        defaultValue={0}
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
                })}
              </Paper>
            </div>
          );
        })}
      </div>
    );
  }
}
