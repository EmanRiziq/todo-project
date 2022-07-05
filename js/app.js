"use strict";
//phase1
let UserName,UserGender,UserAge,WelMsg;

UserName=prompt("enter your name ");
UserGender=prompt("enter your gender ");
UserAge=prompt("enter your age ");
CheckAge(UserAge);
WelMsg=confirm("Do you wants to skip the welcoming message?")
WelMsgFun(WelMsg);


//phase2
const Answers=[];
Answers[0]=confirm(" Do you work?");
Answers[1]= confirm ("Do you have troubles with time management ?");
Answers[2] = confirm ("Do you have hobbies ?");

printAnswers();
function printAnswers(){
    for(let i=0;i<Answers.length ;i++)
    {
        console.log(Answers[i]);
    };
}
// console.log(CheckGender(UserGender.toUpperCase())); 


function WelMsgFun (Welcome)
{
    if (!Welcome)
    { PrintWelMsg();}
}
function CheckGender( Gender)
{
    // console .got (Gender.toUpperCase)
    if( Gender.toUpperCase()=="FEMALE") { return "Ms ";}
    
    else if (Gender.toUpperCase()=="MALE") {return "Mr ";}
    else return " ";

}
function CheckAge(Age)
{
    if(Age<=0){
        alert("The age should be more than 0");
    }
}
function PrintWelMsg()
{
    console.log("Hello " +CheckGender(UserGender) +UserName   );
    alert("Hello " +CheckGender(UserGender) +UserName );
}

