var oUser = JSON.parse(sessionStorage['oUser']);

$(document).ready(function () {

    $.ajax({
        type: "GET",
        data:{},
        url: "http://localhost:8080/api/preferences/" + oUser.code,
        contentType: "application/json",
        success: function (data) {
            $("#iptNombres").val(oUser.name);
            $("#iptApellidos").val(oUser.lastname);
            $("#iptCorreo").val(oUser.email);

            if (data.code != null) {
                
                sessionStorage.setItem("preferencias", 1);

                // convert the object to JSON string
                $("#iptTelefono").val(data.numero_celular);
                $("#iptPeso").val(data.peso);
                $("#iptTalla").val(data.talla);
                $("#iptEdad").val(data.edad);
                //RadioButton
                $("input[name=gender][value='" + data.sexo + "']").prop("checked", true);
                //Selects
                $("#cboRegimen").val(data.restricciones);
                $("#cboActividad").val(data.frecuencia_actividad);
                $("#cboObjetivo").val(data.objetivo);
            } else {
                debugger;
                sessionStorage.setItem("preferencias", 0);
            }
        },
        error: function (e) {
            alert('Ocurrió un Error');
        }
    });
});

function fn_Registrar() {

    var oPreferencias = fn_ValidarRegistro();

    if (!oPreferencias)
        return false;

    $.ajax({
        type: "POST",
        data: JSON.stringify(oPreferencias),
        url: "http://localhost:8080/api/preferences",
        contentType: "application/json",
        success: function (data) {
            if (data == "Preferencia guardada") {
                alert("Registro OK.");
                window.location.reload();
            } else {
                alert("Registro Falló.");
            }
        },
        error: function (e) {
            alert('Ocurrió un Error');
        }
    });
}

function fn_ValidarRegistro() {

    var oPreferencias = {
        "code": oUser.code,
        "numero_celular": $.trim($("#iptTelefono").val()),
        "peso": $.trim($("#iptPeso").val()),
        "talla": $.trim($("#iptTalla").val()),
        "edad": $.trim($("#iptEdad").val()),
        "sexo": $.trim($("input[name=gender]:checked").val()),
        "restricciones": $.trim($("#cboRegimen").val()),
        "frecuencia_actividad": $.trim($("#cboActividad").val()),
        "objetivo": $.trim($("#cboObjetivo").val()),
        "user":{
            "code": oUser.code
        }
    };

    if (oPreferencias.numero_celular == "" ||
        oPreferencias.peso == "" ||
        oPreferencias.talla == "" ||
        oPreferencias.edad == "" ||
        oPreferencias.sexo == "" ||
        oPreferencias.restricciones == "0" ||
        oPreferencias.frecuencia_actividad == "0" ||
        oPreferencias.objetivo == "0") {
        alert("Revise los datos ingresados.");
        return false;
    }

    return oPreferencias;
}