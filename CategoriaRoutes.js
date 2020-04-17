var express = require('express');
var router = express.Router();

const Categoria = require('./models/Categoria');

// CRUD categorias

router.post('/categorias', (req, res) => {
  Categoria.create(req.body)
    .then(categoria => res.status(201).json(categoria))
    .catch(err => res.status(400).json(err));
});

router.get('/categorias', (req, res) => {
  Categoria.find()
    .then(categorias => {
      if (categorias.length === 0) res.status(200).json({ mensaje: 'No hay categorias' });
      res.status(200).json(categorias);
    })
    .catch(err => res.status(400).json(err));
});

router.get('/api/v1/categorias/:id', (req, res) => {
  Categoria.findById(req.params.id)
    .then(categoria => res.status(200).json(categoria))
    .catch(err => res.status(404).json(err));
});

router.patch('/api/v1/categorias/:id', (req, res) => {
  Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(categoria => res.status(200).json(categoria))
    .catch(err => res.status(404).json(err));
});

router.delete('/api/v1/categorias/:id', (req, res) => {
  Categoria.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).json())
    .catch(err => res.status(404).json(err));
});

module.exports = router;