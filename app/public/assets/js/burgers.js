$(function () {
  // Add a new burger.
  $(".burger-text").on("submit", function (event) {
    event.preventDefault();
    console.log("data grabbed successfully");

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0,
    };

    // Send POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });

  $(".consumeBurger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1,
    };

    // Send PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      location.reload();
    });
  });

  $(".emptyBurger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id,
    }).then(location.reload());
  });
});
