
function carregarDadosAlunos() {
    if (localStorage.getItem('aluno')) {
        let dadosSalvos = localStorage.getItem('aluno');
        let alunoSalvo = JSON.parse(dadosSalvos);

        let tabelaAlunos = document.getElementById('tabela_alunos');

        let novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${alunoSalvo.nome}</td>
            <td>${alunoSalvo.registroaluno}</td>
            <td>${alunoSalvo.email}</td>
        `;
        tabelaAlunos.appendChild(novaLinha);
    } else {
        console.log("Nenhum dado de aluno encontrado no localStorage.");
    }
}

window.onload = function() {
    carregarDadosAlunos();
};
