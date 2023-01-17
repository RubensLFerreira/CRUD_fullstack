const btn = document.querySelector("#editar");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const curso = getDadosForm();
  putDadosForm(curso);
});

function getDadosForm() {
  const inputId = document.querySelector("#id");
  const inputNome = document.querySelector("#nome");
  const inputcargaHoraria = document.querySelector("#cargaHoraria");
  const inputTurno = document.querySelector("#turno");

  const curso = {
    id: inputId.value,
    nome: inputNome.value,
    cargaHoraria: inputcargaHoraria.value,
    turno: inputTurno.value,
  };
  return curso;
}

async function putDadosForm(curso) {
  const url = "http://localhost:8080/cursos/";
  const config = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(curso),
  };

  // const resposta = await
  await fetch(url + curso.id, config)
    .then((response) => console.log(response.status))
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  limparCampo();
}

function limparCampo() {
  document.querySelector("#id").value = "";
  document.querySelector("#nome").value = "";
  document.querySelector("#cargaHoraria").value = "";
  document.querySelector("#turno").value = "";
}
