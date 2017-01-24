/////////////////////
//Back-End
/////////////////////
function Task(chore) {
  this.chore = chore;
}


/////////////////////
//Front-End
/////////////////////
$(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var chore = $("#userInput").val();
    $("#taskList").append("<li>" + chore + "<input type = 'checkbox'></li>");
    $("#userInput").val("");
  });

  $("#taskForm").submit(function(event) {
    event.preventDefault();

    $("input:checked").parent().remove();
    if ($("input:checked").length === 0) {
      $("#deleteBut").hide();
    }
  });

  $("#taskList").click(function() {
    if ($("input:checked").length > 0) {
      $("#deleteBut").show();
    } else {
      $("#deleteBut").hide();
    }
  });
});
