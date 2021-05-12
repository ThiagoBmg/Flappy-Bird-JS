
// Função que atualiza o canvas e todos os objetos.
function update(){
    if(properties.validations()){
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        block.draw();
    }
}

// iniciando alguns valores que seram necessários para controlar o jogo
//
var properties = {
    game_status:0, // status do jogo (0 = não inciado || 1 = iniciado)
    score:0, // pontuação do usuário
    best_score:0, // melhor pontuação
    gravity:20, // gravidade aplicada no jogador
    gravity_status:0,
    game_init:()=>{
        if(this.game_status) return false; // caso o jogo já esteja acontecendo, não permite a criação de um novo cenário.
        // definindo estilo do canvas para o jogo ativado
        canvas.style.opacity = '1'
        canvas.style.width= '100%'
        canvas.style.width='100%'
        canvas.style.backgroundColor =  '#e7e7e7';

        this.game_status = 1; // definindo status do jogo como iniciado
        // redefinindo paremetros do personagem 
        block.x= default_value.x;
        block.y= default_value.y;
        block.draw(); // desenhando o personagem na tela

        setTimeout(()=>{
            window.addEventListener('keydown', (event)=>{// adicionando listner para quando uma tecla for pressionada
                var key_press = event.code; // guardando o nome da tecla pressionada 
                // [aproveitando as dadivas que o js nos oferece com o exemplo de if abaixo rsrsr] 
                if(key_press == 'ArrowDown' || key_press == 'KeyS') block.y+=block.velocity; // ação para baixo
                if(key_press == 'KeyW' || key_press == 'ArrowUp'|| key_press == 'Space') block.y-=block.velocity; // ação para cima
                update(); // atualizando o canvas
            });

            if (!this.gravity_status){
                this.gravity_status=1;
                setInterval(()=>{ // função que aplica a gravidade sobre o usuário fazendo o seu eixo y ser ajudato a partir da variavel this.gravity  
                    if (!this.game_status) return false; // valida se o jogo esta iniciado, caso não esteja retorna false 
                    block.y++ // fazendo o personagem descer
                    update(); // atualizando canvas
                },properties.gravity);
            }    
        },2000)
    },
    validations:()=>{ // midleware que verifica se o personagem esta nos limites propostos para o cenário do jogo, caso o contrário finaliza a partida :(
        const kill_game = () =>{ // criando função que ira matar o jogo caso o usuário seja um noob
            //alert('jogo interrompido')
            ctx.clearRect(0,0,canvasWidth, canvasHeight); // limpando o canvas
            this.score = 0; // definindo o score como zerado 
            this.game_status=0; // definindo o status do jogo como parado
            // redefinindo paremetros do personagem 
            block.x= default_value.x;
            block.y= default_value.y;
            // definindo estilo do canvas para o jogo desativado
            canvas.style.opacity = '0.8'
            canvas.style.width= '90%'
            canvas.style.width='90%'
            canvas.style.backgroundColor = '#1E2228';
            window.removeEventListener('keydown', (event)=>{ 
                /* retirando o listner por conta de finalizar o game  */
                if(key_press == 'ArrowDown' || key_press == 'KeyS') false; //
                if(key_press == 'KeyW' || key_press == 'ArrowUp'|| key_press == 'Space') false//     
            }, true)
        }
        if(block.y>=canvasHeight-block.h||block.y<=0){
            //alert('ops, você perdeu!');
            console.log(block.y)
            kill_game();
            return false
        }
        else{
            return true
        }
    }
};
