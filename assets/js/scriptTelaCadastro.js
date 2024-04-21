function adicionaDadosAluno() {

    let nome = document.getElementById("input_nome").value;
    let registroaluno = document.getElementById("input_ra").value;
    let email = document.getElementById("input_email").value;

    let aluno = {
        nome: nome,
        registroaluno: registroaluno,
        email: email
    };

    let informacaoaluno = JSON.stringify(aluno);

    localStorage.setItem('aluno', informacaoaluno);

    console.log("Dados do aluno salvos");
}

