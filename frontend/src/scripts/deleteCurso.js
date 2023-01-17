const btn = document.querySelector("#deletar");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const curso = getDadosForm();
  deleteDadosForm(curso);
});

function getDadosForm() {
  const inputId = document.querySelector("#id");

  const curso = {
    id: inputId.value,
  };
  return curso;
}

async function deleteDadosForm(curso) {
  const url = "http://localhost:8080/cursos/";
  const config = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // const resposta = await
  await fetch(url + curso.id, config)
  .then(response => console.log(response.status))
  .then(data => console.log(data))
  .catch(err => console.log(err))
}
