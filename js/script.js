
// PULSANTE GENERA 

var genera = document.getElementById("genera");
genera.addEventListener('click',
function() {

    // DEFINIZIONE DELLE VARIABILI

    var nome = document.getElementById('nome').value;
    var km = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;
    var prezzo = km * 0.21;
    var offerta = "nessuno sconto applicabile";
    var carrozza = Math.floor( Math.random () * 9) + 1;

    // VARIABILE CODICE BIGLIETTO 
    var min = 90000;
    var max= 99999;
    var codice = Math.floor(Math.random() * (max - min + 1)) + min;

    // CALCOLO PREZZO 

    if (eta == 'minorenne') {
        prezzo -= prezzo * 0.2; 
        offerta = "sconto del 20%";
    } else if (eta == 'over68') {
        prezzo -= prezzo * 0.4; 
        offerta = "sconto silver del 40%";
    }

    document.getElementById('nomepasseggero').innerHTML = nome.toUpperCase();
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice').innerHTML = codice;
    document.getElementById('prezzo').innerHTML = prezzo.toFixed(2);

    // DISPLAY TICKET 
    
    document.getElementById('generateticket').className = 'ticket-show';
   
}
);


// PULSANTE ANNULLA 

var annulla = document.getElementById("annulla");
annulla.addEventListener('click',
function() {

    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta').value = '';

    document.getElementById('nomepasseggero').innerHTML ='';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice').innerHTML = '';
    document.getElementById('prezzo').innerHTML = '';

    // NASCONDI TICKET 

    document.getElementById('generateticket').className = 'ticket';
}
);