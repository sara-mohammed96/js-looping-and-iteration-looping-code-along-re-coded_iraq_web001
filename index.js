// Code your solutions in this file

function writeCards(name , event){
<<<<<<< HEAD
  let arr=[];
  for(let i=0;i<name.length;i++)
  {arr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);}
  return arr;
=======
  for(let i=0;i<name.length;i++)
  console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
>>>>>>> 890de83a94f7527b817e07be14c3d0ca22f66340
  
}


<<<<<<< HEAD
writeCards(["Lisa", "Kaitlin", "Jan"], "birthday");
=======
writeCards(["Ada", "Brendan", "Ali"], "birthday");
>>>>>>> 890de83a94f7527b817e07be14c3d0ca22f66340

function countDown(num){
 while(num>=0){
    console.log(num);
    num--;
    
  } 
}
countDown(10);