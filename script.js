//Array for validation of sqares
squares = [0,0,0,0,0,0,0,0,0,];
//Dependant Variable for ending the game
var winner = false;

//function that dictates the player action
function play(square) {
    //Validating if there is a winner
    if (winner){
        document.getElementById("end").innerHTML = "The Game is over!";
        return;
    }
  //inserts img to dom element on click
    switch (square) {
        case squareOne:
            if (squares[0] == 1){
                document.getElementById("log").innerHTML = "You have already played there!";
            } else if (squares[0] == 2){
                document.getElementById("log").innerHTML = "Your opponent has played there!";
            } else {
            document.getElementById("squareOne").innerHTML = '<img src="img/cross.png">';
            squares[0] = 1;  
            win();
            compMove();
            }
            break;
            
        case squareTwo:
            if (squares[1] == 1){
                document.getElementById("log").innerHTML = "You have already played there!";
            } else if (squares[1] == 2){
                document.getElementById("log").innerHTML = "Your opponent has played there!";
            } else {
            document.getElementById("squareTwo").innerHTML = '<img src="img/cross.png">';
            squares[1] = 1;    
            win();
            compMove();
            }
            break;
            
        case squareThree:
            if (squares[2] == 1){
                document.getElementById("log").innerHTML = "You have already played there!";
            } else if (squares[2] == 2){
                document.getElementById("log").innerHTML = "Your opponent has played there!";
            } else {
            document.getElementById("squareThree").innerHTML = '<img src="img/cross.png">';
            squares[2] = 1;    
            win();
            compMove();
            }
            break;
            
        case squareFour:
            if (squares[3] == 1){
                document.getElementById("log").innerHTML = "You have already played there!";
            } else if (squares[3] == 2){
                document.getElementById("log").innerHTML = "Your opponent has played there!";
            } else {
            document.getElementById("squareFour").innerHTML = '<img src="img/cross.png">';
            squares[3] = 1; 
            win();
            compMove();
            }
            break;
            
        case squareFive:
            if (squares[4] == 1){
                document.getElementById("log").innerHTML = "You have already played there!";
            } else if (squares[4] == 2){
                document.getElementById("log").innerHTML = "Your opponent has played there!";
            } else {
            document.getElementById("squareFive").innerHTML = '<img src="img/cross.png">';
            squares[4] = 1;
            win();
            compMove();
            }
            break;
            
        case squareSix:
            if (squares[5] == 1){
                document.getElementById("log").innerHTML = "You have already played there!";
            } else if (squares[5] == 2){
                document.getElementById("log").innerHTML = "Your opponent has played there!";
            } else {
            document.getElementById("squareSix").innerHTML = '<img src="img/cross.png">';
            squares[5] = 1;   
            win();
            compMove();
            }
            break;
            
        case squareSeven:
            if (squares[6] == 1){
                document.getElementById("log").innerHTML = "You have already played there!";
            } else if (squares[6] == 2){
                document.getElementById("log").innerHTML = "Your opponent has played there!";
            } else {
            document.getElementById("squareSeven").innerHTML = '<img src="img/cross.png">';
            squares[6] = 1; 
            win();
            compMove();
            }
            break;
            
        case squareEight:
            if (squares[7] == 1){
                document.getElementById("log").innerHTML = "You have already played there!";
            } else if (squares[7] == 2){
                document.getElementById("log").innerHTML = "Your opponent has played there!";
            } else {
            document.getElementById("squareEight").innerHTML = '<img src="img/cross.png">';
            squares[7] = 1;  
            win();
            compMove();
            }
            break;
            
        case squareNine:
            if (squares[8] == 1){
                document.getElementById("log").innerHTML = "You have already played there!";
            } else if (squares[8] == 2){
                document.getElementById("log").innerHTML = "Your opponent has played there!";
            } else {
            document.getElementById("squareNine").innerHTML = '<img src="img/cross.png">';
            squares[8] = 1;  
            win();
            compMove();
            }
            break;
        }     
}
//function that dictates how the computer plays
function compMove() {
    //Validating if there is a winner
    if (winner){
        document.getElementById("end").innerHTML = "The Game is over!";
        return;
    }
    //inserts into the dom element after player click
    var comp = Math.floor((Math.random() * 9) + 1);
    document.getElementById("log").innerHTML = ("I play at " + comp);
    
        switch (comp){
            case 1:

               if (squares[0] == 2){
                    compMove();
                } else if (squares[0] == 1 ){
                    compMove();
                } else {
                    document.getElementById("squareOne").innerHTML = '<img src="img/circle.png">';
                    squares[0] = 2;
                    win();
                }

                break;

            case 2:
                if (squares[1] == 1){
                    compMove();
                } else if (squares[1] == 2){
                    compMove();
                } else{
                    document.getElementById("squareTwo").innerHTML = '<img src="img/circle.png">';
                    squares[1] = 2;
                    win();
                }
                break;

            case 3:
                if (squares[2] == 1){
                    compMove();
                }else if (squares[2] == 2){
                    compMove();
                } else{
                    document.getElementById("squareThree").innerHTML = '<img src="img/circle.png">';
                    squares[2] = 2;
                    win();
                }
                break;

            case 4:
                if (squares[3] == 1){
                    compMove();
                } else if(squares[3] ==2){
                    compMove();
                } else{
                    document.getElementById("squareFour").innerHTML = '<img src="img/circle.png">';
                    squares[3] = 2;
                    win();
                }
                break;

            case 5:
                if (squares[4] == 1){
                    compMove();
                } else if(squares[4] == 2){
                    compMove();
                } else{
                    document.getElementById("squareFive").innerHTML = '<img src="img/circle.png">';
                    squares[4] = 2;
                    win();
                }
                break;

            case 6:
                if (squares[5] == 1){
                    compMove();
                } else if(squares[5] == 2){
                    compMove();
                } else{
                    document.getElementById("squareSix").innerHTML = '<img src="img/circle.png">';
                    squares[5] = 2;
                    win();
                }
                break;

            case 7:
                if (squares[6] == 1){
                    compMove();
                } else if(squares[6] == 2){
                    compMove();
                } else{
                    document.getElementById("squareSeven").innerHTML = '<img src="img/circle.png">';
                    squares[6] = 2;
                    win();
                }
                break;

            case 8:
                if (squares[7] == 1){
                    compMove();
                } else if(squares[7] == 2) {
                    compMove();
                } else{
                    document.getElementById("squareEight").innerHTML = '<img src="img/circle.png">';
                    squares[7] = 2;
                    win();
                }
                break;

            case 9:
                if (squares[8] == 1){
                    compMove();
                } else if(squares[8] == 2) {
                    compMove();
                } else{
                    document.getElementById("squareNine").innerHTML = '<img src="img/circle.png">';
                    squares[8] = 2;
                    win();
                }
                break;
        }   
    }

