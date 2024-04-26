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
