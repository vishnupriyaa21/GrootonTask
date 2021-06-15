$(document).ready(function () {
    $('#btnnext').click(function (event) {
        $("#txtPersonalInformation").load("ContactInformation.html #txtContactInformation", function (responseTxt, statusTxt, jqXHR) {
            debugger
            if (statusTxt == "success") {
                
                //set the first form data
                localStorage.setItem('firstName', $('#txtfname').val());
                localStorage.setItem('middleName', $('#txtmname').val());
                localStorage.setItem('lastName', $('#txtlname').val());

                alert("New content loaded successfully!");
            }
            if (statusTxt == "error") {
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });
});