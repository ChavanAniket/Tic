var count=0;
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");

      

function play(argu,division)
{
    switch(division)
        {
            case 1:
                if(one.innerHTML=="")              
                if(argu==1)
                    one.innerHTML="<img src=\"images/jerry.png\" alt=\"cat\">";
                else if(argu==0)
                    one.innerHTML="<img src=\"images/tom.png\" alt=\"cat\">";
                break;
                
            case 2:
                if(two.innerHTML=="")
                if(argu==1)
                two.innerHTML="<img src=\"images/jerry.png\" alt=\"cat\">";
                else if(argu==0)
                two.innerHTML="<img src=\"images/tom.png\" alt=\"cat\">";
                break;
                
            case 3:
                if(three.innerHTML=="")
                if(argu==1)
                    three.innerHTML="<img src=\"images/jerry.png\" alt=\"cat\">";
                else if(argu==0)
                    three.innerHTML="<img src=\"images/tom.png\" alt=\"cat\">";
                break;
                
            case 4:
                if(four.innerHTML=="")
                if(argu==1)
                    four.innerHTML="<img src=\"images/jerry.png\" alt=\"cat\">";
                else if(argu==0)
                    four.innerHTML="<img src=\"images/tom.png\" alt=\"cat\">";
                break;
                
            case 5:
                if(five.innerHTML=="")
                if(argu==1)
                    five.innerHTML="<img src=\"images/jerry.png\" alt=\"cat\">";
                else if(argu==0)
                    five.innerHTML="<img src=\"images/tom.png\" alt=\"cat\">";
                break;
                
            case 6:
                if(six.innerHTML=="")
                if(argu==1)
                    six.innerHTML="<img src=\"images/jerry.png\" alt=\"cat\">";
                else if(argu==0)
                    six.innerHTML="<img src=\"images/tom.png\" alt=\"cat\">";
                break;
                
            case 7:
                if(seven.innerHTML=="")
                if(argu==1)
                    seven.innerHTML="<img src=\"images/jerry.png\" alt=\"cat\">";
                else if(argu==0)
                    seven.innerHTML="<img src=\"images/tom.png\" alt=\"cat\">";
                break;
                
            case 8:
                if(eight.innerHTML=="")
                if(argu==1)
                    eight.innerHTML="<img src=\"images/jerry.png\" alt=\"cat\">";
                else if(argu==0)
                    eight.innerHTML="<img src=\"images/tom.png\" alt=\"cat\">";
                break;
                
            case 9:
                if(nine.innerHTML=="")
                if(argu==1)
                    nine.innerHTML="<img src=\"images/jerry.png\" alt=\"cat\">";
                else if(argu==0)
                    nine.innerHTML="<img src=\"images/tom.png\" alt=\"cat\">";
                break;
        }
    
    check();
}
function playerTurn(division)
{
    switch(division)
        {
            case 1:if(document.getElementById("one").innerHTML=="")
                count++;
                else alert("space occupied");
                break;
            case 2:if(document.getElementById("two").innerHTML=="")
                count++;
                else alert("space occupied");
                break;
            case 3:if(document.getElementById("three").innerHTML=="")
                count++;
                else alert("space occupied");
                break;
            case 4:if(document.getElementById("four").innerHTML=="")
                count++;
                else alert("space occupied");
                break;
            case 5:if(document.getElementById("five").innerHTML=="")
                count++;
                else alert("space occupied");
                break;
            case 6:if(document.getElementById("six").innerHTML=="")
                count++;
                else alert("space occupied");
                break;
            case 7:if(document.getElementById("seven").innerHTML=="")
                count++;
                else alert("space occupied");
                break;
            case 8:if(document.getElementById("eight").innerHTML=="")
                count++;
                else alert("space occupied");
                break;
            case 9:if(document.getElementById("nine").innerHTML=="")
                count++;
                else alert("space occupied");
                break;
        }
    
    if(count%2==0)
        play(0,division);
    else if(count%2==1)
        play(1,division);
    if(count>9)
    {
        document.getElementById("WinWin").innerHTML="<h1 style=\"text-align: center; margin-top: 400px; font-size:8em; color: darkslateblue\">No One Wins</h1><br><h1 style=\"text-align: center; font-size: 4em; margin-top:100px; color: darkslateblue\">Restarting Game in 2sec...</h1>"
        setTimeout(function(){location.reload()},2000);
    }
    
}

function check()
{
            if(one.innerHTML!="" && one.innerHTML==two.innerHTML && two.innerHTML==three.innerHTML)
            WinnersWindow(one);
            else if(four.innerHTML!="" && four.innerHTML==five.innerHTML && five.innerHTML==six.innerHTML)
            WinnersWindow(four);
            else if(seven.innerHTML!="" && seven.innerHTML==eight.innerHTML && eight.innerHTML==nine.innerHTML)
            WinnersWindow(seven);
            else if(one.innerHTML!="" && one.innerHTML==four.innerHTML && four.innerHTML==seven.innerHTML)
            WinnersWindow(one);
            else if(two.innerHTML!="" && two.innerHTML==five.innerHTML && five.innerHTML==eight.innerHTML)
            WinnersWindow(two);
            else if(three.innerHTML!="" && three.innerHTML==six.innerHTML && six.innerHTML==nine.innerHTML)
            WinnersWindow(three);
            else if(one.innerHTML!="" && one.innerHTML==five.innerHTML && five.innerHTML==nine.innerHTML)
            WinnersWindow(one);
            else if(three.innerHTML!="" && three.innerHTML==five.innerHTML && five.innerHTML==seven.innerHTML)
            WinnersWindow(three);
    
}

function WinnersWindow(winner)
{
   if(winner.innerHTML=="<img src=\"images/jerry.png\" alt=\"cat\">")
       document.getElementById("WinWin").innerHTML="<h1 style=\"text-align: center; margin-top: 400px; font-size:8em; color: darkslateblue\">Jerry Wins</h1><br><h1 style=\"text-align: center; font-size: 4em; margin-top:100px; color: darkslateblue\">Restarting Game in 2sec...</h1>";
    
    else if(winner.innerHTML=="<img src=\"images/tom.png\" alt=\"cat\">")
       document.getElementById("WinWin").innerHTML="<h1 style=\"text-align: center; margin-top: 400px; font-size:8em; color: darkslateblue\">Tom Wins</h1><br><h1 style=\"text-align: center; font-size: 4em; margin-top:100px; color: darkslateblue\">Restarting Game in 2sec...</h1>";
    
    setTimeout(function(){location.reload()},2000);
   
}
