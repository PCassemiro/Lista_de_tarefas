function clicar() {
    //Variavel do input
    var tare= window.document.getElementById('tarefa').value;
    //criando uma variavel li
    var li= document.createElement('li');
    //definindo o dadao da variavel li
    // li.textContent= 
    var count= document.getElementsByClassName('apagado').length;

    li.innerHTML = 
    `<div class="apagado li-${count}">
    ${tare}<button style="color:red" onclick=(apagar(this))>apagar</button>
    <script>
    
    </script>
    </div> `;
    //adicionando li na lista
    window.document.getElementById('lista').appendChild(li)
    //removendo valores que tinham
    window.document.getElementById('tarefa').value = '';
}

function apagar(botao) {
    event.preventDefault();
    
    // var botao = botao.parentElement;
    // var teste = botao.className;
    // teste.innerHTML = '';
    // teste.value= '';
    }

