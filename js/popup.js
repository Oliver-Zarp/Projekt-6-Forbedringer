let c = 0;
function pop() {
  if (c == 0){
    document.getElementById('alertbox').style.display = "block";
    c = 1;
  }
    else{
      document.getElementById('alertbox').style.display = "none";
      c = 0;
    }
}
