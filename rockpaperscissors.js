let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let you=document.querySelector("#yourscore");
let comp=document.querySelector("#comp-score");
let disp=document.querySelector("#display");

const computerchoice=()=>{
    let options=["rock","paper","scissors"];
    let compchoice=Math.floor(Math.random()*3);
   return options[compchoice];
   
    

}
const playgame= (userchoice)=>{
    
    //computer's choice 
   
    
    let finalchoice=computerchoice();
    
    if((userchoice==="rock" && finalchoice==="paper") ||( userchoice==="paper" && finalchoice==="scissors" )|| (userchoice==="scissors" && finalchoice==="rock"))
    {
        compscore++;
       comp.innerHTML=`${compscore}`;
       disp.innerHTML="you loose";
       alert(`computer's choice was ${finalchoice}`);
    }
    else if((userchoice==="rock" && finalchoice=="scissors") || ( userchoice=="paper" && finalchoice=="rock" ) || (userchoice=="scissors" && finalchoice=="paper"))
    {
        userscore++;
        you.innerHTML=`${userscore}`;
        disp.innerHTML="you win!";
        alert(`computer's choice was ${finalchoice}`);
    }
    else
    {
        disp.innerHTML="draw!";
        alert(`computer's choice was ${finalchoice}`);
    }
    
   

}
for(let i=0;i<3;i++)
{
   choices[i].addEventListener("click",()=>{
    let userchoice=choices[i].getAttribute("id");
   
    playgame(userchoice);

   });
}
