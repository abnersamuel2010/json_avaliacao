async function pagina() {
    const destino = document.getElementById('destino');
    try{
        const response = await fetch('dados.json'); 
        
        if (!response.ok) throw new Error('Falha ao carregar dados');

        const paginas = await response.json();

        destino.innerHTML='';

        paginas.forEach(item => {
            const card = document.createElement('tr');
            card.className = 'card';

            card.innerHTML = `
                <td> ${item.nome} </td>
                <td> ${item.descricao} </td>
                <td> ${item.apelido} </td>
                <td> ${item.sobrenome} </td>
                <td><button>editar</button></td>
            `;

            destino.appendChild(card);
        });
    } catch (error) {
        console.error('Erro na requisição:', error);
        destino.innerHTML = '<p>Desculpe, não foi possivel carregar as informações no momento.</p>';
    }
 }
