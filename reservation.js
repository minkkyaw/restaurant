//input into Object
//post request to server

//fetch
//axios

$(document).ready(() => {
    $("#submit").on("click", function(event) {
      event.preventDefault();
      console.log(1);
      var newReservation;
      var newReservation = {
        customerName: $("#name-input")
          .val()
          .trim(),
        phoneNumber: $("#ph-num-input")
          .val()
          .trim(),
        customerEmail: $("#email-inpt")
          .val()
          .trim(),
        customerID: $("#ID-input")
          .val()
          .trim()
      };
      $.post("/api/reservations", newReservation).then(function(data) {
        console.log("add.html", data);
        alert("Making reservation...");
      });
    });
  });