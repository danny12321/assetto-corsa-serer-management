import React, { Component } from 'react'

export default class AddCar extends Component {
    render() {
        const { carsToSelect, ac_path } = this.props;

        return (
            <div className="cars__container__addCar">
                <div className="cars__container__header">
                    Add Car
                </div>

                {Object.keys(carsToSelect).map(carName => {
                    const car = carsToSelect[carName];

                    return (
                        <div key={carName}>
                            {carName}

                            <div className="flex">
                                {car.skins.map(skin => {
                                    return (
                                        <div
                                            key={skin}
                                            onClick={this.props.add.bind(this, car, skin)}
                                        >
                                            <img
                                                src={`${ac_path}/content/cars/${car.name}/skins/${skin}/preview.jpg`}
                                                alt="preview"
                                                width="150px"
                                                onError={e => {
                                                    e.target.src = "https://cheaphotels4uk.com/wp-content/uploads/2017/12/race-wide.jpg"
                                                }}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
