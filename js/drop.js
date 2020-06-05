// Add på alle fra web versionen  
  
  function addnewgroup() {
       var container = document.getElementById("group-add-select");             // Denne DOM finder og definer elementet "group-add-select".
       var option = document.createElement("OPTION");                           // Denne DOM laver et "option" element/objekt 
       option.innerHTML = document.getElementById("nyt-element-navn").value;    // Finder elementet "nyt-element-navn" og sætter dens indhold ind
                                                                                // i variablen option som er det nye option element. 
       option.setAttribute("selected","")                                       // Jeg giver den herefter en attribute "selected" så elementet er valgt.
       container.options.add(option);                                           // Det nye element bliver tilføjet til elementet "group-add-select" 
   }

   function addnewgrouptwo() {
    var container2 = document.getElementById("group-add-select-out");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("nyt-element-navn").value;
    option.setAttribute("selected","")
    container2.options.add(option);
}

function addnewgroup1() {
    var container = document.getElementById("group-add-select-out-1");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("nyt-element-navn").value;
    option.setAttribute("selected","")
    container.options.add(option); 
}

function addnewgrouptwo1() {
 var container2 = document.getElementById("group-add-select3");
 var option = document.createElement("OPTION");
 option.innerHTML = document.getElementById("nyt-element-navn").value;
 option.setAttribute("selected","")
 container2.options.add(option);
}

// Add på alle fra mobil versionen 

function addnewgroupmobil() {
    var container = document.getElementById("group-add-select");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("nyt-element-navn-1").value;
    option.setAttribute("selected","")
    container.options.add(option);
}

function addnewgrouptwomobil() {
 var container2 = document.getElementById("group-add-select-out");
 var option = document.createElement("OPTION");
 option.innerHTML = document.getElementById("nyt-element-navn-1").value;
 option.setAttribute("selected","")
 container2.options.add(option);
}

function addnewgroup1mobil() {
 var container = document.getElementById("group-add-select-out-1");
 var option = document.createElement("OPTION");
 option.innerHTML = document.getElementById("nyt-element-navn-1").value;
 option.setAttribute("selected","")
 container.options.add(option); 
}

function addnewgrouptwo1mobil() {
var container2 = document.getElementById("group-add-select3");
var option = document.createElement("OPTION");
option.innerHTML = document.getElementById("nyt-element-navn-1").value;
option.setAttribute("selected","")
container2.options.add(option);
}

// Add på alle fra new resources mobile/web 

function addnewgroupresources() {
    var container = document.getElementById("group-add-select-out-res");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("nyt-element-navn-2").value;
    option.setAttribute("selected","")
    container.options.add(option);
}

function addnewgrouptworesources() {
 var container2 = document.getElementById("group-add-select-res");
 var option = document.createElement("OPTION");
 option.innerHTML = document.getElementById("nyt-element-navn-2").value;
 option.setAttribute("selected","")
 container2.options.add(option);
}