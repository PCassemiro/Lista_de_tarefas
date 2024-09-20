function clicar() {
    //Variavel do input
    var tare= window.document.getElementById('tarefa').value;
    var cate=window.document.getElementById('categoria').value;
    var datI=window.document.getElementById('dataInicio').value;
    var esta='Em andamento';
    var conc='--/--/----';
    //criando uma variavel li
    var li= document.createElement('li');
    //definindo o dadao da variavel li
    li.innerHTML = 
    `<div>
    Tarefa: ${tare}
    <div> 
    Categoria: ${cate}
    </div> 
    <div> 
    Data de inicio: ${converterData(datI)}
    </div>
    <div id='ClasseEstado'> 
    Estado: ${esta}
    </div>
    <div>
    Data de conclusão:${conc}
    </div>
    <div>
    <button style="color:green" onclick=(concluir(this))>Concluir</button>
    <button style="color:red" onclick=(apagar(this))>Apagar</button>
    </div>`;
    //adicionando li na lista
    window.document.getElementById('lista').appendChild(li)
    //removendo valores que tinham
    window.document.getElementById('tarefa').value = '';
}
function apagar(botao) {
    event.preventDefault();//pra iguinorar o required(porem tem que ter o this no método)
    alert('Tarefa apagado com sucesso')//só pra testar se a funão ta funcionando
    var li = botao.parentElement;// Encontra o elemento <li> pai do botão
    li.parentElement.removeChild(li);// Remove o <li> da lista <ul>
    }

function converterData(dataISO) {
    // Separa o ano, mês e dia da string no formato yyyy-MM-dd
    var partes = dataISO.split('-');
    var ano = partes[0];
    var mes = partes[1];
    var dia = partes[2];
    // Retorna a data no formato dd/MM/yyyy
    return `${dia}/${mes}/${ano}`;
}

function concluir(botao) {
    alert('Tarefa concluido')
    // var esatdo=window.document.getElementById('ClasseEstado').value;
    // var li = botao.parentElement;
    // esatdo.removeChild('estado')
}
