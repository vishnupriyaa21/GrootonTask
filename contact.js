$("#btnsubmit").on("click", function (e) {
    debugger
    $.ajax({
        type: "POST",
        url: "ContactInformation.html",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            debugger

            // set the second form data
            localStorage.setItem('emailid', $('#txtemailid').val());                     
            localStorage.setItem('pass', $('#txtpass').val());
            localStorage.setItem('contactno', $('#txtcontactno').val());

            // get the second form data
            var emailid = localStorage.getItem('emailid');                          
            var pass = localStorage.getItem('pass');
            var contactno = localStorage.getItem('contactno');

            // get the first form data
            var firstName = localStorage.getItem('firstName');                       
            var middleName = localStorage.getItem('middleName');
            var lastName = localStorage.getItem('lastName');
        },
        error: function (xhr) {
            alert("error");
        },
    });
});