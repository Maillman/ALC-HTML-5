
//Single line comment
/* 
Multiline comment
*/
//alert("Warning Will Robinson ... Warning!");

//confirm("Do you like Pokemon?");

//prompt("What is your favorite Pokemon?")

//I would like to thank a lot of my friends especially Matt. He helped me with most of the functions, especially outside of the game. Which would explain why my code looks a lot like his code.
//I also really liked most of his ideas and most of his system, so it ends up almost exactly the same.
//The things that are entirely unique are most of the enemies, endings, some differences in the combat system, as well as couple of the descriptions of the areas.
//Think of it like an alternate universe sort of deal, where this universe is a lot more wacky!

//create already variable to avoid displaing the area description redundantly.
var already = [
	//Town Square 0
	false, 
	//Outside castle 1
	false, 
	//castle gates 2
	false,
	//Inside castle 3
	false,
	//guard barracks 4
	false, 
	//East way 5
	false, 
	//Blocked path 6
	false, 
	//Outskirts 7
	false,
	//Forest 8
	false,
	//base 9
	false];
//make a check inventory function for the player to check their inventory
var checkInv = function()
{
	if(sword == true){
		if(inventory.bow == false)
		{
			alert(inventory.playerName + "'s inventory \n You are: " + inventory.occupation + "\n gold: " +inventory.gold + "\n Weapons: dagger, sword \n Armor: " + inventory.armor + "\n Shield: " + inventory.shield);
		}
		else{
			alert(inventory.playerName + "'s inventory \n You are: " + inventory.occupation + "\n gold: " +inventory.gold + "\n Weapons: dagger, sword, bow \n Armor: " + inventory.armor + "\n Shield: " + inventory.shield);
		}
	}
	else
		{
			alert(inventory.playerName + "'s inventory \n You are: " + inventory.occupation + "\n gold: " +inventory.gold + "\n Weapons: dagger \n Armor: " + inventory.armor + "\n Shield: " + inventory.shield);
		}
    if(inventory.captainsOrders == true)
    {
        alert("You have the Captain's Orders");
    }
    else{
        
    }
    if(inventory.generalsOrders == true)
        {
            alert("You have the General's Orders");
        }
    if(inventory.lantern == true)
    {
        alert("You have a lantern");
    }
}
//create a function to check gold
var checkGold = function()
{
	alert ("You have " + inventory.gold + "gold")
}
//create a function to check status
var checkStatus = function()
{
	alert("Health: " +playerStatus.health);
}
//create variable object for inventory
var inventory = {
	playerName: "",
	occupation: "unemployed",
	gold: 150,
	sword: false,
	dagger: false,
	shield: "none",
	bow: true,
	armor: "plain clothing",
    armorType: "none",
	captainsOrders: false,
	quest: "",
    questCompletion: false,
	lantern: false,
	generalsOrders: false,
}
//create variable object for player's stats
var playerStatus = {
    health: 5,
} 
//Create enemy constructuor to easily pass to the Combat function
function Enemy(health, stun, name)
{
    //create variables for the enemy's stats
	this.health = health;
    //create variable for the enemy's stun status
    this.stun = stun;
    //create variable for the enemy's name
    this.name = name;
    this.attack = function()
    {
        var enemyHit = Math.random() * 100;
        if(enemyHit >= 40 && enemyHit != 100)
            if(playerStatus.health > 0)
            {
                alert("The " + this.name + " was able to get a hit in, but couldn't do any more!");
                playerStatus.health --;
            }
            else 
            {
                alert("The " + this.name +" attempts to use sheer strength to make a donut out of you!");
                if(inventory.armorType == 'none')
                    {
                        playerStatus.health = 0;
                    }
                else if(invenory.armorType == 'Heavy')
                {
                    alert("Fortunately, the armor you were wearing was too powerful for the " + this.name + " to punch a hole through");
                }
                else
                {
                    alert("Fortunately, your armor slowed the blow enough so you wouldn't become a donut!");
                    playerStatus.health --;
                    
                }
            }
        else if(enemyHit == 100)
        {
            alert("The " + this.name + " gives you a pretty bad beating.");
            playerStatus.health -=3;
        }
        else
        {
            alert("The " + this.name + " is too scared to even attack you");
        }
    }
    
}
//creating a town hero status variable. I might make this affect an ending I'm not to sure yet.
var legendary = false;
//create a ending variable to determine which ending the player got when the game over function is active
var ending = '';
var merchantInv =
    {
        sword: 500,
        bow: 70, 
        lantern: 15,
        heavyArmor: 100,
        lightArmor: 500,
        shield:15,
    }
