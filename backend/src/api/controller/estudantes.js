const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.status(200).send('Students page!');
});

router.post('/', (req, res) => {
  const dadosEstudantes = req.body;
  console.log(dadosEstudantes);
  res.send('Tudo ok!');
});

module.exports = router;