window.addEventListener('keydown', (event)=>{// adicionando listner para quando uma tecla for pressionada
    var key_press = event.code; // guardando o nome da tecla pressionada 
    // [aproveitando as dadivas que o js nos oferece com o exemplo de if abaixo rsrsr] 
    if(key_press == 'ArrowDown' || key_press == 'KeyS'){
        if(!properties.game_status) return false 
        block.y+=block.velocity;
        update(1); // atualizando o canvas
    } // ação para baixo
    if(key_press == 'KeyW' || key_press == 'ArrowUp'|| key_press == 'Space') {
        if(!properties.game_status) return false 
        block.y-=block.velocity; 
        update(3); // atualizando o canvas
    } // ação para cima

});