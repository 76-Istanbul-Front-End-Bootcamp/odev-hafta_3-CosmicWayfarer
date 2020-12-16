class Animal {
  constructor(name){
    this.name=name;
    }
  
  putInTheDocument (event){
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
    petsTable.querySelector("tbody").appendChild(petTR);
    let petActionTDget=document.getElementsByTagName("td");
    petTR.addEventListener("click",this.image.bind(this));

    petActionTDButton.addEventListener("click",function(event){
       event.stopPropagation();
    });
  
}
action = function(){
  document.getElementById(this.actionSoundName).play();
  
}
image = function(event){
let myImg=document.querySelector("img");
myImg.src=this.srcUrl;

  }

  
}


class Cat extends Animal{
constructor(name){
  super(name); 
  this.srcUrl;
}


srcUrl="https://static.vets-now.com/uploads/2017/01/My-cat-had-an-electric-shock-what-should-I-do-Vets-Now.jpg";
legs = 4;
actionText = "Meoow";
actionSoundName = "meow";


}

class Monkey extends Animal{
constructor(name){
  super(name);
this.srcUrl;
}

srcUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOa26kUHB8zfNOWlOUIbUT2SMskBcDF0vEw&usqp=CAU"
legs = 2;
actionText = "Scream";
actionSoundName = "scream";


}

var Mila = new Cat("Mila");
Mila.putInTheDocument();


var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
