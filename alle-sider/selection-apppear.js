// Denne funktion viser og skjuler et defineret objekt, uden at påvirke andre.

function selectionAppear(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }