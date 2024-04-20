var rows = document.querySelectorAll("table tr:not(:first-child)");

rows.forEach(function(row){
    var cells=row.cells;

    var media1=(parseFloat(cells[1].textContent) + parseFloat(cells[2].textContent) + parseFloat(cells[3].textContent)) / 3;
    var media2=(parseFloat(cells[5].textContent) + parseFloat(cells[6].textContent) + parseFloat(cells[7].textContent)) / 3;
    var mediaSemestre=(media1 + media2) / 2;

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