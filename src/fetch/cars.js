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

    fetchSelected: () => {
        let selectedCars = [];
        var cars = ini.parse(fs.readFileSync(`${store.get('ac_path')}/server/cfg/entry_list.ini`, 'utf-8'))

        for (let carKey in cars) {
            let car = cars[carKey];

            selectedCars.push({
                name: car.MODEL,
                skin: car.SKIN
            });
        }

        return selectedCars;
    },

    save: data => {
        let entry_list = {}

        data.forEach((car, key) => {
            entry_list[`CAR_${key}`] = {
                MODEL: car.name,
                SKIN: car.skin,
                SPECTATOR_MODE: 0,
                DRIVERNAME: null,
                TEAM: null,
                GUID: null,
                BALLAST: 0
            }
        })

        fs.writeFileSync(`${store.get('ac_path')}/server/cfg/entry_list.ini`, ini.stringify(entry_list))
    }
}