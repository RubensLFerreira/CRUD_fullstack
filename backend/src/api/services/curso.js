class CursoService {
  constructor(CursoModel) {
    this.curso = CursoModel;
  }
  // Buscar curso
  async buscar() {
    try {
      const cursos = await this.curso.findAll();
      return cursos;
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  // Adicionar cursos
  async adicionar(cursoDTO) {
    const cursoNome = await this.curso.findOne({
      where: {
        nome: cursoDTO.nome,
      },
    });

    if (cursoNome != null) {
      throw new Error("Este curso já foi cadastrado!");
    }

    try {
      await this.curso.create(cursoDTO);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  // Atualizar cursos
  async editarCurso(id, cursoData) {
    try {
      const cursoUpdate = await this.curso.update(
        {
          id: cursoData.id,
          nome: cursoData.nome,
          cargaHoraria: cursoData.cargaHoraria,
          turno: cursoData.turno,
        },
        {
          where: { id: id },
        }
      );
      return cursoUpdate;
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  // Deletar cursos
  async deletaCurso(id) {
    try {
      await this.curso.destroy({ where: { id: id } });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

module.exports = CursoService;
