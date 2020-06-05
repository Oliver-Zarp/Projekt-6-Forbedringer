$(".history-default-option").click(function(){
  $(this).parent().toggleClass("active");
})

$(".history-listeantal-ul").click(function(){
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".history-listeantal").removeClass("active");
})
