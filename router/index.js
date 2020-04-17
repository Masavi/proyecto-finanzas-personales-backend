const express = require('express');
const router = express.Router();

const GastoRoutes = require('./GastoRoutes.js');
const CategoriaRoutes = require('./CategoriaRoutes.js');

router.use(GastoRoutes);
router.use(CategoriaRoutes);

module.exports = router;
