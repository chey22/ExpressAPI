const express = require('express');
const chirpStore = require('../chirpStore');
let router = express.Router();

// router.get('/', (req, res) => {
//     res.send('chirps');
// });

router.get('/:id?', (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(chirpStore.GetChirp(id));
  } else {
    res.send(chirpStore.GetChirps());
  }
});

router.post('/', (req, res) => {
  chirpStore.CreateChirp(req.body);
  res.sendStatus(200);
});

//for router.put, maybe don't need the ? after id
// router.put('/id', (req, res) => {
//     chirpStore.UpdateChirp(req.params.id, req.body)
// res.sendStatus(200)
// })

router.put('/:id?', (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(chirpStore.UpdateChirp(id, req.body));
  } else {
    res.send(chirpStore.UpdateChirp());
  }
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  if (id) {
    res.send(chirpStore.DeleteChirp(id));
  } else {
    res.send(chirpStore.DeleteChirp())
  }
});

//how to call this and test it?
//option 1 - create an app in the client folder with index.html and jQuery
//option 2 - use a tool like Postman

module.exports = router;
