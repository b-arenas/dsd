$(document).ready(function () {
    var oUser = JSON.parse(sessionStorage['oUser']);
    $("#spnNombreUsuario").html(oUser.name + " " + oUser.lastname);
});