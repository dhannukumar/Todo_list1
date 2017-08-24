$("#todoinput").keydown(function(e){
  if(e.keyCode === 13){
    todoList();
  }
});


function todoList(){
  var item = $('#todoinput').val();
  console.log(item);
    if(item == ""){
      return false;
    }
  var delete_button = "<div class='delete1'>Delete</div>";


$(document).on("click", '.delete1', function() {
   $(this).closest("li").fadeOut(function() {
     $(this).remove();
   });
   return false;
 })

	

  var complete_button = "<div class='complete'>Complete</div>";

  $(document).on("click", '.complete', function() {
   	$(this).closest("li").css('textDecoration', 'line-through');
   });


  var button = "<div class='bothBTN'>" + complete_button + delete_button + "</div>";

  var newItem = "<li>" + "<div class='todo'>" + item + "</div>" + button + "</li>";
  var list = $("#todoList");
  list.append(newItem);
  $("#todoinput").val("");
}
