const express = require("express");
const router = express.Router();
const { body, check, validationResult } = require("express-validator");

const { curso } = require("../model");

const CursoService = require("../services/curso");
const cursoService = new CursoService(curso);

// Buscar cursos
router.get("/", async (req, res) => {
  const cursos = await cursoService.buscar();
  try {
    res.status(200).json(cursos);
  } catch (error) {
    res.status(400).send("Não foi possível encontrar os cursos!");
  }
});

// Enviar cursos
router.post(
  "/",
  body("nome", "Área NOME está vázio!").not().isEmpty().trim().escape(),
  body("turno", "Área TURNO está vázio!").not().isEmpty().trim().escape(),
  check("cargaHoraria")
    .isLength({ min: 2, max: 4 })
    .withMessage("Cursos superiores tem entre 2400h à 7200h")
    .matches(/\d/)
    .withMessage("Deve ser do tipo numérico."),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nome, cargaHoraria, turno } = req.body;
    try {
      await cursoService.adicionar({ nome, cargaHoraria, turno });
      res.status(201).send("Curso adicionado com sucesso!");
    } catch (error) {
      res.status(400).send(errp.message);
    }
  }
);

// Atualziando cursos
router.put("/:id", async (req, res) => {
  const { nome, cargaHoraria, turno } = req.body;
  const id = req.params.id;
  try {
    const cursoUpdate = await cursoService.editarCurso(id, {
      nome,
      cargaHoraria,
      turno,
    });
    res.status(200).send("Curso atualizado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Deletar cursos
router.delete("/:id",
  async (req, res) => {
    const id = req.params.id;
    try {
      await cursoService.deletaCurso(id);
      res.status(201).send("Curso deletado com sucesso!");
    } catch (error) {
      res.status(400).send(error.mensage);
    }
  }
);

module.exports = router;
