function validate() {
  var username = document.getElementById('uname')
  var password = document.getElementById('pass')

  if(username.value.trim() =="" ||password.value.trim() =="") {
    alert("No username or password written")
    return false;
  }
  else {
    true;
  }
  if(username.value =="Lars" && password.value =="1234") {
    window.open('index.html')
  }
  else {
    alert("Incorrect username or password")
  }
}
