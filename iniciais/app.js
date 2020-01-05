var name = prompt("Qual é o seu nome e sobrenome?");
var firstInitial = name.slice(0,1);
var secondInitialPosition = name.indexOf (" ") + 1 ;
var secondInitial = name.slice(secondInitialPosition , secondInitialPosition + 1);
document.write("Suas iniciais são: " + firstInitial.toUpperCase() + secondInitial.toUpperCase());
