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

var img = new Image();
        img.src="https://i.ibb.co/gScv1Gj/pnghut-red-flappy-bird-blue-t-shirt-brand.png";

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

var block = {
    x:20, 
    y:canvasHeight/2.5,
    w:25,
    h:25,
    color: 'black',
    onJumping:0, // função que valida se o objeto esta pulando 
    velocity:50,  
    draw:function(){
        ctx.drawImage(img, this.x , this.y , this.w , this.h);
    }
}
