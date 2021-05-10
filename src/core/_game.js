(function main(){
    var player = new Player();
    
    canvas.addEventListener('mousedown', ()=>{
        if(player.onJumping){
            return false
        }
        player.jump();
    });
})()

