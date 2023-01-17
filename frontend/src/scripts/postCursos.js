const btn = document.querySelector("#salvar");

btn.addEventListener("click", () => {
  // capturar os dados
  const curso = getDadosForm();
  // enviar os dados para API
  postDadosForm(curso);
});

function getDadosForm() {
  const inputNome = document.querySelector("#nome");
  const inputCargaHoraria = document.querySelector("#cargaHoraria");
  const inputTurno = document.querySelector("#turno");

  if (
    inputNome.value === null ||
    inputCargaHoraria.value === null ||
    inputTurno.value === null
  ) {
    console.log("O campos está vázio!");
  }

  const curso = {
    nome: inputNome.value,
    cargaHoraria: inputCargaHoraria.value,
    turno: inputTurno.value,
  };
  return curso;
}

async function postDadosForm(curso) {
  try {
    const resposta = await fetch("http://localhost:8080/cursos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(curso),
    });

    if (resposta.status === 201) {
      limparCampo();
      // window.location.href = "http://127.0.0.1:5500/src/public/index.html";
      window.location.href = "http://127.0.0.1:5500/index.html";
    } else {
      console.log("Houve algum erro!");
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
}

function limparCampo() {
  document.querySelector("#nome").value = "";
  document.querySelector("#cargaHoraria").value = "";
  document.querySelector("#turno").value = "";
}
