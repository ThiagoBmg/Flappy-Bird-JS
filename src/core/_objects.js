// Desenvolvido por Thiago Gomes
// pegando os elementos e armazenando em constantes para utilizarmos na criação do projeto
//
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d'); 

// guardando o tamanho do canvas para utilizar nas medidas de limites e definir as areas de impacto do jogo 
//
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// definindo a imagem do passarinho
var img = new Image();
img.src="https://uploaddeimagens.com.br/images/003/237/895/original/sprites.png?1620808687";

// diando variavel que ira guardar os obstaculos gerados pelo jogo
var obstacles = [];

function getRandomInt(min, max) { // Função que gera um numero aleatório
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class obstacle {
    constructor(){
        this.x=canvasWidth-20; // posição x inicial
        this.y=getRandomInt(0,120); // posição y gerada de forma aleatória 
        this.w=20;
        this.h=20;
        this.color='black';
        this.velocity=30;
        this.set=0;// caso ja tenha sido incluido na array ele fica como 1, não sendo adicionado novamente.
        this.draw();
        setInterval(()=>{
            this.x -=1;
        },this.velocity)
    }
    
    draw(){
        ctx.fillStyle = this.color;
        ctx.drawImage(img,this.x,this.y,this.w,this.h);
        if(!this.set) {
            update();
            this.set=1; // caso 
        }
    } 
}

var generatoObstacles; // declarando variavel para validar utilização da criação de 
class generate_obstacles  {
    constructor(delay,game_status){
        this.delay = delay;
        this.game_status = game_status;
        this.init();
    }
    init(){
        setTimeout(()=>{
            this.init = setInterval(()=>{
                if(properties.game_status){
                    let ob = new obstacle();
                    //alert(properties.game_status)
       
                    obstacles.push(ob);
                    for(let c=0; c<=obstacles.length;c++){
                        if(obstacles[c].x<=0){
                            obstacles.splice(c,1)
                            properties.score +=1;
                            document.querySelector('#score').innerHTML = properties.score;
                           console.log(`item ${obstacles[c]} foi excluido`)
                        }
                    }
                }; 
            },5000)
        },this.delay)
    }
    kill(){
        clearInterval(this.init)
    }
}

// definindo valores padrões, que não seram afeados com as interações
// estes valores devem corresponder inicialmente aos valores da variavel block
const default_value = {
    x:20, 
    y:canvasHeight/2.5,
    w:25,
    h:25
}

// configurando personagem principal
//
var block = {
    x:20, 
    y:canvasHeight/2.5,
    w:33, // 33
    h:24,  // 24
    onJumping:0, // função que valida se o objeto esta pulando  
    velocity:20, // velocidade que o usuário sobe
    draw(x){
        if(!x || x==null) return false
        var sy;
        if (x==1) sy = 0;
        if (x==2) sy = 26;
        if (x==3) sy = 52;

        return ctx.drawImage(img,
            0,sy,
            this.w,this.h,
            this.x,this.y,
            this.w,this.h,
        ); 
    }
}
