console.log("This is Working")

document.getElementById("navprofildropdown").addEventListener("click", openMenu);

function openMenu() {

  document.getElementById("dropdownnav").classList.toggle("aktiv");
}



document.getElementById("burger").addEventListener("click", openMenu);

function openMenu() {

  document.getElementById("dropdownnav2").classList.toggle("aktiv");
}
