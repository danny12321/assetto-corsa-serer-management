const Store = window.require('electron-store');
const store = new Store();
const fs = window.require('fs');
const ini = require('ini');
const fetchCars = require('./cars');

module.exports = {
    fetchAll: () => {
        return ini.parse(fs.readFileSync(`${store.get('ac_path')}/server/cfg/server_cfg.ini`, 'utf-8'))
    },

    save: settings => {
        return
        const cars = fetchCars.fetchSelected();
        settings.SERVER.CARS = '';

        for(let car in cars) settings.SERVER.CARS += `${car};`;

        fs.writeFileSync(`cfg/server_cfg.ini`, ini.stringify(settings))
        // fs.writeFileSync(`${store.get('ac_path')}/server/cfg/server_cfg_new.ini`, ini.stringify(settings))
    }
}