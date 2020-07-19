var n=6;
var colors=generate(6);
var squares= document.querySelectorAll(".square");
var p=pickedcolor();
var cd=document.getElementById("colord");
cd.textContent=p;
var lo=document.getElementById("lol");
var h1=document.querySelector("h1");
var reset=document.getElementById("lol2");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    n=3;
    colors=generate(3);
    p=pickedcolor();
    cd.textContent=p;
    for(var i=0;i<squares.length;i++)
    {
        if (colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
           
        }
    }
});
hard.addEventListener("click",function(){
    n=6;
    easy.classList.remove("selected");
    hard.classList.add("selected");
    colors=generate(6);
    p=pickedcolor();
    cd.textContent=p;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
         squares[i].style.display="block";
    }
});


reset.addEventListener("click",function()
{
    colors=generate(n);
    p=pickedcolor();
    cd.textContent=p;
    for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
}
 reset.textContent="New Colors";
 lo.textContent="";
 h1.style.backgroundColor="steelblue";

});

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
    if(this.style.backgroundColor===p)
    {
        lo.textContent="CORRECT";
        for(var i=0;i<squares.length;i++)
        {
            squares[i].style.backgroundColor=p;
        }
        h1.style.backgroundColor=p;
        reset.textContent="Play Again?";
    }
    else{
        this.style.backgroundColor="#232323";
        lo.textContent="try again!";
    }
    });

}
function pickedcolor(){
var random= Math.floor(Math.random()*colors.length);
return colors[random];
}
function generate(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {arr.push(random1());
    
    }
    return arr;
}
function random1(){
    var r= Math.floor(Math.random()*256);
     var g= Math.floor(Math.random()*256);
      var b= Math.floor(Math.random()*256);
      return "rgb("+r+", "+g+", "+b+")";
}