var gameState, playerCount, form, game, player, allPlayers, car1, car2, car3, car4, cars, database;

function setup(){
    createCanvas(displayWidth, displayHeight);
    database = firebase.database();

    gameState = 0;

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if (playerCount === 4){
        game.update(1);
    }

    if (gameState === 1){
        game.play();
    }

    if (gameState === 2){
        game.end();
    }

    //drawSprites();
}