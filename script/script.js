/* Esse evento acontece quando a página está totalmente carregada, tem uma função de seta que 
seleciona todos os elementos que possuem a classe square, e coloca em cada um deles um evento DOM
onclick, que chama uma callback */
addEventListener("DOMContentLoaded",() => {
    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square) => {

        square.addEventListener('click', handle_click);

    })
})

/* essa função é a callback dentro do primeiro evento, o parâmetro event é o elemento que fez o
DOM event ser ativado, pegamoso target do parâmetro e dps id desse evento, após isso chamamos
as duas funções a handle_move */
function handle_click(event) {
    let sqr = event.target;
    let positon = sqr.id;

    if (handle_move(positon)){
    setTimeout(() => {
       alert(`jogador ${player_time} ganhou`)
    }, 1)
        }
    update_squaress();
}

/* essa função coloca o X e O a partir da seleção de todos os itens da classe square, pegamos 
também as variaveis do game.js para relacionar o jogador com o simbolo que vai ser executado */
function update_squaress() {
    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square) => {
        let positon = square.id 
        let symbol = board[positon];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        } 
    })
}


//função que reinicia o jogo
function restart(){
    let squares = document.querySelectorAll(".square");

    for(square of squares) {
        square.innerHTML = ''; 
    }
    
}