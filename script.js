function clicar() {
    //Variavel do input
    var tare= window.document.getElementById('tarefa').value;
    var cate=window.document.getElementById('categoria').value;
    var datI=window.document.getElementById('dataInicio').value;
    var datF=window.document.getElementById('dataFinal').value;
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
    Data de inicio: ${datI}
    </div>
    <div> 
    Data de término: ${datF}
    </div>
    <div>
    <button style="color:red" onclick=(apagar(this))>apagar</button>
    </div>`;
    //adicionando li na lista
    window.document.getElementById('lista').appendChild(li)
    //removendo valores que tinham
    window.document.getElementById('tarefa').value = '';
}
function apagar(botao) {
    event.preventDefault();//pra iguinorar o required(porem tem que ter o this no método)
    window.Document,alert('Item apagado com sucesso')//só pra testar se a funão ta funcionando
    var li = botao.parentElement;// Encontra o elemento <li> pai do botão
            li.parentElement.removeChild(li);// Remove o <li> da lista <ul>
    }
