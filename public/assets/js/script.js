$(function () {
  //On click event to update the devoured bollean
  $(".devoured-button").on("click", function (event) {
    event.preventDefault()

    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      // Reload the page to get the updated list
      location.reload()
    );
  });

  //submit button to post new burger
  $(".create-burger").on("submit", function (event) {        
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
          // Reload the page to get the updated list
          location.reload();
        }
    );
  });
});