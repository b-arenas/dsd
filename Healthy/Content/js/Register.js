function fn_Registrar() {
    var email = $("#exampleInputEmail").val();
    var password = $("#exampleInputPassword").val();
    var name = $("#exampleFirstName").val();
    var lastname = $("#exampleLastName").val();
    var role = 1;

    var oUsuario = fn_ValidarRegistro();

    if (!oUsuario)
        return false;

    var register = {
        "email": email,
        "password": password,
        "name": name,
        "lastname": lastname,
        "role": role
    }

    $.ajax({
        type: "POST",
        data: JSON.stringify(register),
        url: "http://localhost:8080/api/user",
        contentType: "application/json",
        success: function (data) {
            if (data.code != null) {
                $("form.user").submit();
            } else {
                alert("Credenciales Incorrectas.");
            }
        },
        error: function (xhr, status, error) {
            debugger;
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });

}

function fn_ValidarRegistro() {
    var oUsuario = {
        "email": $.trim($("#exampleInputEmail").val()),
        "password": $.trim($("#exampleInputPassword").val()),
        "name": $.trim($("#exampleFirstName").val()),
        "lastname": $.trim($("#exampleLastName").val())
    };

    if (oUsuario.email == "" ||
        oUsuario.peso == "" ||
        oUsuario.password == "" ||
        oUsuario.edad == "" ||
        oUsuario.name == "" ||
        oUsuario.lastname == "0") {
        alert("Revise los datos ingresados.");
        return false;
    }

    var passwor_repeat = $("#exampleRepeatPassword").val();

    if (oUsuario.password != passwor_repeat) {
        alert("Las contraseñas deben coincidir.");
        return false;
    }

    return oUsuario;
}