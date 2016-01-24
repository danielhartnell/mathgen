$(document).ready(function() {
  $("#configure-worksheets").click(function() {
    $("#config.hide-me").slideToggle();
  });

  $("#get-worksheets").click(function() {
    numEquations = parseInt($("#number-of-equations option:selected").text());
    complexity = $("#complexity option:selected").text();
    answerKey = $("#answer-key option:selected").text();

    console.log('Ready to get PDF');
    window.location.href = "/one-step-pdf?numEquations=" + numEquations + "&complexity=" + complexity + "&answerKey=" + answerKey;
  });
});
