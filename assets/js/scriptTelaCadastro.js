
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
<<<<<<< HEAD
        // PARTE DO BRUNIN
        console.log(alunoSalvo);
        // console.log("TESTE", alunoSalvo);
        // console.log(typeof alunoSalvo);
        // checarAlunoExistente(alunoSalvo);

        }
    }
=======
        console.log(alunoSalvo);

        }
    }
// PARTE DO BRUNIN

console.log("TESTE", alunoSalvo);
console.log(typeof alunoSalvo);
checarAlunoExistente(alunoSalvo);


function checarAlunoExistente(alunoSalvo){
console.log("nome ultimo aluno", alunoSalvo[0].nome);
}
>>>>>>> 6832d517d48ebd096019ab52b029ab83a2a6d0f7


// parte tela notas

function atualizarNome(){
    let rows = document.querySelectorAll("table tr:not(:first-child)");

    rows.forEach(function(row){
        let cells=row.cells;

        let media1=(parseFloat(cells[1].textContent) + parseFloat(cells[2].textContent) + parseFloat(cells[3].textContent)) / 3;
        let media2=(parseFloat(cells[5].textContent) + parseFloat(cells[6].textContent) + parseFloat(cells[7].textContent)) / 3;
        let mediaSemestre=(media1 + media2) / 2;

        cells[4].textContent = media1.toFixed(2);
        cells[8].textContent = media2.toFixed(2);
        cells[9].textContent = mediaSemestre.toFixed(2);

        switch(true) {
            case (mediaSemestre >= 6.0):
                cells[10].textContent = "APROVADO";
                break;
            case (mediaSemestre >= 3.0 && mediaSemestre < 6.0):
                cells[10].textContent = "RECUPERAÇÃO";
                break;
            default:
                cells[10].textContent = "REPROVADO";
        }
    });
}


window.addEventListener("load", (event) => {
<<<<<<< HEAD
    let selectNomes =  document.getElementById('nomeAlunos');
    let alunos = JSON.parse(localStorage.getItem('alunos'));
    for (let i = 0; alunos.length > i ; i++ ) {
        selectNomes.insertAdjacentHTML('beforeend', `<option>${alunos[i].nome}</option>`);
    }  
});
=======
    console.log(alunos.nome);
    let selectNomes =  document.getElementById('nomeAlunos');
    let alunos = JSON.parse(localStorage.getItem('alunos'));
   for (let i = 0; alunos.length > i ; i++ ) {
    selectNomes.insertAdjacentHTML('afterbegin', `<option>${alunos[i].nome}</option>`);
}  });
>>>>>>> 6832d517d48ebd096019ab52b029ab83a2a6d0f7

function adicionaNotas() {
    checarAlunoExistente();
    console.log('TESTE')
    let inputNotaProva = document.getElementById("input_prova");
    let notaProva = parseFloat(inputNotaProva.value);

    let inputNotaAEP = document.getElementById("input_AEP");
    let notaAEP = parseFloat(inputNotaAEP.value);

    let inputNotaProvaIntegrada = document.getElementById("input_prova_integrada");
    let notaProvaIntegrada = parseFloat(inputNotaProvaIntegrada.value);

    let inputBimestre = document.getElementById("input_bimestre");
    let Bimestre = parseFloat(inputBimestre.value);

        switch (true) {
            case (isNaN(notaProva) || isNaN(notaAEP) || isNaN(notaProvaIntegrada) || inputNotaProva.value.trim() === "" || notaProva > 8 || notaProva < 0):
                alert("Por favor, siga as seguintes regras:\n- Apenas caracteres numéricos.\n- A nota da PROVA deve estar entre 0 e 8.\n- Todos os campos devem estar preenchidos corretamente.");
                break;
            
                case ( isNaN(notaAEP) || isNaN(notaProvaIntegrada) || inputNotaProva.value.trim() === "" || notaAEP > 1 || notaAEP < 0 || notaProvaIntegrada > 1 || notaProvaIntegrada < 0 ):
                    alert("Por favor, siga as seguintes regras:\n- Apenas caracteres numéricos. \n A nota deve ser separa por . (ponto).\n- A nota da PROVA INTEGRADA e AEP devem estar entre 0 e 1.\n- Todos os campos devem estar preenchidos corretamente.");
                    break;
                case (Bimestre !== 1 && Bimestre !== 2):
                    alert("O bimestre só pode ser igual á: 1 ou 2");
                    break;

                    // adicionar case AEP E Prova estiverem erradas
            default:
            // ALTERAR PQ NAO VAI SER POR BIMESTRE VAI SER POR ALUNO NÉ O ANTA
            let notasBimestrais = JSON.parse(localStorage.getItem("notasBimestrais")) || {};
            notasBimestrais[Bimestre] = {
                notaProva: notaProva,
                notaProvaIntegrada: notaProvaIntegrada,
                notaAEP: notaAEP
            };
            localStorage.setItem("notasBimestrais", JSON.stringify(notasBimestrais));
            console.log("Notas Salvas");
            break;}}