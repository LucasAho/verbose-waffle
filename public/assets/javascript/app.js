$(function () {
    
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
    //On click for Contact --> Home Button
    $("#home-btn").on("click", function () {
        event.preventDefault();
        location.href = "/";
    });

    //Click opens contact handlebar
    $("#contactClick").on("click", function () {
        event.preventDefault();
        //gets contact route
        $.ajax("/contact", {
            type: "GET"
        }).then(res => {
            location.href = "/contactme";
        });
    });

    //Click sends new message
    $("#sendIt").on("click", event => {
        event.preventDefault();
        //Creates object for new contact message
        let userContact = {
            name: $("#name").val().trim(),
            email: validate($("#email-input").val().trim()),
            message: $("#message").val().trim()
        };
        //Posts new message to nodemailer route
        $.ajax("/contact", {
            type: "POST",
            data: userContact
        }).then(res => {
            location.href = "/contactme";
        });

    });
     
});
