class Animal {
  constructor(name){
    this.name=name;
  }
  putInTheDocument (){
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
  
    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
  
    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
  
    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
    
    var tbStyle=petTR.querySelector("td");
    tbStyle.addEventListener("mouseover",function(){
      tbStyle.style.backgroundColor="green";
      tbStyle.style.color="white";
    })
  
   
  
    petActionTDButton.onclick = this.action;
    petsTable.querySelector("tbody").appendChild(petTR);
}

}
 

/*
function Animal(name){
    this.name = name;
}
*/
/*
Animal.prototype.action = function(){
  document.getElementById(this.actionSoundName).play();
  
}*/
/*
Animal.prototype.putInTheDocument = function(){
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
  
    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
  
    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
  
    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
    
    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)
}
*/
class Cat extends Animal{
constructor(name){
  super(name); 
  
}
image(){
   let bodyEL=document.querySelector("body");
   document.querySelector("td").addEventListener("click",function(e){
    let img=document.createElement("img");
     img.setAttribute("src","https://static.vets-now.com/uploads/2017/01/My-cat-had-an-electric-shock-what-should-I-do-Vets-Now.jpg");
     e.stopPropagation();
     bodyEL.appendChild(img);
    });
}
//image=
legs = 4;
actionText = "Meoow";
actionSoundName = "meow";


}

class Monkey extends Animal{
constructor(name){
  super(name);

}
image(){
   let bodyEL=document.querySelector("body");
   document.querySelector("td").addEventListener("click",function(e){
    let img=document.createElement("img");
     img.setAttribute("src","https://images.theconversation.com/files/56078/original/zkmxyt9c-1407516907.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip");
     e.stopPropagation();
     bodyEL.appendChild(img);
    });
}

legs = 2;
actionText = "Scream";
actionSoundName = "scream";


}
/*
function Cat(name){
    Animal.call(this, name);
    this.legs = 4;
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
}

Cat.prototype = Animal.prototype;

function Monkey(name){
    Animal.call(this, name);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
}

Monkey.prototype = Animal.prototype;

*/

var Mila = new Cat("Mila");
Mila.putInTheDocument();
Mila.image();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
Charlie.image();