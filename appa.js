let compscore=0;
let userscore=0;
let userchoice;
let compchoice;
let userwin;

let choose=document.querySelectorAll(".alpha");
let msg=document.querySelector(".rd");

let myscore=document.querySelector(".one");
let hisscore=document.querySelector(".two");

const compchoicegenerate=()=>{
    const option=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return option[index];

}
choose.forEach((thing)=>{
    thing.addEventListener("click",()=>{
     userchoice=thing.getAttribute("id");
        playgame(userchoice);
    });
});

const playgame=()=>{

    console.log(`user choice is ${userchoice}`);
     compchoice=compchoicegenerate();
    console.log(`comp choice is ${compchoice}`);
    if(userchoice==compchoice){
        drawgame();
        
    }else{
         userwin=true;
        if(userchoice==="rock"){
            //2 option for comp i.e paper and scissor 
            userwin=compchoice==="paper"?false:true;
            
        }else if(userchoice==="paper"){
             //2 option for comp i.e rock and scissor 
            userwin=compchoice==="scissor"?false:true;
           

        }else{//user choice is scissor
             userwin=compchoice==="rock"?false:true;
            

        }
    showwinner(userwin);
    }
}
let drawgame=()=>{
    console.log("game draw");
    msg.innerText=` Game draw comp choice was ${compchoice} ` ;
msg.style.backgroundColor="gray";

}
let showwinner=()=>{
    if(userwin){
        console.log("you win");
        userscore++;
        myscore.innerText=userscore;
        msg.innerText=`You win comp choice was ${compchoice} `;
        msg.style.backgroundColor="green";
    }else{
        console.log("you lost");
        compscore++;
        hisscore.innerText=compscore;
        msg.innerText=`You lost comp choice was ${compchoice} `;
        msg.style.backgroundColor="red";

    }
}