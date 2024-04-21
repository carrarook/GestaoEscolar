function adicionaDadosAluno() {

    let nome = document.getElementById("input_nome").value;
    let registroaluno = document.getElementById("input_ra").value;
    let email = document.getElementById("input_email").value;

    // switch(false) {
    //     case (isNaN(nome) || !isNaN(registroaluno)):
    //     alert ("Siga as regras:");
    //     break;

    //     // case (isNaN(nome)):
    //     // break;
        
        
    //     default:
        let aluno = {
            nome: nome,
            registroaluno: registroaluno,
            email: email
        };
    
        let informacaoaluno = JSON.stringify(aluno);
    
        localStorage.setItem('aluno', informacaoaluno);

        console.log("Dados do aluno salvos");

        let dadosSalvos = localStorage.getItem('aluno');
        let alunoSalvo =  JSON.parse(dadosSalvos);
        console.log(alunoSalvo)
        

    

   

    
}

// PARTE DO BRUNIN