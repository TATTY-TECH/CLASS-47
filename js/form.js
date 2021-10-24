class Form {
        constructor(){
            this.button = createImg("Images/start.png");
        }
        display(){
            

            this.button.position(displayWidth/2-90,displayHeight/2+15);

            this.button.mousePressed(()=>{
                this.button.hide();
                play_effect.play();
                gameState = "play";
            });
        }
};