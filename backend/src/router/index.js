// import modules
const express = require("express");
const router = express.Router();

// import files
const cursosRouter = require('../api/controller/cursos');
const estudantesRouter = require('../api/controller/estudantes');

// router home
router.get("/", (req, res) => {
  res.status(200).send("Página inicial");
});

// chamando os respectivos arquivos
router.use('/cursos', cursosRouter); // Nesta rota curso quem vai tratar ela é o arquivo cursos.js
router.use('/estudantes', estudantesRouter);

module.exports = router;