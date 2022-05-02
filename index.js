// alert("working");

var rand_num_1=Math.floor(Math.random()*6)+1;

var rand_diceimage="dice"+rand_num_1+".png";

var rand_image_src="images/"+rand_diceimage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", rand_image_src);


var rand_num_2=Math.floor(Math.random()*6)+1;

var rand_diceimage="dice"+rand_num_2+".png";

var rand_image_src="images/"+rand_diceimage;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", rand_image_src);

if(rand_num_1>rand_num_2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!!";
}
else if(rand_num_1<rand_num_2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!!";
}
else{
    document.querySelector("h1").innerHTML="Draw Baby!!!";
}






