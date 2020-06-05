var divs = ["mobile-settings-container", "mobile-checkliste-container", "mobile-history-container", "mobile-service-settings-container", "mobile-service-settings-container", "mobile-add-to-settings-container"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
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

var divsNewRes = ["slide-one", "slide-two", "slide-three"];
var visibleDivIdNewRes = null;
function toggleVisibilityNewRes(divId) {
  if(visibleDivIdNewRes === divId) {
  } else {
    visibleDivIdNewRes = divId;
  }
  hideNonVisibleDivsNewRes();
}
function hideNonVisibleDivsNewRes() {
  var i, divId, divNewRes;
  for(i = 0; i < divsNewRes.length; i++) {
    divId = divsNewRes[i];
    divNewRes = document.getElementById(divId);
    if(visibleDivIdNewRes === divId) {
      divNewRes.style.display = "block";
    } else {
      divNewRes.style.display = "none";
    }
  }
}

var divsResWeb = ["wrapper-inhold-contentflexbox-1", "wrapper-inhold-contentflexbox-2", "wrapper-inhold-contentflexbox-3"];
var visibleDivIdResWeb = null;
function toggleVisibilityResWeb(divId) {
  if(visibleDivIdResWeb === divId) {
  } else {
    visibleDivIdResWeb = divId;
  }
  hideNonVisibleDivsResWeb();
}
function hideNonVisibleDivsResWeb() {
  var i, divId, divResWeb;
  for(i = 0; i < divsResWeb.length; i++) {
    divId = divsResWeb[i];
    divResWeb = document.getElementById(divId);
    if(visibleDivIdResWeb === divId) {
      divResWeb.style.display = "flex";
    } else {
      divResWeb.style.display = "none";
    }
  }
}

var divsResSetWeb = ["general-settings-web", "service-check-settings-web", "add-to-checklist-web"];
var visibleDivIdResSetWeb = null;
function toggleVisibilityResSetWeb(divId) {
  if(visibleDivIdResSetWeb === divId) {
  } else {
    visibleDivIdResSetWeb = divId;
  }
  hideNonVisibleDivsResSetWeb();
}
function hideNonVisibleDivsResSetWeb() {
  var i, divId, divResSetWeb;
  for(i = 0; i < divsResWeb.length; i++) {
    divId = divsResSetWeb[i];
    divResSetWeb = document.getElementById(divId);
    if(visibleDivIdResSetWeb === divId) {
      divResSetWeb.style.display = "flex";
    } else {
      divResSetWeb.style.display = "none";
    }
  }
}
