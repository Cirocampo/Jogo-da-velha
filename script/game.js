//iniciando as variáveis
board = ['', '', '', '', '', '', '', '', ''];
player_time = 0;
symbols = ['x', 'o'];
game_over = false;

// Essa função vai diferenciar os jogadores

function handle_move(positon) {

    if (game_over) {
        return
    }

    // essa primeira condicional evita que a função seja feita duas vezes no mesmo bloco do jogo da velha
    if (board[positon] == ''){

        /* o positon se refere ao elemento que a foi chamado a partir da função no script.js a partir do id,
        e o symbols possui dois elementos e o playertime pode ser 1 ou 0, ou seja, de acordo com o indíce
        */
        board[positon] = symbols[player_time];

        game_over = win_condition();
        if (game_over == false){
            if (player_time == 0) {
                player_time = 1;
            } else {
                player_time = 0;
            }
        }
    }
   return game_over;
}

// analisa para ver se o jogador ganhou e retorna o valor do game_over
function win_condition(){
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    /* a variavel seq pega todos os valores dentro do array win, enquanto os pos1, pos2 e pos3
    pegam o índice dos elemtos dentro dos valores da win */
    for( var i = 0; i < win.length; i++){
        let seq = win[i];

        let pos1 =  seq[0];
        let pos2 =  seq[1];
        let pos3 =  seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            return true
        }

}
    return false   
}

