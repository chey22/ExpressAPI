const fs = require('fs');
let chirps = { nextid: 0 };

if(fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json'));
}

let getChirps = () => {
    return Object.assign({}, chirps); //create a copy and return it
}

let getChirp = id => {
    return Object.assign({}, chirps[id]); //create a copy and return it
}

//lets you access properties on an object kind of like an array even though it's an object
let createChirp = (chirp) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
};

let updateChirp = (id, chirp) => {
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = id => {
    delete chirps[id];
    writeChirps();
}

let writeChirps = () => {
    return ('x'),
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
}