// Single line comment
/*
Multiline comment
*/

// document.write("I can't wait for <em>joker</em> for Smash DLC!");

// alert("Warning! Will Robinson...Warning!");

// confirm("Do you like pokemon?");

// prompt("What type of pokemon do you like?");
Game();

function Game() {
    
    document.write("Game Name");
    var playerName = prompt("What is your name?");
    
    Start();
    
    function Start() {
        var fitnessStart = prompt("You have awoken in a strange room " + playerName + ", Yet you don't know how you got there, in fact you don't remember anything. /n You get off the table and look around it appears that you are in some sort of a fitness room, there are weights lying around on the floor. You look towards what looks like the front of the room as there is some sort of a door in the wall. \n -Look around \n -Exit Room \n -Lift weight").toLowerCase();
        if (fitnessStart == "look around" || fitnessStart == "look") {
            
            var fitnessRoom = prompt("After much inspection around the room it appears that the table near the back of the room is bolted to the floor and unmovable, when you approach the door it opens up. which makes it appear to work like a proximity sensor.").toLowerCase();
            
        }else if (fitnessStart == "exit room" || fitnessStart == "exit") {
            
                var innerHallwaySouth = prompt("You come to an area of this hallway where there is a door behind you, a door in front of you, and looking to the right there is also a door.").toLowerCase();
            
        }
        
        
    }
    
}