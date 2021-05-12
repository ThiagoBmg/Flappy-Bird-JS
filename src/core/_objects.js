// Arquivo destinado a criação de objetos que seram futuramente renderizados no canvas
//
//


// pegando os elementos e armazenando em constantes para utilizarmos na criação do projeto
//
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d'); 

// guardando o tamanho do canvas para utilizar nas medidas de limites e definir as areas de impacto do jogo 
//
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// definindo valores padrões, que não seram afeados com as interações
// estes valores devem corresponder inicialmente aos valores da variavel block
const default_value = {
    x:20, 
    y:canvasHeight/2.5,
    w:25,
    h:25,
    color: 'black'
}

// configurando personagem principal
//
var blocka = {
    x:20, 
    y:canvasHeight/2.5,
    w:25,
    h:25,
    color: 'black',
    onJumping:0, // função que valida se o objeto esta pulando 
    velocity:50,  
    draw:function(){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}

var block = {
    x:20, 
    y:canvasHeight/2.5,
    w:25,
    h:25,
    color: 'black',
    onJumping:0, // função que valida se o objeto esta pulando 
    velocity:50,  
    draw:function(){
        let img = document.querySelector('#birdRed'); 
        img.addEventListener('load', ()=>{
            ctx.drawImage(img, 20,0 )
        })
        

       /*  ctx.fillStyle = 'black';
        ctx.fillRect(this.x,this.y,this.w,this.h); */
    }
}

// definindo texto do  titulo no canvas 
//

ctx.drawImage(document.querySelector('#birdYellow'), 0,0)
