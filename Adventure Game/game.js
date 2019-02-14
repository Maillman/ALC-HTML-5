// Single line comment
/*
Multiline comment
*/

// document.write("I can't wait for <em>joker</em> for Smash DLC!");

// alert("Warning! Will Robinson...Warning!");

// confirm("Do you like pokemon?");

// prompt("What type of pokemon do you like?");
/*
var Position = {
    x: 6,
    y: 9
};
var Inventory = {
    weights: 0,
    pillSleep : 0,
    pillStrength : 0,
    pillSenses : 0
};
*/
Game();

function Game() {
    document.write("Game Name");
    var movementCounter = 0;
    var gametrue = true;
    var response = "";
    var playerName = prompt("What is your name?");
    Start();
    while(gametrue) {
        switch(response){
        case "help":
            alert("")//Need to implement the commands the player can try here.
            break;
        case "quit":
            Gametrue=false;
            break;
        default:
            alert("???");
            movementCounter--;
            break;
        }
                movementCounter++;
        if(movementCounter < 130) {
            Gametrue = false;
        }
    }
}
/*
function Start() {
        var fitnessStart = alert("You have awoken in a strange room " + playerName + ", Yet you don't know how you got there, in fact you don't remember anything. Then you get off the table and look around.");
    }
function Fitnessroom() {
        var fitness = prompt();
        if (fitness == "look around" || fitness == "look") {
            
            var fitnessRoom = prompt("After much inspection around the room it appears that the table near the back of the room is bolted to the floor and unmovable, when you approach the door it opens up. which makes it appear to work like a proximity sensor.").toLowerCase();
            
        }else if (fitness == "exit room" || fitness == "exit") {
            Position.y = 8;
                Innerhallway();
            
        }else if (fitness == "obtain weight" || "obtain") {
            alert("Unfortunately you are unable to pick up the weight.")
            //Inventory.weights += 1;
        }else{
            alert("That isn't one of the options!")
        }
        
}
function Innerhallway() {

        if(Position.y == 8){
            var innerHallwaySouth = prompt("You come to an area of this hallway where there is a door behind you, a door in front of you, and looking to the right there is also a door.").toLowerCase();
        }else if(Position.y == 4){
            var innerHallwayNorth = prompt().toLowerCase();
        }else if(Position.x == 5){
            
        }else{
        }
}
*/