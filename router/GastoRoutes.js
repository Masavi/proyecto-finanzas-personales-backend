var express = require('express');
var router = express.Router();

const Gasto = require('../models/Gasto');

// CRUD Gastos

router.post('/gastos', (req, res) => {
  Gasto.create(req.body)
    .then(gasto => res.status(201).json(gasto))
    .catch(err => res.status(400).json(err));
});

router.get('/gastos', (req, res) => {
  Gasto.find()
    .then(gastos => {
      if (gastos.length === 0) res.status(200).json({ mensaje: 'No hay gastos' });
      res.status(200).json(gastos);
    })
    .catch(err => res.status(400).json(err));
});

router.get('/gastos/:id', (req, res) => {
  Gasto.findById(req.params.id)
    .then(gasto => res.status(200).json(gasto))
    .catch(err => res.status(404).json(err));
});

router.patch('/gastos/:id', (req, res) => {
  Gasto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(gasto => res.status(200).json(gasto))
    .catch(err => res.status(404).json(err));
});

router.delete('/gastos/:id', (req, res) => {
  Gasto.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).json())
    .catch(err => res.status(404).json(err));
});

module.exports = router;