//create a combat function
function Combat(enemy)
{
    var victory;
    //inform the on what enemy they are fighting
    alert("You encounter a " + enemy.name + "! \n LOL, ur gonna die now.");
    while(enemy.health > 0 && playerStatus.health > 0)
   {
       //D&D RNG
        var hit = Math.random() * 100;
       //prompt the user to do something
        var fight = prompt("what are you going to do? \n attack with something \n flee \n defend").toLowerCase();
       //create a switch statement to help determine what the player does in battle
        switch(fight)
        {
        //If the player wants to attack?
            case 'attack':
            var attack = prompt("What are you attacking with?").toLowerCase();
            switch(attack)
            {
                case'sword':
                case'attack with sword':
                    if(hit >= 20 || enemy.stun == true)
                     {
                        alert("You easily stab your sword through the " + enemy.name + "!");
                         enemy.health -=2;
                    }
                        else
                    {
                        alert("You were pretty slow with your attack and the  " + enemy.name + " is faster than your attack, he dodges your cross slash! \n Wait is this final fantasy now?");
                    }
                    break;
                case'dagger':
                case'attack with dagger':
                    if(hit >= 30 && inventory.dagger == true)
                        {
                            alert("You manage to slash the " + enemy.name + " with your dagger.");
                            enemy.health --;
                        }
                        else if(inventory.dagger == false)
                        {
                            alert("You don't have a dagger on you right now!");      
                        }
                        else
                        {
                            alert("The " + enemy.name + " jumps away before you can hit it!");
                        }
                        break;
                    case'bow':
                    case'attack with bow':
                        if(hit <= 30 && inventory.bow == true)
                        {
                                alert("Your arrow goes straight through the " + enemy.name + "'s heart");
                                enemy.health == 0;
                        }
                        else if(hit >= 50 && inventory.bow == true)
                        {
                                alert("You manage to hit the " + enemy.name + " in the leg!");
                                enemy.health --;
                                enemy.stun = true;
                        }
                        else if(inventory.bow == false)
                        {
                            alert("You don't have a Bow!");
                        }
                        else
                        {
                            alert("With ease, the " + enemy.name + " manages to dodge your arrow!");
                        }
                            break;
                    case'fist':
                    case'attack with fist':
                    case'nothing':
                    case'attack with nothing':
                        if(hit >= 70)
                        {
                            alert("You somehow manage to punch the " + enemy.name +"!")
                        }
                        else
                        {
                            alert("Your dumb move is easily countered by " + enemy.name + "!");
                            playerStatus.health--;
                        }
					break;
				default:
						
                                                        
            }
                    break;
            case 'sword':
            case 'attack with sword':
                if (hit >= 20 || enemy.stun == true) {
                    alert("You easily stab your sword through the " + enemy.name + "!");
                    enemy.health -= 2;
                }
                else {
                    alert("You were pretty slow with your attack and the  " + enemy.name + " is faster than your attack, he dodges your cross slash! \n Wait is this final fantasy now?");
                }
                break;
            case 'dagger':
            case 'attack with dagger':
                if (hit >= 30 && inventory.dagger == true) {
                    alert("You manage to slash the " + enemy.name + " with your dagger.");
                    enemy.health--;
                }
                else if (inventory.dagger == false) {
                    alert("You don't have a dagger on you right now!");
                }
                else {
                    alert("The " + enemy.name + " jumps away before you can hit it!");
                }
                break;
            case 'bow':
            case 'attack with bow':
                if (hit <= 30 && inventory.bow == true) {
                    alert("Your arrow goes straight through the " + enemy.name + "'s heart");
                    enemy.health == 0;
                }
                else if (hit >= 50 && inventory.bow == true) {
                    alert("You manage to hit the " + enemy.name + " in the leg!");
                    enemy.health--;
                    enemy.stun = true;
                }
                else if (inventory.bow == false) {
                    alert("You don't have a Bow!");
                }
                else {
                    alert("With ease, the " + enemy.name + " manages to dodge your arrow!");
                }
                break;
            case 'fist':
            case 'attack with fist':
            case 'nothing':
            case 'attack with nothing':
                if (hit >= 70) {
                    alert("You somehow manage to punch the " + enemy.name + "!")
                }
                else {
                    alert("Your dumb move is easily countered by " + enemy.name + "!");
                    playerStatus.health--;
                }
            case'run':
            case'run away':
                if(hit <= 65)
            {
                alert("You manage to run away, all the way back to the Town Square!");
                TownSquare();
            }
            else
            {
            alert("You try your best to get away, but you can't lose the " + enemy.name + ". You decide it is not better to flee as of this moment.");
            }
                break;
            case'defend':
            case'block':
                if(inventory.shield == 'none')
                {
                    if(hit >= 60)
                    {
                        alert("Your skill and preparation managed to block the " + enemy.name + "'s attack");
                        enemy.stun == true;
                                                            
                    }
                    else
                    {
                        alert("Without a shield, you can't do anything to stop the " + enemy.name + "'s attack. He manages to get a blow in.");
                        playerStatus.health --;
                        enemy.stun == true;
                    }
                }
                else
                {
                    alert("You easily defend against the attack with a shield, and easily stun the " + enemy.name);
                    enemy.stun == true;
                }
                break;
            default:
            alert("I don't seem to understand " + enemyFight );
        }
        if(enemy.stun == false && enemy.health >0)
        {
            enemy.attack();
        }
       else
        {
            alert("The enemy is stunned and cannot attack! \n Now is your chance!");
        }
    }
    if(playerStatus.health <= 0)
       {
        alert("You have realized that it is over for you. \n unfortunately your going to have to retire now!");
        GameOver();
       }
    else
    {
        alert("You have defeated the " + enemy.name + "\n Play Final Fantasy Fanfare");
        victory = true;
        return victory;
    }
}
var GameOver = function()
{
    if(ending == 'Dead in the Forest')
        {
        alert("Ending:"+ ending + "\n " + player.name + ": Retired");
        }
    else if(ending == 'Simple Life')
        {
            alert("As you begin to work in the bakery, you start to think to yourself. Perhaps this it. Maybe I need to have a quiet peaceful life. Before you know it you have that quiet and peaceful life you always wanted. \n" +  player.name + ": Retired  Status: Well \nEnding:" + ending);
        }
     else if(ending == 'True Hero')
        {
            alert("As you enter the castle, the King sits on his throne. You walk in front of him and kneel. The King decrees you a worthy hero and gives you 1000 gold. He then names you a Knight in his Kingdom. You humbly accept his gifts and swear loyalty to him and, more importantly, the people. For the rest of your life, you live as the Hero of Eukeria. Really you live every day wondering what adventures the day has in store.\nEnding:" + ending);
        }
    else if(ending == "King of Darkness")
        {
            alert("As you put your sword down and help the stand up. She shows you her evil plot to take over the Kingdom. Within the next week, you and Delilah the Dreadful sit in the throne. It sure is nice to have a kingdom, but wouldn't it be better if you controlled the world?\nEnding:" + ending);
        }
        else if(ending == "Crafty Tactition")
        {
            alert("It seems that the enemy is actually willing to negotiate, with your crafty tactition skills, you manage to come to come up with a compromise with the enemy general. You decide that you like him and you become friends with him for life. As you return to Eukeria, the King holds a parade in your honor and offers you the position of Advisor. Seems like being friendly turned out to be the right thing.")
        }
        else if(ending == "Ruthless War Hero")
        {
            alert("You stand in the blood of your enemies, you see the white flag wave above the enemy camp. You managed to defeat them! You begin to wonder if you made the right choice. These thoughts subside soon after you make it back to town. The town declares you a hero, and the King even promotes you much higher in the ranks.\nEnding:" + ending);
        }
        else if(ending == 'Enemy of the Evil Spirits')
            {
                alert("As you walk into the throne room, the King congratulates you on your Triumph. He hands you the gold and offers you the position of Knighthood. You refuse his offer. You don't think the title 'Knight' suits you very well. Instead, you prefer the term Bounty Hunter. As you leave the castle, you see another wanted poster for the local Theives Guild especially in particular to a stand user. Looks like you found your next target\nEnding:" + ending);
            }
    else
    {
        alert("GAME OVER");
    }
    //Ask the user if they would like to play again and create a switch function to restart the game if they do wish to play again
    var restart = confirm("Would you like to play again? Press OK to restart the game");
        switch(restart)
        {
			case true:
               document.location.reload();
                break;
			case false:
                window.close();
                break;
            default:
                document.location.reload();     
        }
}

