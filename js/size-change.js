sizeChange();
window.onresize = function() {
    sizeChange();
}

// Denne funktion kører ved brug af en onsize event, som er sat på body'en.

function sizeChange() {

    //Jeg bruger en if - else statment til vise og skjule en block.

    if (window.innerWidth > 861) {
        document.getElementById('mobil-wrapper-res').style.display = 'none';  
    }
    else {     
        document.getElementById('mobil-wrapper-res').style.display = 'block';   
    }    
}
