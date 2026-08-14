let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");

let closings = [

"You are a legend.",
"Stay golden.",
"Signs point to awesome.",
];

function makeCard(){
  console.log("Dear " + name + ",");
  console.log("You are as " + adjective + " as a " + noun + ".");
  console.log("Happy birthday from the generator. ");

}

  makeCard();
 setInterval(makeCard, 2000);
 makeCard();