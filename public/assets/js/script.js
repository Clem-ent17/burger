$(function() {
  $(".devoured-button").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var burgerStatus = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerStatus
    });
    
    location.reload();
  });

  $(".create-burger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger_name").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});