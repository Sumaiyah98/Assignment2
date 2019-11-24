var position = [0,0];
var snake1 = 15;
var fallPos1 = 5;
var snake2 = 23;
var fallPos2 = 16;
var ladder1 = 8;
var advancePos1 = 15;
var ladder2 = 19;
var advancePos2 = 24;

function Roll (player){
  x=document.getElementById("ar");
  rolldie = parseInt((Math.random()*6)+1);
  position[player-1]+=rolldie;

  var land = "";

  if(position[player-1]< 25 && position[player-1]=== snake1)
  {
          position[player-1] = fallPos1;
          land = ", You land at position 15, go back to position ";
  }
  else if (position[player-1]< 25 && position[player-1]=== snake2)
          {
            position[player-1] = fallPos2;
            land = ", You land at position 23, go back to position ";
          }
  else if (position[player-1]< 25 && position[player-1]=== ladder1)
            {
            position[player-1] = advancePos1;
            land = ", You land at position 8, advance to position ";
            }
  else if (position[player-1]< 25 && position[player-1]=== ladder2)
                {
                position[player-1] = advancePos2;
                land = ", You land at position 19, advance to position ";
                }
        else {
        land = " , jump to position ";
           }

            if (position[player-1] > 25){

          x.innerHTML += "Player " + player + " rolls...Die: " + rolldie + " congrats you WON!!!\n..Game Over..";
          input = document.getElementById("btn1");
          input.click = true;
          input = document.getElementById("btn2");
          input.click = true;
        }
        
      else
      x.innerHTML += "Player "+ player + " rolls...Die: " + rolldie + land + position[player-1] + "\n";
     }
