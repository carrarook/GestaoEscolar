//Carregamento dos Alunos cadastrados e inserção na tela alunos
window.addEventListener("load", function() {
    let alunosSalvos = JSON.parse(localStorage.getItem('alunos')) || [];
    let alunosBody = document.getElementById('alunosinserir');

    alunosSalvos.forEach(function(aluno) {
        let alunoRow = `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.registroaluno}</td>
                <td>${aluno.email}</td>
            </tr>
        `;
        alunosBody.insertAdjacentHTML('beforeend', alunoRow);
    });
});

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