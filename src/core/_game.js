
// Função que atualiza o canvas e todos os objetos.
function update(x){
    if(properties.validations()){
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        block.draw(x);
        for(let s of obstacles){
            s.draw()
        }
        console.log(obstacles.length)
        console.log(properties.game_status)
    }
}

// iniciando alguns valores que seram necessários para controlar o jogo
//W

var properties = {
    game_status:0, // status do jogo (0 = não inciado || 1 = iniciado)
    score:0, // pontuação do usuário
    best_score:0, // melhor pontuação
    gravity:20, // gravidade aplicada no jogador
    gravity_status:0,
    delay:3000, // delay para iniciar o jogo depois do clique
    gteste:'',
    obs:new generate_obstacles(this.delay, this.game_status), // gerando obstaculos no jogo
    game_init:()=>{
        if(properties.game_status) return false; // caso o jogo já esteja acontecendo, não permite a criação de um novo cenário.
      // definindo estilo do canvas para o jogo ativado
        canvas.style.opacity = '1'
        canvas.style.width= '100%'
        canvas.style.height='100%'
        canvas.style.backgroundColor =  '#3F829C';
        
        // redefinindo paremetros do personagem 
        block.x= default_value.x;
        block.y= default_value.y;
        block.draw(2); // desenhando o personagem na tela

        return setTimeout(()=>{
   
         /*    alert(properties.obs) */
            properties.game_status = 1; // definindo status do jogo como iniciado
            if (!properties.gravity_status){
                properties.gteste = setInterval(()=>{ // função que aplica a gravidade sobre o usuário fazendo o seu eixo y ser ajudato a partir da variavel this.gravity  
                    if (!properties.game_status) return false; // valida se o jogo esta iniciado, caso não esteja retorna false 
                    block.y++ // fazendo o personagem descer
                    update(1); // atualizando canvas
                },properties.gravity);
                properties.gravity_status=1; // defini o status como verdadeiro para não executar esta função das proximas vezes que o usuário jogar 
            }   
        },properties.delay)
    },
    validations:()=>{ // midleware que verifica se o personagem esta nos limites propostos para o cenário do jogo, caso o contrário finaliza a partida :(
       
        const kill_game = () =>{ // criando função que ira matar o jogo caso o usuário seja um noob
            //alert('jogo interrompido')
            // iniciando obstaculos
            clearInterval(properties.gteste);
           
            ctx.clearRect(0,0,canvasWidth, canvasHeight); // limpando o canvas
           
            // redefinindo paremetros do personagem 
            block.x= default_value.x;
            block.y= default_value.y;
            // definindo estilo do canvas para o jogo desativado
            canvas.style.opacity = '0.8'
            canvas.style.width= '90%'
            canvas.style.height='90%'
            canvas.style.backgroundColor = '#1E2228';

            if(properties.score>properties.best_score){
                properties.best_score = properties.score
                document.querySelector('#bestScore').innerHTML = properties.score;
            }
            properties.score = 0; // definindo o score como zerado 
            document.querySelector('#score').innerHTML = properties.score; 
            properties.game_status=0; // definindo o status do jogo como parado
            properties.gravity_status=0; // desativando a gravidade em cima do
        }

        if(block.y>=canvasHeight-block.h||block.y<=0){
            kill_game();
            return false
        }
        else{
            return true
        }
    }
};
