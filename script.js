function sla(){
    fetch('dados.json')
    .then(response => response.json())
    .then(ddd =>{
        tablet = document.getElementById('lugar');

        ddd.forEach(item =>{
            let linha = document.createElement('tr');

             linha.innerHTML = 
             "<td>" + item.nome + "</td>" +
             "<td>" + item.descricao + "</td>" +
             "<td>" + item.apelido + "</td>"+
             "<td>" + item.endereco + "</td>";
             
        tablet.appendChild(linha);
        });
    })
}