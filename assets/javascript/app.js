//Contact info is stored in Firebase until better method learned
var firebaseConfig = {
    apiKey: "AIzaSyB06pMMLLO-FUx3wUwJVfmsE9VEpLlCBB0",
    authDomain: "portfolio-contact-page-5016a.firebaseapp.com",
    databaseURL: "https://portfolio-contact-page-5016a.firebaseio.com",
    projectId: "portfolio-contact-page-5016a",
    storageBucket: "portfolio-contact-page-5016a.appspot.com",
    messagingSenderId: "854579126431",
    appId: "1:854579126431:web:fb4b200a9a677c2ff602aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

 
//Function for email validation
const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    
    if (expression.test(String(email).toLowerCase()) === false) {
        $("#email-input").attr("placeholder", "Please use a valid email");
    } else {
        $("#email-input").attr("placeholder", "example@gmail.com");
        var emailUser = {
            userEmail: email,
            userMsg: $("#msg-input").val().trim(),
            userName: $("#name-input").val().trim(),
        }

        $("#name-input").val("");
        $("#msg-input").val("");
        database.ref().push(emailUser);
    }
}

//On click for message submit button
$("#msg-submit").on("click", function(){
    event.preventDefault();
    var emailRaw = $("#email-input").val().trim()
    console.log(emailRaw);
    $("#email-input").val("");
    validate(emailRaw);
});

//On click for Contact --> Home Button
$("home-btn").on("click", function () {
    event.preventDefault();
    
});