Game();

function Game(){
	//state the title of the game
	alert("Eukeria");
	//ask for the player's name and store the name
	inventory.playerName = prompt("What is your name?");
	alert("Welcome to the kingdom of Eukeria, " + inventory.playerName);
    alert("You start with 150 gold, common clothes, and a bow!");
	//create the town square function
	TownSquare();
	function TownSquare()
	{
		//ask the user what they would like to do in the town square and display the description of the Town Square based on whether or not 
		if(already[0] == false)
			{
			var townSquare = prompt("Welcome to the capitol city of Eukeria. You stand in the town square. the city is full of life all around you.  There is a path to the north heading towards the castle. There is what appears to be a bulletin board with several advertisements. There are also a path to the East, but you don't know what is over there. The path to the South leads to the outskirts of town. The path to the West appears to be blocked by some guards. What are you going to do? \n go somewhere. \n investigate the bulletin board \n check inventory or gold \n check player status \n look around again (this option will give the discription of the current area)").toLowerCase();
			already[0] = true;
			}
		else{
			var townSquare = prompt(" You stand in the town square. What are you going to do? \n go somewhere. \n investigate bulletin board \n check inventory, status, or gold \n look around again").toLowerCase();
		}
		   switch (townSquare) 
		   {
				   //case: user wants to go somewhere, but forgets to input a place
			   case "go": 
			   case "go somewhere":
				   var direction = prompt("Where would you like to go?\n North, to the castle\n South, to the town outskirts\n West to the blocked path\n East to the unkown path\n do something else (typing 'back' will return you to the previous options in all cases)").toLowerCase();
				   switch(direction) 
				   {
						   //case: the user wishes to go North to the Castle
					   case"north": 
					   case"castle":  
					   case"go north":
						   Castle();
						   break;
						   //case: the user wishes to go South to the town Outskirts
					   case"south": 
					   case"outskirts":  
					   case"go south":
						   Outskirts();
						   break;
						   //case: the user wishes to go west to the path blocked by guards
					   case"west": 
					   case"blocked path": 
					   case"go west":
						   BlockedPath();
						   break;
						   //case: the user wishes to explore the path to the east
					   case"east": 
					   case"unknown path": 
					   case"unknown": 
					   case"go east":
						   East();
						   break;
					   case "back":
						   TownSquare();
					   default:
						   alert("I don't understand " + direction);
						   TownSquare();    
                   }
				   //case: the user wishes to go North to the castle
			   case"north": 
			   case"go castle": 
			   case"go to the castle": 
			   case"go north":
				   OutsideCastle();
				   break;
				//case: the user wishes to go South to the town Outskirts
			   case"south": 
			   case"go to outskirts":  
			   case"go south" :
				   Outskirts();
				   break;
				//case: the user wishes to go west to the path blocked by guards
			   case"west": 
			   case"go to blocked path": 
			   case"blocked path": 
			   case"go west":
				   BlockedPath();
				   break;
				//case: the user wishes to explore the path to the east
			   case"east":
			   case"go to unknown path":
			   case"unknown path": 
			   case"go east":
				   East();
				   break;
				   //case: the user wishes to speak to talk to the merchant
			   case"talk to merchant": 
			   case"talk":  
			   case"merchant":
				   Merchant();
				   break;
				   //case: the user wishes to investigate the bulletin board
			   case"investigate": 
			   case"investigate bulletin board":
               case"bulletin board":
					BulletinBoard();
			         break;
                   //case: the user wishes to look around again
               case"look":
               case"look around": 
               case"look again":
                   already[0] = false;
                   TownSquare();
				   break;
				case"check inventory":
				case"inventory":
                   checkInv();
                   TownSquare();
				   break;
				case"check gold":
				case"gold":
				   checkGold();
				   TownSquare();
				   break;
				case"check status":
				case"check stats":
				case"status":
				case"stats":
				    checkStatus();
                    TownSquare();
				   break;
				default:
						alert("I don't understand " + townSquare);
						TownSquare();
           }
				   
        }
	//create the Outside Castle function
	function OutsideCastle()
	{
		//if the user has not been here before describe the area and ask the user what they would like to do
		if(already[1] == false)
			{
				
				var Outsidecastle = prompt("You walk to the Castle gates. When you arrive, the gates to the north are open and two guards stand at attention one of them looks like they have seen things before. There is a path that leads West towards the guard's barracks. By going south you can go back to the Town Square. What are you going to do? \n Talk to guards\n Go somewhere").toLowerCase();
				already[1] = true;
			}
		else
			{
				var Outsidecastle = prompt("You stand at the Castle gates. What are you going to do? \n Go somewhere \n Talk to the guards").toLowerCase();
			}
		//take the user's input and apply it accordingly
		switch(Outsidecastle)
		{
				//case: the user wants to go somewhere but doesn't input where
			case "go somewhere":
			case "go":
				var direction = prompt("Where would you like to go? \n north, Inside the castle\n West, to the guard barracks\n South, back to Town Square").toLowerCase();
				switch(direction){
					//case: the user wishes to go in the castle
					case "go north":
					case "north":
					case "go inside castle":
					case "castle":
						CastleGates();
						break;
					//case: the user wishes to go to the guard barracks
					case "go to guard barracks":
					case "go west":
					case "west":
						GuardBarracks();
						break;
					//case: the user wishes to return to town square
					case "go to sown square":
					case "town square":
					case "go south":
					case "south":
						TownSquare();
						break;
					case "back":
						OutsideCastle();
						break;
					//the user inputs something we don't understand or we can't do anything
					default:
						alert("I don't understand, " + direction + " or you cannot do that here.")
						OutsideCastle();
				}
				break;
				//case: the user wants to go to the castle
			case "go north":
			case "north":
			case "go to castle":
			case "castle":
				CastleGates();
				break;
			//case: the user wishes to go to the guard barracks
			case "go to guard barracks":
			case "guard barracks":
			case "go west":
			case "west":
				GuardBarracks();
				break;
				//case: the user wishes to go back to town Square
			case "town square":
			case "go south":
				TownSquare();
				 break;
				//case: the user wishes to speak to the guards
			case "talk to guards":
			case "talk":
			case "guards":
				CastleGates();
				break;
			default:
				alert("I don't understand '" + Outsidecastle + "' or you cannot do that here");
				OutsideCastle();
				
		}
		
	}
	///create castle gates function
	function CastleGates()
	{
		//the user attempts to go into the castle for the first time
		if(already[2] = false)
		{
			already[2] = true;
			alert("The guards stop you and say, 'What business do you have around here?'")
			// the player has not joined yet
			if(inventory.occupation != "soldier"){
				var guards = prompt("What do you say to them? \n 1 - 'just looking around' \n 2 - 'I'd like to join the guard'.").toLowerCase();
			}
			// the player has already joined
			else if (legendary = true) 
			{
				alert("The guards salute you as you walk inside. They know who you are.");
				InsideCastle();
			}
			else{
				alert("The guards stop you and say, 'What business do you have around here?'");
				var guards = prompt ("What do you say to them? \n 1 -'just looking around' \n 2 - Make a slight chuckle then say 'Soldier " + inventory.playerName + " reporting for duty");
			}
		}
		else if (inventory.occupation != "soldier" || inventory.occupation != "knight" || inventory.occupation != "commander" || inventory.occupation != 'captain' || inventory.occupation != "guard" || legendary != true)
		{
			alert("The soldiers stop you and say, 'Seriously, What do you want?'");
			var guards = prompt("What do you say to them? \n 1 - 'just looking around' \n 2 - 'I'd like to join the guard'.").toLowerCase();
		}
		else
		{
			alert("The guards salute you as you walk inside");
			InsideCastle();
		}
		switch (guards)
			{
				case "1":
					alert("The guards say, 'I'm afraid we can't let you pass.'");
					break;
				case "2":
					if(inventory.occupation != "soldier")
						{
							alert("One of the guards tells you, 'You are going to want to head west of here to the guard barracks, then.");
							OutsideCastle();
						}
					else
						{
							alert("One of them say, 'Ok MR. JOESTER!' they get out of your way and salute you as you walk into the castle");
							InsideCastle();
						}
					
					break;
			}
		
	}
	//create guard barracks function
	function GuardBarracks()
	{
	while (playerStatus.health > 0)
		{   
        //check to see if the player has been here already
			if(already[4] == false){
			var captain = prompt("As you enter the Barracks, you see someone wearing a Captain's Uniform sitting at a table writing something down. She notices you walk in. She put's down his quill, and says 'I am Captain Savar, What can I do for you?' what is your response'\n 1 - I am looking for work. \n 2 - I am looking to join the guard \n 3 - Just looking around.").toLowerCase();
				already[4] = true;
			}
            //check to see if the player has completed their quest yet
            else if(inventory.quest == 'Unrest in the West' && inventory.questCompletion == true) 
            {
                alert("The Captain stands up and says, 'You actually manged to do it! Congradulations, the King wishes to speak to you and reward you personally, you should see him at once.' He leads you to the inside of the Castle");
                InsideCastle();
            }
            //allow the player to sleep if they do have the quest
            else if(inventory.quest == 'Unrest in the West' && inventory.questCompletion == false)
            { 
                    var guardBarracks  = prompt('The guard barracks seem to be empty, Would you like to go to sleep? \n Y/N?').toLowerCase();
                    if(guardBarracks == 'y'){
                        alert('You go to sleep in one of the beds, you are well rested and recover to full health');
                        playerStatus.health = 5;
                        OutsideCastle();
                    }
                else
                {
                    OutsideCastle();
                }
            }
            //check to see if the player is a soldier or guard
            else if (inventory.occupation == 'soldier' || inventory.occupation == 'guard')
            {
                //allow the player to rest here if their occupation is correct
                var guardBarracks  = prompt('The guard barracks seem to be empty, Would you like to go to sleep? \n Y/N?').toLowerCase();
                    if(guardBarracks == 'y'){
                        alert('You go to sleep in one of the beds, you are well rested and recover to full health');
                        playerStatus.health = 5;
                        OutsideCastle();
                    }
                else{
                    OutsideCastle();
                }
                
            }
            
            else{
			     var captain = prompt( "'I am Captain Savar, What can I do for you?' what is your response'\n 1 - I am looking for work. \n 2 - I am looking to join the guard \n 3 - Just looking around.");
				}
            //Make a switch function to talk to the Captain
            switch(captain)
				{
                        //the player wants to help out without getting a job
					case '1':
						var westQuest = prompt("Captain Savar says, 'Well if that is the case, there's some trouble on the West side of town. The guard there can give you some more information. Just head to the TownSquare and head west. You sure you are up to it?'\n Do you accept this quest? Y/N ").toLowerCase();
						if(westQuest == 'y' || 'yes' || 'ye')
							{
								alert("'Very well then, report back to me when you are done.'\n You have the Captain's Orders \n You have now begun the quest, Unrest in the West");
                                inventory.captainsOrders = true;
								inventory.quest = "Unrest in the West";
								GuardBarracks();
							}
						else
						{
							alert("'Well, let me know if you change your mind'");
							guardBarracks();
						}
					
						break;
					case'2':		
						var recruitment = prompt("'Is that so? Well, we certainly could use the help! Would you like to be a soldier or just a town guard? \n 1 - soldier \n 2 - guard \n 3 - I changed my mind.").toLowerCase();
						switch(recruitment){
							case '2':
							alert("'Okay then, give me just a second', Captain Savar goes through a door on the left and returns with a uniform, a sword, and a shield. 'Here is your equipment, put these on and report to the West of Town Square. You are also welcome to sleep here whenever you'd like, just don't slack off.'\n You change into your new uniform \n You're occupation is now guard\n You now have the Captain's Orders \n You have started the quest, Unrest in the West ");
							inventory.occupation = 'guard';
							inventory.quest = 'Unrest in the West';
							inventory.sword = true;
							inventory.shield = 'Wood Shield';
                            inventory.armor = "Guard armor"
                            inventory.captainsOrders = true;
                                OutsideCastle();
						break;
                            case '1':
                            alert("'Okay then, give me just a second', Captain Savar goes through a door on the left and returns with a uniform, a sword, and a shield. 'Here is your equipment, put these on and report to General Karma near the Outskirts of Town. You are also welcome to sleep here whenever you'd like, just don't slack off.'\n You change into your new uniform \n You're occupation is now soldier \n You have started the quest, Soldier of Eukeria");
							inventory.occupation = 'soldier';
							inventory.quest = 'Soldier of Eukeria';
							inventory.sword = true;
							inventory.shield = 'Crested Shield';
                            inventory.armor = "Soldier Uniform";
                                OutsideCastle();
                        break;
                    case'3':
                                alert("'In that case, I'm going to have to ask you to leave. I am very busy here.'");
                                OutsideCastle();
						}
						break;
					default:
							alert("'Sorry, I'm not quite sure I understand what you mean', he says.");
							GuardBarracks();
                }
		}
	}
	//create OUtskirts function
    function Outskirts()
    {
		if(already[7] == false )
		   {
            already[7] = true;
		   	alert("You walk out to the outskirts of town and see, what appears to be a military base. There is also a path that continues Southward.")
			   var outskirts = prompt("What are you going to do? \n go somewhere \n investigate the base").toLowerCase();
		   }
		else
		{
			if(inventory.occupation == 'soldier'){
				var outskirts = prompt("What are you going to do? \n go somewhere \n report to base.").toLowerCase();
			}
			else{
				var outskirts = prompt("What are you going to do? \n go somewhere \n investigate the base").toLowerCase();
			}
        }
			switch (outskirts)
            {
                case "go": 
			    case "go somewhere":
				   var direction = prompt("Where would you like to go?\n North, back into town \n South, even further away from town\n ").toLowerCase();
				   switch(direction) 
				   {
						   //case: the user wishes to go North to the Castle
					   case"north": 
					   case"town square":  
					   case"town": 
					   case"go north":
						   TownSquare();
						   break;
						   //case: the user wishes to go further out of town
					   case"south": 
					   case"further away": 
					   case"further": 
					   case"go south":
						   Forest();
						   break;
						   //case: the user wishes to the military encampent
					   case"base": 
					   case"camp": 
					   case"go to base": 
						   base();
						   break;
						   //case: the user wishes to return 
					   case "back":
						   Outskirts();
						   //default: we don't understand the input and return the user to the town outskirts
					   default:
						   alert("I don't understand " + direction);
						   Outskirts();   
				
			         }
					break;
				case'report':
				case"base": 
				case"go to base": 
				case'investigate':
				case'investigate base':
					base();
					break;
				case"south": 
				case"go south":
					Forest();
				    break;
                case"north":
                case"town":
                case"go north":
                case'town square':
                case'go to town':
                case'go town':
                    TownSquare();
                    break;
					default:
					alert("I don't understand " + outskirts);
					Outskirts();   
			}
		
    }
    function BlockedPath()
    {
        //check to see if the player has the captain's orders
        if(inventory.captainsOrders == true)
            {
                //ask the player if they want to initiate the fight
                var standfight = confirm("You show the guard the Captain's Orders, he salute's you and says, 'I am Kim, the evil stand user DIO is up to no good. Everyone is to scared to fight him, even me! Are you sure you want to fight him now?'(Pressing OK will proceed to the fight)");
                if(standfight == true)
                {
                    //create a stand enemy
                    var stand = new Enemy(5,false,"Stand User");
                    //initate combat and set it to the stand defeat to trigger some possible endings
                   var standDefeat = Combat(witch);
                    if(standDefeat == true)
                        {
                            alert("She isn't as strong as you thought she was, As she lays on the ground and you are about to land the final strike the stand says something.")
                            var finalChoice = confirm("He says, 'It's a shame that we could not rule together, unless you spare me. We could easily take this kingdom order if you spare me.' Do you spare DIO? (press OK to spare)").toLowerCase();
                            if(finalChoice == true)
                                {
                                    ending = 'King of Darkness';
                                    GameOver();
                                }
                            else{
                                inventory.questCompletion = true;
                                alert("'Never!' you shout as you strike the final blow! The stand user screetches and yells 'How could I, DIO, be defeated so easily' before turning to dust. You reply by saying, 'The only reason you lost, was because you pissed me off.' You take his very unique and style of clothes as you walk back into the town square. Astonished at your immense abilites, everyone cheers and carry you to the captain.");
                                legendary == true;
                                GuardBarracks();
                            }
                            
                        }
                    
                }
            }
		
	}
    function East()
	{
        if(already[5] == false)
            {
                already[5] = true;
                var East = confirm("As you walk further down the road, you begin to smell something nice. You can see the smell is coming from a store called 'Kira's Bakery' do you want to go inside?(press OK to go inside)");
            }
        else
            {
                var East = confirm("You smell the sweet smell from the bakery, go inside?(press OK to go inside)");
            }
        if(East == true)
                    {
                       var simpleEnding = confirm("You walk into the bakery, someone greets you and says, are you here to answer my help wanted ad?");
                        if(simpleEnding == true)
                            {
                                ending = 'Simple Life';
                                GameOver();
                            }
                        else
                            {
                                alert("'Oh really that's a shame, well let me know if you change your mind' You step outside of the Bakery");
                                East();
                                
                            }
                    }
        else
        {
            TownSquare();
        }
		
	}
    //create forest function
	function Forest()
	{
		//ask the player if they would like to enter the forest
		var forest = prompt("The forest seems pretty dark and scary, are you sure you want to go in there? You could die!(Y/N)").toLowerCase();
		
        do {
		switch(forest)
			{
				case "y":
				case"yes":
				case "ye":
                    //create explore variable, should the player wish to keep investigating the forest
                    var explore = true;
					//if the player has the generals's orders and a lantern, they get through the forest safely
					if(inventory.generalsOrders == true && inventory.lantern == true)
						{
						alert("Thankfully, General Karma included a map with his orders. With the help of the lantern he gave you, you manage to find the other soldiers just fine");
							Battlefield();
						}
                    //if the player goes through the forest with a lantern and without the captain's orders, the player has a chance to encounter an enemy
					else if(inventory.lantern == true)
						{
                            //random encounter
							var encounter = Math.random() * 100;
							//If the player encounters an enemy
							if(encounter >= 50)
                            {
								alert("As you aimlessly wander around the forest, you begin to hear growling and the rustling of leaves");
								boi = new Enemy(3,false,'Rando boi who is ur enemy');
                                Combat(boi);
							}
							//the player doesn't encounter an enemy
                            else
                            {    
                             alert("The forest continues to loom as you walk, but nothing happens.")   
                            }
						}
                    else
                        {
							//the player doesn't have any items needed to go through the forest safely, and gets a game over
                            alert("As you stumble around in the darkness, you manage to trip on a rock and hit your head! It must have been a hard hit, because you just died.");
                            ending = 'Dead in the Forest';
                            GameOver();
							explore = false;
                        }
                
					break;
				case'n':
				case'no':
					Outskirts();
					break;
				default:
					alert("I don't understand" + forest);
					Forest();
            }
			//if the player wishes to continue exploring the forest
			if(explore == true){
             forest = prompt("Would you like to keep exploring the Forest?(Y/N)").toLowerCase();
			}
			}
        while (explore == true)
		}
	}
    //create base function
	function base()
	{
        //if the player has not enlisted in the army, 
		if(inventory.occupation == 'soldier')
            {
                alert("The soldiers at the entrance salute you as you walk in. You walk to the main tent and General Karma looks at you and says, 'You must be a new soldier, good! I need you to head south through the forest and join the men preparing an ambush on the enemy's main base! Here's a map and a lantern to help you get through.\nyou now have a lantern\nyou now have the General's Orders.");
                inventory.lantern = true;
                inventory.generalsOrders = true;
                Outskirts();
            }
        else
        {
            alert("As you try to walk in, the soldiers at the enterance and immediately stop you. 'This area is not open to civilians. If you are interested in joining the army, you should speak to Captain Savar at the guard barracks West of the Castle.'");
                Outskirts();
        }
        
	}
    //create battlefield function
    function Battlefield()
    {
        alert("You meet your fellow soldiers and report to the captain. The captain looks at you and says 'We have quite the situation here, they say they want to negotiate, but no one here is actually going to go down there and negotiate. They don't seem to be on guard, do you think we should attack?");
        var battlefield = confirm("Will you negotiate? (press OK to negotiate)");
        if(battlefield == true)
            {
                alert("'No', you say 'Good Grief! \n I volunteer to go negotiate. If I don't come back, take these guys out' You walk towards they enemy base with your hands up.");
                ending = 'Crafty Tactition';
                GameOver();
            }
        else
            {
                alert("You say, 'Let's just take these guys out, once and for all! FOR EUKERIA!' and you lead the charge into battle!");
                var enemysoldier1 = new Enemy(2,true,"Enemy Soldier");
                var enemysoldier2 = new Enemy(2, true, "Enemy Soldier");
                var enemysoldier3 = new Enemy(1, true, "Enemy Soldier");
                var enemysoldier4 = new Enemy(1, true, "Enemy Soldier");
                var victory1 = Combat(enemysoldier1);
                var victory2 = Combat(enemysoldier2);
                var victory3 = Combat(enemysoldier1);
                var victory4 = Combat(enemysoldier2);
                if(victory1 == true && victory2 == true && victory3 == true && victory4 == true)
                {
                    alert("Dang you managed to take all of them down. That is great for you!")
                        ending = 'Ruthless War Hero';
                        GameOver();
                    }
            }
    }
    //bulletin board function
	function BulletinBoard()
	{
        //give the player some leads as to what to do
        alert("On the bulletin board you see several annoncements and help wanted posters, there are a few things that catch your eye:\n Want to be a guard or soldier? Report to the Guard's Barracks at the West of the Castle\nHelp Wanted, Kira's bakery on the East side of town.\n WANTED: Definitely Dead, DIO REWARD: 1000 GOLD. SEE CAPTAIN SAVAR FOR MORE INFORMATION");
        TownSquare();
	}
    function InsideCastle()
    {
        if(legendary == true && inventory.occupation == 'guard')
            {
                ending = 'True Hero';
                GameOver();
            }
        else if(legendary == true && inventory.occupation != 'guard')
            {
                ending = 'Enemy of the Evil Spirits';
                GameOver();
            }
        else
            {
            alert("Suprisingly there is nothing to see here, so you just walk back outside");
            OutsideCastle();
            
            }
    }