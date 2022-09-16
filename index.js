var a = 'X'
var audio = new Audio("green.mp3");
var inp = [1,2,3,4,5,6,7,8];
var c = 0 , d = 0;
$("#reset").css("display" , "none");

function clikcings()
{
   
    $(".box").click(function()
    { 
        c++;
        var ind = $(this).attr("class")[5];

        if(a == 'X') this.innerHTML = "<span style='color: red;'>" + a + "</span>";
        else this.innerHTML = a;

        if(a == 'X') audio.play();
        else new Audio("yellow.mp3").play(); 
       
        if(a == 'X') 
        {
            inp[ind] = a;
            a = 'O';
        }    
        else 
        {
            inp[ind] = a;
            a = 'X';
        }    

        $("span.info").text("Turn for " + a);
        $(this).unbind();
        
        var outcome = check();
        if(c == 9 && check() == 'z')
        {
            $("#reset").css("display" , "flex");
            new Audio("tie.mp3").play();
             $("span.info").text("Draw");
             $(".heading1").text("Click reset button to Restart")
             c = 0;
        }
        
        if(outcome == 'X' || outcome == 'O')
        {
            $("#reset").css("display" , "flex");
            new Audio("win.mp3").play();
            $("span.info").text("player " + outcome + " wins!");
            $(".heading1").text("Click reset button to Restart")
            $(".box").off("click");
            $("img").css("display","flex");
            c = 0;
        }
    })
}

clikcings()

$("#reset").click(function() {restart()});

function check()
{
   if(inp[0] == inp[1] && inp[1]== inp[2]) return inp[0];
   else if(inp[3] == inp[4] && inp[5]== inp[3]) return inp[3];
   else if(inp[6] == inp[8] && inp[7]== inp[6]) return inp[8];
   else if(inp[0] == inp[3] && inp[3]== inp[6]) return inp[0];
   else if(inp[4] == inp[1] && inp[1]== inp[7]) return inp[1];
   else if(inp[2] == inp[5] && inp[8]== inp[2]) return inp[2];
   else if(inp[0] == inp[4] && inp[4]== inp[8]) return inp[0];
   else if(inp[4] == inp[2] && inp[6]== inp[2]) return inp[2];
   else return 'z';
}

function restart()
{
    $(".box").text("");
    $("span.info").text("Turn for X");
    a = 'X'
    c = 0;
    oringinal();
    clikcings();
    $(".heading1").text("Play More and Enjoy More !!")
    $("img").css("display","none");
    $("#reset").css("display" , "none");
}

function oringinal()
{
    for(var i=0;i<9;i++) inp[i] = i;
}
