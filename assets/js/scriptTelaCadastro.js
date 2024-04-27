
function adicionaDadosAluno() {

    let nome = document.getElementById("input_nome").value;
    let registroaluno = document.getElementById("input_ra").value;
    let email = document.getElementById("input_email").value;

    // Gera Alertas caso algo nao seja valido ou esteja Incorreto
    
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

        // Cria Classe Alunos e salva no local storage

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
        alert("Dados dos alunos salvos");
        //Essa Função vai limpar os dados inseridos na tabela HTML após os mesmos ja terem sido salvos no local storage.
        document.getElementById("input_nome").value = '';
        document.getElementById("input_ra").value = '';
        document.getElementById("input_email").value = '';

        let dadosSalvos = localStorage.getItem('alunos');
        let alunoSalvo = JSON.parse(dadosSalvos);
        console.log(alunoSalvo);
    
        }

    }


// js para a integração com a tela notas

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
    let selectNomes =  document.getElementById('nomeAlunos');
    let alunos = JSON.parse(localStorage.getItem('alunos'));
    for (let i = 0; alunos.length > i ; i++ ) {
        selectNomes.insertAdjacentHTML('beforeend', `<option>${alunos[i].nome}</option>`);
    }  
});

function adicionaNotas() {
    
    let inputNotaProva = document.getElementById("input_prova");
    let notaProva = parseFloat(inputNotaProva.value);

    let inputNotaAEP = document.getElementById("input_AEP");
    let notaAEP = parseFloat(inputNotaAEP.value);

    let inputNotaProvaIntegrada = document.getElementById("input_prova_integrada");
    let notaProvaIntegrada = parseFloat(inputNotaProvaIntegrada.value);

    let inputNotaProva2 = document.getElementById("input_prova2");
    let notaProva2 = parseFloat(inputNotaProva2.value);

    let inputNotaAEP2 = document.getElementById("input_AEP2");
    let notaAEP2 = parseFloat(inputNotaAEP2.value);

    let inputNotaProvaIntegrada2 = document.getElementById("input_prova_integrada2");
    let notaProvaIntegrada2 = parseFloat(inputNotaProvaIntegrada2.value);

    // let inputBimestre = document.getElementById("input_bimestre");
    // let Bimestre = parseFloat(inputBimestre.value);

    let selectNomes =  document.getElementById('nomeAlunos');
    let nomeAlunoSelecionado = selectNomes.value;
        switch (true) {
            case (isNaN(notaProva) || isNaN(notaAEP) || isNaN(notaProvaIntegrada) || inputNotaProva.value.trim() === "" || notaProva > 8 || notaProva < 0):
                alert("Por favor, siga as seguintes regras:\n- Apenas caracteres numéricos.\n- A nota da PROVA deve estar entre 0 e 8.\n- Todos os campos devem estar preenchidos corretamente.");
                break;
            
                case ( isNaN(notaAEP) || isNaN(notaProvaIntegrada) || inputNotaProva.value.trim() === "" || notaAEP > 1 || notaAEP < 0 || notaProvaIntegrada > 1 || notaProvaIntegrada < 0 ):
                    alert("Por favor, siga as seguintes regras:\n- Apenas caracteres numéricos. \n A nota deve ser separa por . (ponto).\n- A nota da PROVA INTEGRADA e AEP devem estar entre 0 e 1.\n- Todos os campos devem estar preenchidos corretamente.");
                    break;

            case (isNaN(notaProva2) || isNaN(notaAEP2) || isNaN(notaProvaIntegrada2) || inputNotaProva2.value.trim() === "" || notaProva2 > 8 || notaProva2 < 0):
                alert("Por favor, siga as seguintes regras:\n- Apenas caracteres numéricos.\n- A nota da PROVA do SEGUNDO BIMESTRE deve estar entre 0 e 8.\n- Todos os campos devem estar preenchidos corretamente.");
                break;
            
                case ( isNaN(notaAEP2) || isNaN(notaProvaIntegrada2) || inputNotaProva2.value.trim() === "" || notaAEP2 > 1 || notaAEP2 < 0 || notaProvaIntegrada2 > 1 || notaProvaIntegrada2 < 0 ):
                    alert("Por favor, siga as seguintes regras:\n- Apenas caracteres numéricos. \n A nota deve ser separa por . (ponto).\n- A nota da PROVA INTEGRADA e AEP devem estar entre 0 e 1.\n- Todos os campos devem estar preenchidos corretamente.");
                    break;
                

                    // adicionar case AEP E Prova estiverem erradas
            default:
            let alunos = JSON.parse(localStorage.getItem('alunos'))
            alunosLenght = alunos.length;
            let notasAlunos = JSON.parse(localStorage.getItem("notasAlunos")) || {};
            notasAlunos[alunosLenght] = { //FUNCIONA POR HORA MAS NÃO CONSIGO EDITAR
                nomeAluno: nomeAlunoSelecionado,
                notaProva: notaProva,
                notaProvaIntegrada: notaProvaIntegrada,
                notaAEP: notaAEP,
                notaProva2: notaProva2,
                notaProvaIntegrada2: notaProvaIntegrada2,
                notaAEP2: notaAEP2
            }; 
           // console.log(notasAlunos[alunosLenght]);    
            localStorage.setItem("notasAlunos", JSON.stringify(notasAlunos));
             
            

            let tabela = document.getElementById("tabelaNotas");
           
            let novaLinha = document.createElement("tr");

            let celulaNome = document.createElement("td");

            celulaNome.textContent = notasAlunos[alunosLenght].nomeAluno;
            
            let celulaNotaProva = document.createElement("td");

            celulaNotaProva.textContent = notasAlunos[alunosLenght].notaProva;

            let celulaNotaAEP = document.createElement("td");
            
            celulaNotaAEP.textContent = notasAlunos[alunosLenght].notaAEP;
            
            let celulaNotaProvaIntegrada = document.createElement("td");

            celulaNotaProvaIntegrada.textContent = notasAlunos[alunosLenght].notaProvaIntegrada;
            
            let celulaMediaPrimeiroBimestre = document.createElement("td");

            celulaMediaPrimeiroBimestre.textContent = (parseFloat(notasAlunos[alunosLenght].notaProva) + parseFloat(notasAlunos[alunosLenght].notaAEP) + parseFloat(notasAlunos[alunosLenght].notaProvaIntegrada));;

            celulaNome.textContent = notasAlunos[alunosLenght].nomeAluno;
            
            let celulaNotaProva2 = document.createElement("td");

            celulaNotaProva2.textContent = notasAlunos[alunosLenght].notaProva2;

            let celulaNotaAEP2 = document.createElement("td");
            
            celulaNotaAEP2.textContent = notasAlunos[alunosLenght].notaAEP;
            
            let celulaNotaProvaIntegrada2 = document.createElement("td");

            celulaNotaProvaIntegrada2.textContent = notasAlunos[alunosLenght].notaProvaIntegrada;
            
            let celulaMediaPrimeiroBimestre2 = document.createElement("td");

            mediaPrimeiroBimestre = (parseFloat(notasAlunos[alunosLenght].notaProva) + parseFloat(notasAlunos[alunosLenght].notaAEP) + parseFloat(notasAlunos[alunosLenght].notaProvaIntegrada));;

            mediaSegundoBimestre = (parseFloat(notasAlunos[alunosLenght].notaProva2) + parseFloat(notasAlunos[alunosLenght].notaAEP2) + parseFloat(notasAlunos[alunosLenght].notaProvaIntegrada2));;

            let mediaAprovacao = (mediaPrimeiroBimestre + mediaSegundoBimestre) / 2;
            
            let statusAprovacao;
            switch (true) {

            case(mediaAprovacao >= 6.0):
                statusAprovacao = "APROVADO";
                break;
                case(mediaAprovacao >= 3.0 && mediaAprovacao < 6.0):
                statusAprovacao = "RECUPERAÇÃO";
                break;
                    default:
                        statusAprovacao = "REPROVADO";
            }

            celulaMediaPrimeiroBimestre2.textContent = (parseFloat(notasAlunos[alunosLenght].notaProva2) + parseFloat(notasAlunos[alunosLenght].notaAEP2) + parseFloat(notasAlunos[alunosLenght].notaProvaIntegrada2));;

            
            let celulaMediaSemestre = document.createElement("td");

            celulaMediaSemestre.textContent = mediaAprovacao;

            let celulaStatusAprovacao = document.createElement("td");

            celulaStatusAprovacao.textContent = statusAprovacao;

            novaLinha.appendChild(celulaNome);
            novaLinha.appendChild(celulaNotaProva);
            novaLinha.appendChild(celulaNotaAEP);
            novaLinha.appendChild(celulaNotaProvaIntegrada);
            novaLinha.appendChild(celulaMediaPrimeiroBimestre);

            novaLinha.appendChild(celulaNotaProva2);
            novaLinha.appendChild(celulaNotaAEP2);
            novaLinha.appendChild(celulaNotaProvaIntegrada2);
            novaLinha.appendChild(celulaMediaPrimeiroBimestre2);
            novaLinha.appendChild(celulaMediaSemestre);
            novaLinha.appendChild(celulaStatusAprovacao);

            tabela.appendChild(novaLinha); 
              }}