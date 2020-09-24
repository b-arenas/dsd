var oUser = JSON.parse(sessionStorage['oUser']);

$(document).ready(function () {

    $.ajax({
        type: "GET",
        data: {},
        url: "http://localhost:8080/api/preferences/" + oUser.code,
        contentType: "application/json",
        success: function (data) {
            $("#iptNombres").val(oUser.name);
            $("#iptApellidos").val(oUser.lastname);
            $("#iptCorreo").val(oUser.email);

            if (data.code != null) {
                $("#iptTelefono").val(data.numero_celular);
            }
        },
        error: function (e) {
            alert('Ocurrió un Error');
        }
    });
});