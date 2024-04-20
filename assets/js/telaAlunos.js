function mostrarInformacoes() {
    let dropdown = document.getElementById("alunos");
    let alunoSelecionado = dropdown.options[dropdown.selectedIndex].value;

    var nomealuno = "";
    var registroaluno = "";
    var emailaluno = "";


    switch (alunoSelecionado) {
        case "aluno1":
            nomealuno = "Aluno 1";
            registroaluno = "87361138";
            emailaluno = "aluno139@yahoo.com";
            break;
        case "aluno2":
            nomeAluno = "Aluno 2";
            registroaluno = "90626832";
            emailaluno = "aluno232@gmail.com";
            break;
        case "aluno3":
            nomealuno = "Aluno 3";
            registroaluno = "31143455";
            emailaluno = "aluno393@outlook.com";
            break;
        case "aluno4":
            nomealuno = "Aluno 4";
            registroaluno = "25773642";
            emailaluno = "aluno439@gmail.com";
            break;
        case "aluno5":
            nomealuno = "Aluno s5";
            registroaluno = "06397615";
            emailaluno = "aluno526@outlook.com";
            break;                        
        default:
            alert("Selecione um aluno válido!");
            return;
    }


    document.getElementById("nomealuno").textContent = nomealuno;
    document.getElementById("registroaluno").textContent = registroaluno;
    document.getElementById("emailaluno").textContent = emailaluno;


    document.getElementById("informacoesAluno").style.display = "block";
}