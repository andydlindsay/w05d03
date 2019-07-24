const express = require('express');
const router = express.Router();
const { addVillain, deleteVillain, editVillain, getVillains, getVillainById } = require('../db/villains-queries');

router.get('/', (request, response) => {
  getVillains((err, villains) => {
    if (err) {
      return response.render('error', err);
    }
    response.render('villains', { villains });
  });
});

router.get('/new', (request, response) => {
  response.render('new-villain');
});

router.get('/:id', (request, response) => {
  getVillainById(request.params.id, (err, res) => {
    if (err) {
      return response.render('error', err);
    }
    response.render('villain', { villain: res[0] });
  });
});

router.post('/:id', (request, response) => {
  editVillain(request.params.id, request.body.newAlias, (err) => {
    if (err) {
      return response.render('error', err);
    }
    response.redirect(`/villains/${request.params.id}`);
  });
});

router.post('/:id/delete', (request, response) => {
  deleteVillain(request.params.id, (err) => {
    if (err) {
      return response.render('error', err);
    }
    response.redirect('/villains');
  });
});

router.post('/', (request, response) => {
  const { alias, movie } = request.body;
  addVillain(alias, movie, (err) => {
    if (err) {
      return response.render('error', err);
    }
    response.redirect('/villains');
  });
});

module.exports = router;
