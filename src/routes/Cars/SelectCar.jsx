import React, { Component } from 'react'
import Input from '../../components/Input'

export default class SelectCar extends Component {
    state = {
        search: ''
    }

    render() {
        const {search} = this.state;

        return (
            <div className="cars__container__select">
                <div className="cars__container__header">
                    Select cars
                </div>

                <div className="cars__container__select__form">
                    <Input
                        type="text"
                        label={"Search"}
                        value={search}
                        onChange={e => this.setState({ search: e.target.value })}
                    />

                    {this.props.cars.map((car, key) => {
                        if (!car.name.includes(search)) return null

                        return (
                            <div key={key}>
                                <input
                                    type="checkbox"
                                    id={`car_${key}`}
                                    onChange={e => this.props.update(car, e.target.checked)}
                                    checked={this.props.carsToSelect[car.name] ? true : false}
                                /> <label htmlFor={`car_${key}`}>{car.name}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
