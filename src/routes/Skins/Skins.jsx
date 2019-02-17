import React, { Component } from 'react'
import MyContext from '../../MyContext';

class Skins extends Component {
    state = {
        open: {}
    }

    handleChange(car, skin, amount) {
        const { selectedCars } = this.props.context;

        if (amount === 0) {

            delete selectedCars[car.name].skins[skin];

        } else if (selectedCars[car.name].skins[skin]) {

            selectedCars[car.name].skins[skin].amount = amount

        } else {

            selectedCars[car.name].skins[skin] = {
                skin,
                amount
            }
        }

        this.props.context.setSelectedCars(selectedCars);
    }

    countTotalByCar(car) {
        const { selectedCars } = this.props.context;
        let total = 0;

        for (const skinName in selectedCars[car.name].skins) {
            const amount = selectedCars[car.name].skins[skinName].amount;
            if (!isNaN(parseFloat(amount)) && isFinite(amount)) {
                total += amount;
            }
        }

        return total;
    }

    toggleOpen(car) {
        let div = document.querySelector(`.skins__car__skins.${car.name}`);
        let height = document.querySelector(`.skins__car__skins.${car.name} > div`).offsetHeight;
        let transition = 600;

        this.setState({ open: { ...this.state.open, [car.name]: !this.state.open[car.name] } }, () => {
            div.style.transition = transition + "ms";

            if (this.state.open[car.name]) {
                div.style.maxHeight = height + "px";

                setTimeout(() => {
                    div.style.maxHeight = "none";
                }, transition);
            } else {
                div.style.maxHeight = height + "px";

                setTimeout(() => {
                    div.style.maxHeight = 0;
                }, 1)
            }
        });
    }

    render() {
        const { selectedCars, cars } = this.props.context;
        console.log('skins')

        return (
            <div className="skins">

                {Object.keys(selectedCars).map(carName => {
                    const car = cars.find(a => a.name === carName)

                    return (
                        <div key={carName} className="skins__car">
                            <h3>
                                <i
                                    className={`fas fa-arrow-circle-down ${this.state.open[car.name] ? 'open' : 'closed'}`}
                                    onClick={() => this.toggleOpen(car)}
                                />
                                {` ${carName}`}
                                ({this.countTotalByCar(car)})
                                </h3>

                            <div className={`skins__car__skins ${car.name} ${this.state.open[car.name] ? 'open' : 'closed'}`}>
                                <div>

                                    {car.skins.map(skin => {
                                        let amount;

                                        if (selectedCars[car.name] && selectedCars[car.name].skins[skin]) {
                                            amount = selectedCars[car.name].skins[skin].amount;
                                        }

                                        return (
                                            <div key={skin}>
                                                <img
                                                    src={`/api/cars/preview?car=${car.name}&skin=${skin}`}
                                                    alt="preview"
                                                    height="200px"
                                                    onError={e =>
                                                        (e.target.src =
                                                            "https://cheaphotels4uk.com/wp-content/uploads/2017/12/race-wide.jpg")
                                                    }
                                                />

                                                <input
                                                    placeholder="Amount"
                                                    type="number"
                                                    onChange={e => {
                                                        this.handleChange(car, skin, parseInt(e.target.value))
                                                    }}
                                                    defaultValue={amount}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default props => (
    <MyContext.Consumer>
        {context => <Skins {...props} context={context} />}
    </MyContext.Consumer>
)