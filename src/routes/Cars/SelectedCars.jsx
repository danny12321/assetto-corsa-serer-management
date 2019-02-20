import React, { Component } from 'react'

export default class SelectedCars extends Component {
    render() {
        const { selectedCars, ac_path } = this.props;
        return (
            <div className="cars__container__selectedCars">
                <div className="cars__container__header">
                    Selected Cars
                </div>

                {selectedCars.map((car,key) => {
                    return (
                        <div key={key} onClick={() => this.props.remove(key)}>
                        <span>{car.name}</span>
                            <img
                                src={`${ac_path}/content/cars/${car.name}/skins/${car.skin}/preview.jpg`}
                                alt="preview"
                                width="250px"
                                onError={e => {
                                    e.target.src = "https://cheaphotels4uk.com/wp-content/uploads/2017/12/race-wide.jpg"
                                }}
                            />

                        </div>
                    )
                })}
            </div>
        )
    }
}
