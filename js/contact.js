var nameInput;
var emailInput;
var telephoneInput;
var messageInput;
var submitButton;

$(function() {

  $(".alert").hide();

  Parse.initialize("PDB5QBeC6rYtGz7E20FUOIWftIBjENipGzh2acdQ", "0LSDDUWavgPK5WB8U67yhskNrrraxXTH3lQudcHE");

  nameInput = $('[name="name"]');
  emailInput = $('[name="email"]');
  telephoneInput = $('[name="telephone"]');
  messageInput = $('[name="message"]');
  submitButton = $('[name="submit"]');

  //loding handlers
  $( "form" ).submit(function( event ) {
    event.preventDefault();
    if(validateFormData()){
        sendFormData();
      }
  });
});

function validateFormData(){
  return true;
}

function sendFormData(){
  var ContactObject = Parse.Object.extend("ContactForm");
  var contactObject = new ContactObject();
  contactObject.save(
    {
      name: nameInput.val(),
      email: emailInput.val(),
      telephone: telephoneInput.val(),
      message: messageInput.val()
    }).then(function(object) {
      $(".alert").show();
      $( "form" )[0].reset();
    });
}
