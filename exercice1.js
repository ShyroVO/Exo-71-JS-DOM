let monDiv = document.createElement('div');
let monDiv2 = document.createElement('div');

document.getElementById('viewport').appendChild(monDiv);
document.getElementById('viewport').appendChild(monDiv2);

monDiv.innerHTML="Ce div a été ajouté en utilisant javascript";

monDiv2.innerHTML="Ce div a été ajouté en utilisant javascript";
monDiv2.style.backgroundColor= "red";
monDiv2.style.width="100px";
monDiv2.style.height="100px";

document.getElementById("aSupprimer").remove();