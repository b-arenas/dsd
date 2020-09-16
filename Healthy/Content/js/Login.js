function fn_ValidarLogin() {
    var user = $("#exampleInputEmail").val();
    var password = $("#exampleInputPassword").val();

    var login = {
        "email": user,
        "password": password
    }

    $.ajax({
        type: "POST",
        data: JSON.stringify(login),
        url: "http://localhost:8080/api/login",
        contentType: "application/json",
        success: function (data) {
            if (data.code != null) {
                // Store
                debugger;
                // convert the object to JSON string
                var userJsonString = JSON.stringify(data);
                sessionStorage.setItem("oUser", userJsonString);
                // Retrieve
                //document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
                $("form.user").submit();
            } else {
                alert("Credenciales Incorrectas.");
            }
        },
        error: function (e) {
            alert('Ocurrió un Error');
        }
    });

}