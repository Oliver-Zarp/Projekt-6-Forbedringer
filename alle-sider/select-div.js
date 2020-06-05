// Jeg laver først en array med de objekter som skal bruges i funktionen. 

var divs = ["mobile-settings-container", "mobile-checkliste-container", "mobile-history-container", "mobile-service-settings-container", "mobile-service-settings-container", "mobile-add-to-settings-container"];
var visibleDivId = null;                    // Dette er en tom variable (kunne også sættes til null) 

function toggleVisibility(divId) {
  if(visibleDivId === divId) {
     // Her er visibleDivId = null;
     // Så der sker intet.
  } else {
    visibleDivId = divId;  // Her sættes variablen visibleDivId til at være divId'et (som tilføjes på eventen)
  }
  hideNonVisibleDivs();    // Til sidste kører denne funktion for at sættte alle andre divers til display stylen til none
}

// Denne function bruges til at gå hele arrayen "divs" igennem og sætte display stylen til none 

function hideNonVisibleDivs() {
  var i, divId, div;                         // Tomme variabler 
    for(i = 0; i < divs.length; i++) {       // i (index) er loop variablen; i < divs.length er vores tilstand; i++ Inkrementel begreb
      div = document.getElementById(divId);  // sætter div til at hente divId'et.
      divId = divs[i];                       // Det specifike objekt i arrayen.
    if(visibleDivId === divId) {             // Dette er en "strict comparison", så kun sand hvis operatorne matcher
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
