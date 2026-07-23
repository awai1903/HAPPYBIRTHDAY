const text=`Happy Birthday Hamna!

May every new sunrise bring joy,
every challenge make you stronger,
and every dream move closer to reality.

This little website is simply
a birthday wish from someone
who admires you.

Have a wonderful birthday.`;

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,45);

}

}

type();

const target=new Date("August 3, 2026 00:00:00").getTime();

setInterval(()=>{

let now=new Date().getTime();

let diff=target-now;

document.getElementById("days").innerHTML=Math.floor(diff/(1000*60*60*24));

document.getElementById("hours").innerHTML=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML=Math.floor((diff%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML=Math.floor((diff%(1000*60))/1000);

},1000);

function showWish(){

document.getElementById("wish").style.display="block";

for(let i=0;i<120;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=(Math.random()*25+15)+"px";

heart.style.animation="fall "+(Math.random()*3+3)+"s linear";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),7000);

}

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{

to{

transform:translateY(110vh) rotate(360deg);

}

}
`;

document.head.appendChild(style);
