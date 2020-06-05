// Funger på samme måde som select-div.js

var divs = ["slide-one", "slide-two", "slide-three"];
var visibleDivId;
function toggleVisibilityNewRes(divId) {
  if(visibleDivId === divId) {
     // Her er visibleDivId = null;
     // Så der sker intet.
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivsNewRes();
}
function hideNonVisibleDivsNewRes() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}