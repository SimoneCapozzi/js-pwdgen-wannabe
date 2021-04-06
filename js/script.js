var nome = prompt('Come ti chiami?');
var cognome = prompt('Qual è il tuo cognome?'); 
var colore = prompt('Qual è il tuo colore preferito?');
var msgIniziale = nome + cognome + colore +21
document.getElementById('messaggio').innerHTML = msgIniziale;
