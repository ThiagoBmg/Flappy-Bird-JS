// iniciando o canvas
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// criar função de 
var personagemA = {
    x: canvas.width,
    y: canvas.height /2,
    raio: 12 
}

var personagemB = {
    x: 0,
    y: canvas.height / 2,
    altura:20,
    largura: 2
}

canvas.addEventListener('mousedown', ()=>{
    console.log('precionou')
    personagemB.altura +=1;
    desenha()
})

canvas.addEventListener('mouseup', ()=>{
    console.log('soltou')
})


function desenha(){
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(personagemA.x, personagemA.y, personagemA.raio, 0, 2*Math.PI);
    ctx.fill();

    ctx.fill();
    ctx.fillStyle = "red";
    ctx.fillRect(personagemB.x, personagemB.y, personagemB.largura,personagemB.altura)
}

anima

desenha();