const Store = window.require('electron-store');
const store = new Store();
const fs = window.require('fs');
const ini = require('ini');

module.exports = {
    fetchAll: () => {
        let cars = [];

        // Get all cars
        fs.readdirSync(`${store.get('ac_path')}/content/cars`).forEach(name => {
            let car = { name, skins: [] };

            if (
                fs.lstatSync(`${store.get('ac_path')}/content/cars/${name}`).isDirectory() &&
                fs.existsSync(`${store.get('ac_path')}/content/cars/${name}/skins`)
            ) {
                fs.readdirSync(`${store.get('ac_path')}/content/cars/${name}/skins`).forEach(skin => {
                    car.skins.push(skin);
                });
            }

            cars.push(car);
        });

        return cars;
    },

    bboi: '',

    fetchSelected: () => {
        let selectedCars = {};
        var cars = ini.parse(fs.readFileSync(`${store.get('ac_path')}/server/cfg/entry_list.ini`, 'utf-8'))

        for (let carKey in cars) {
            let car = cars[carKey];

            if (selectedCars[car.MODEL]) {
                if (selectedCars[car.MODEL].skins[car.SKIN]) {
                    selectedCars[car.MODEL].skins[car.SKIN].amount++;
                } else {
                    selectedCars[car.MODEL].skins[car.SKIN] = {
                        name: car.SKIN,
                        amount: 1
                    }
                }

            } else {
                // Can't set the object like {name: car.name, skins: {...}}
                // Don't know why
                selectedCars[car.MODEL] = {}
                selectedCars[car.MODEL].name = car.MODEL

                selectedCars[car.MODEL].skins = {}
                selectedCars[car.MODEL].skins[car.SKIN] = {name: car.SKIN, amount: 1}
            }
        }

        return selectedCars;
    }
}