// Parte do GuLisboa
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

let canal = new BroadcastChannel('canal'); // Pega os valores adquiridos (Nome e id) no "scriptTelaCadastro" e os transforma em JSON aqui
canal.onmessage = function(recebido) {
    let alunoJSON = recebido.data;
    console.log(alunoJSON , "ONMESSAGE");
        localStorage.setItem('AlunoJSON', JSON.stringify(alunoJSON));
        console.log("salva no local storage", alunoJSON);

    adicionarAlunoJSONTabela(alunoJSON);
    }

function adicionaNotas() {
    
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
    
    