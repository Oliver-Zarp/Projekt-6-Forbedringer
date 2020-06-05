// Forklar hvad jQuary er!

$(document).ready(function() {
  
  // get box count
  var count = 0;
  var checked = 0;
  function countBoxes() { 
    count = $(".checkboxes-web input[type='checkbox']").length;
    console.log(count);
  }
  
  countBoxes();
  $(":checkbox").click(countBoxes);
  
  // count checks
  
  function countChecked() {
    checked = $(".checkboxes-web input:checked").length;
    
    var percentage = parseInt(((checked / count) * 100),10);
    $(".progressbar-bar").progressbar({
            value: percentage
        });
    $(".progressbar-label").text(percentage + "%");
  }
  
  countChecked();
  $(":checkbox").click(countChecked);
});