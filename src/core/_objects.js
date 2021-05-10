// iniciando o canvas
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d'); 

class Player{
    constructor(){
        this.x = 20;
        this.y = canvas.height - 20;
        this.altura = 20;
        this.largura = 20;
        this.jumpLimit = canvas.height / 2;
        this.onJumping = false;
        this.draw();
    }

    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect( this.x,this.y,this.altura,this.largura);
    }

    update(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        this.draw();
    }
    
    handler(){
        setTimeout(()=>{
            this.update();
            this.jump();
        },0.5)
    }

    jump(){
        if(this.onJumping){
            this.y +=1;
            if(this.y==canvas.height - 19){
                return this.onJumping=false;
            }
            return this.handler(); 
        }

        if(this.y>=this.jumpLimit){
            this.y -=1;
            if(this.y==this.jumpLimit){
                this.onJumping=true;
            }
            return this.handler(); 
        }
    }
}
