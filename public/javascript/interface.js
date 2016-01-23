$(document).ready(function() {
  $("#configure-worksheets").click(function() {
    $("#config.hide-me").slideToggle();
  });

  var n = $("#number option:selected").text();
  
  $("#get-worksheets").click(function() {
    $.post("/mkpdf?enumb=" + 12);
  });
});
