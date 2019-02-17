const Store = window.require('electron-store');
const store = new Store();
const fs = window.require('fs');

module.exports = {
    fetchAll: () => {
        let tracks = [];

        // Get all tracks
        fs.readdirSync(`${store.get('ac_path')}/content/tracks`).forEach(name => {
            if (fs.lstatSync(`${store.get('ac_path')}/content/tracks/${name}/ui`).isDirectory()) {
                const files = fs.readdirSync(`${store.get('ac_path')}/content/tracks/${name}/ui`);

                if (
                    fs
                        .lstatSync(`${store.get('ac_path')}/content/tracks/${name}/ui/${files[0]}`)
                        .isDirectory()
                ) {
                    // Track has multiple layouts
                    files.forEach(file => {
                        tracks.push({
                            name: `${name} - ${file}`,
                            path: `${name}/ui/${file}`
                        });
                    });
                } else {
                    // Track has 1 layout
                    tracks.push({ name, path: `${name}/ui` });
                }
            }
        });

        return tracks
    },

    
}