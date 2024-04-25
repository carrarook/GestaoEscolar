function adicionaDadosAluno() {

    let nome = document.getElementById("input_nome").value;
    let registroaluno = document.getElementById("input_ra").value;
    let email = document.getElementById("input_email").value;

    // trocar alertas
    
    switch(false) {
        case (nome.trim() !== ''):
        alert ("Por favor, insira o nome do aluno.");
        break;

        case (isNaN(nome)):
        alert ("O nome do aluno não pode ser conter números.");
        break;

        case (registroaluno.trim() !== ''):
        alert ("Por favor, insira o R.A do aluno.");
        break;
        
        case (!isNaN(registroaluno)):
        alert ("O número de R.A não pode conter letras.");
        break;

        case (email.trim() !== ''):
        alert ('Por favor, insira o email do aluno.');
        break;

        case (email.includes('@')):
        alert ('Por favor, insira um email válido.');
        break;

        case (email.includes('.')):
        alert ('Por favor, insira um email válido.');
        break;

        default:
        let aluno = {
            nome: nome,
            registroaluno: registroaluno,
            email: email,
            id: Date.now(),
        };

        let alunosSalvos = JSON.parse(localStorage.getItem('alunos')) || [];

        alunosSalvos.push(aluno);
    
        localStorage.setItem('alunos', JSON.stringify(alunosSalvos));

        console.log("Dados dos alunos salvos");

        let dadosSalvos = localStorage.getItem('alunos');
        let alunoSalvo = JSON.parse(dadosSalvos);
        console.log(alunoSalvo);

        enviarInformacao(alunosSalvos);
        }
    }
    

   
// PARTE DO BRUNIN

function enviarInformacao(aluno) {
    let AlunoJSON = { nome: aluno.nome , id: aluno.id};
    console.log(AlunoJSON , "enviarInformação");
    let canal = new BroadcastChannel('canal');
    canal.postMessage(AlunoJSON);
}
