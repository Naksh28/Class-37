class Form {
    constructor(){
        this.title = createElement("h2");
        this.playerName = createInput("Name");
        this.button = createButton("Play");
        this.reset = createButton("Reset");
        this.greeting = createElement("h3");
    }

    Hide(){
        this.title.hide();
        this.playerName.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 -100, 40);
        this.playerName.position(displayWidth/2 -50, displayHeight/2 -50);
        this.button.position(displayWidth/2 -30, displayHeight/2);
        this.reset.position(displayWidth-100, 50);

        this.button.mousePressed( ()=>{
            this.title.hide();
            this.playerName.hide();
            this.button.hide();
            player.name = this.playerName.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome "+player.name);
            this.greeting.position(displayWidth/2 -100, displayHeight/2);
        })
    }
}