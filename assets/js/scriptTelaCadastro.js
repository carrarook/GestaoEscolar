function adicionaDadosAluno() {

    let nome = document.getElementById("input_nome").value;
    let registroaluno = document.getElementById("input_ra").value;
    let email = document.getElementById("input_email").value;

    switch(false) {

        case (!isNaN(registroaluno)):
        alert ("Siga as regras:");
        break;

        case (isNaN(nome)):
        alert ("gay");
        break;
        
        
        default:
        let aluno = {
            nome: nome,
            registroaluno: registroaluno,
            email: email,
            id: Date.now(),
        };
    
        let informacaoaluno = JSON.stringify(aluno);
    
        localStorage.setItem('aluno', informacaoaluno);

        console.log("Dados do aluno salvos");

        let dadosSalvos = localStorage.getItem('aluno');
        let alunoSalvo = JSON.parse(dadosSalvos);
        console.log(alunoSalvo)

        enviarInformacao(alunoSalvo)
        }

    

   


// PARTE DO BRUNIN

function enviarInformacao(aluno){
    nomeAluno = aluno.nome
    console.log(aluno.nome);
    let canal = new BroadcastChannel('canal');

}