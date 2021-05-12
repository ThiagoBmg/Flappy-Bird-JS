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
img.src="https://uploaddeimagens.com.br/images/003/237/895/original/sprites.png?1620808687";

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
    w:33,
    h:24, 
    onJumping:0, // função que valida se o objeto esta pulando  
    velocity:30, // velocidade que o usuário sobe
    draw:function(x){
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
