function adicionaDadosAluno() {

    let nome = document.getElementById("input_nome").value;
    let registroaluno = document.getElementById("input_ra").value;
    let email = document.getElementById("input_email").value;

    // trocar alertas
    
    switch(false) {
        case (nome.trim() !== ''):
        alert ("nome vazio");
        break;

        case (isNaN(nome)):
        alert ("nome numero");
        break;

        case (registroaluno.trim() !== ''):
        alert ("ra vazio");
        break;
        
        case (!isNaN(registroaluno)):
        alert ("letra ra");
        break;

        case (email.trim() !== ''):
        alert ('email vazio');
        break;

        case (email.includes('@')):
        alert ('email incorreto');
        break;

        case (email.includes('.')):
        alert ('email incorreto');
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
    }
    

   


// PARTE DO BRUNIN

function enviarInformacao(aluno) {
    let nomeAluno = aluno.nome;
    console.log(nomeAluno , "TESTE NOME");
    let canal = new BroadcastChannel('canal');
    canal.postMessage(nomeAluno);
}
