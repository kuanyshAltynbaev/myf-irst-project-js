let name =prompt("What is your name ?");
alert("Hello" + " " +  name );

let word = ["ракета", "машина" , "танк" , "корабль" ,"лыжь" , "санки" , "стул" , "неб" , "солнце", "глаза", "зуб",];

let generate = word[Math.floor(Math.random() * word.length)];

let answerArray = [];

for ( let i = 0; i < generate.length; i++){

    answerArray[i] = "|_|";

}
let remain = generate.length;

while(remain > 0 ){
alert(answerArray.join(""));
 let quess = prompt("Find the words or stop the game ?");
 if(quess === null ){
break;
 }else if (quess.length !== 1){

    alert("please write the on word!");
 }else {
     for(let j = 0; j < generate.length; j++){
         if (generate[j]===quess){
             answerArray[j] = quess;
             remain--;
         }
     }
 }

}
alert(answerArray.join(" "));
alert("thanks very you find all " + generate
     
 );
