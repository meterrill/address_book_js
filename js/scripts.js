$(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
    '<div class="form-group">' +
    '<label for="new-street">Street</label>' +
    '<input type="text" class="form-control new-street">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-city">City</label>' +
    '<input type="text" class="form-control new-city">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-state">State</label>' +
    '<input type="text" class="form-control new-state">' +
    '</div>' +
    '</div>');
  });

  $("form#new-contact").submit(function(event){
    event.preventDefault();


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();

    var newContact = { firstName: inputtedFirstName,
                       lastName: inputtedLastName,
                       address: inputtedAddress };

    $("ul#contacts").append("<li><span class='contact'>" +
                              newContact.firstName +
                              " " + newContact.lastName +
                              "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-zip").val("");

    var newAddress = { street: inputtedStreet,
                       city: inputtedCity,
                       state: inputtedState,
                       zip: inputtedZip,
                       fullAddress: function() {
                         return this.street + ", " + this.city + ", " + this.state + ", " + this.zip;
                       }
                      };




    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
    });

  });
});
