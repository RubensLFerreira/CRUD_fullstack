const divCursos = document.querySelector("#cursos");

async function consultaCursos() {
  const retorno = await fetch("http://localhost:8080/cursos");
  const cursos = await retorno.json();
  prencheTela(cursos);
}

function prencheTela(cursos) {
  cursos.forEach((curso) => {
    const novoCursoHTML = `
    <div class="curso">
      <h3>Nome: ${curso.nome}</h3>
      <p>Carga horária: ${curso.cargaHoraria} horas</p>
      <p>Turno: ${curso.turno}</p>
    </div>
    `;
    divCursos.innerHTML = divCursos.innerHTML + novoCursoHTML;
  });
}

consultaCursos();