//function that tells you who wins
function win (){
//player wins
//horizontal wins   
       if (squares[0] ==1 && squares[1] == 1 && squares[2] == 1){
            winner = true;             
    } 
        if(squares[3] == 1 && squares[4] == 1 && squares[5] == 1){
            winner = true;       
    } 
        if(squares[6] == 1 && squares[7] == 1 && squares[8] == 1){
            winner = true;       
    //vertical wins    
    } 
        if(squares[0] == 1 && squares[3] == 1 && squares[6] == 1){
            winner = true;      
    } 
        if(squares[1] == 1 && squares[4] == 1 && squares[7] == 1){
            winner = true;        
    } 
        if(squares[2]== 1 && squares[5] == 1 && squares[8] == 1){
            winner = true;     
    //diagonal wins    
    } 
        if(squares[0] == 1 && squares[4] ==1 && squares[8] == 1){
            winner = true;     
    } 
        if(squares[2] == 1 && squares[4] == 1 && squares[6] == 1){
            winner = true;      
    } 
     //computer wins  
    //horizontal wins
        if (squares[0] == 2 && squares[1] == 2 && squares[2] == 2){
            winner = true;       
    } 
        if(squares[3] == 2 && squares[4] == 2 && squares[5] == 2){
            winner = true;      
    } 
        if(squares[6] == 2 && squares[7] == 2 && squares[8] == 2){
            winner = true;     
    //vertical wins    
    } 
        if(squares[0] == 2 && squares[3] == 2 && squares[6] == 2){
            winner = true;  
    } 
        if(squares[1] == 2 && squares[4] == 2 && squares[7] == 2){
            winner = true;    
    } 
        if(squares[2] == 2 && squares[5] == 2 && squares[8] == 2){
            winner = true;     
    //diagonal wins    
    } 
        if(squares[0] == 2 && squares[4] == 2 && squares[8] == 2){
            winner = true;     
    } 
        if(squares[2] == 2 && squares[4] == 2 && squares[6] == 2){
            winner = true;    
    } 
   
}


