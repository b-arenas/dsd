var clicked = 0;
var arrRecetas = [];

$(document).ready(function () {

    fn_CargarRecetas();

    var d = new Date();
    var day = d.getDay();

    debugger;
    for (var i = 1; i <= 7; i++) {
        var diaFecha = new Date();
        var dia = (day - i) * -1;
        diaFecha.setDate(d.getDate() + dia);

        if (i < day) {
            $("#dvDia_" + i + " div:first").removeClass("border-left-gray").addClass("border-left-success");
            $("#dvDia_" + i + " i").removeClass("text-gray-300").addClass("text-success");
        }
        else if (i == day) {
            $("#dvDia_" + i + " div:first").removeClass("border-left-gray").addClass("border-left-primary").addClass("border-bottom-primary");
            $("#dvDia_" + i + " i").removeClass("text-gray-300").addClass("text-primary");
        }

        var fechaDDMM = ((diaFecha.getDate() < 10) ? "0" + diaFecha.getDate() : diaFecha.getDate()) + "/" +
            ((diaFecha.getMonth() < 10) ? "0" + (diaFecha.getMonth() + 1) : (diaFecha.getMonth() + 1));

        $("#fecha_" + i).html(fechaDDMM);
    }

    var today = "";

    switch (day) {
        case 1:
            today = "LUNES";
            break;
        case 2:
            today = "MARTES";
            break;
        case 3:
            today = "MIÉRCOLES";
            break;
        case 4:
            today = "JUEVES";
            break;
        case 5:
            today = "VIERNES";
            break;
        case 6:
            today = "SÁBADO";
            break;
        case 7:
            today = "DOMINGO";
            break;
    }

    today += " " + ((d.getDate() < 10) ? "0" + d.getDate() : d.getDate()) + "/" + ((d.getMonth() < 10) ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1));

    $("#dvSelectedDay h6").text(today);


    $("div[id^='dvDia_'] div.h-100").on("click", function () {
        $("#dvSelectedDay h6").text(this.innerText);

        var rmDesayuno = Math.floor((Math.random() * 5) + 1);
        var rmAlmuerzo = Math.floor((Math.random() * 5) + 1);
        var rmCena = Math.floor((Math.random() * 5) + 1);

        var rutaDesayuno = "../Content/img/desayuno/image" + rmDesayuno + ".jpeg";
        var rutaAlmuerzo = "../Content/img/almuerzo/image" + rmAlmuerzo + ".jpeg";
        var rutaCena = "../Content/img/cena/image" + rmCena + ".jpeg";

        $("#imgDesayuno").attr("src", rutaDesayuno);
        $("#imgAlmuerzo").attr("src", rutaAlmuerzo);
        $("#imgCena").attr("src", rutaCena);
    });

    $("ul#desayuno .fa-star").mouseover(function () {
        var id = this.id;

        switch (id) {
            case "desayunoStar1":
                $("#desayunoStar1").css({ "color": "yellow" });
                $("#desayunoStar2").css({ "color": "gray" });
                $("#desayunoStar3").css({ "color": "gray" });
                $("#desayunoStar4").css({ "color": "gray" });
                $("#desayunoStar5").css({ "color": "gray" });
                break;
            case "desayunoStar2":
                $("#desayunoStar1").css({ "color": "yellow" });
                $("#desayunoStar2").css({ "color": "yellow" });
                $("#desayunoStar3").css({ "color": "gray" });
                $("#desayunoStar4").css({ "color": "gray" });
                $("#desayunoStar5").css({ "color": "gray" });
                break;
            case "desayunoStar3":
                $("#desayunoStar1").css({ "color": "yellow" });
                $("#desayunoStar2").css({ "color": "yellow" });
                $("#desayunoStar3").css({ "color": "yellow" });
                $("#desayunoStar4").css({ "color": "gray" });
                $("#desayunoStar5").css({ "color": "gray" });
                break;
            case "desayunoStar4":
                $("#desayunoStar1").css({ "color": "yellow" });
                $("#desayunoStar2").css({ "color": "yellow" });
                $("#desayunoStar3").css({ "color": "yellow" });
                $("#desayunoStar4").css({ "color": "yellow" });
                $("#desayunoStar5").css({ "color": "gray" });
                break;
            case "desayunoStar5":
                $("#desayunoStar1").css({ "color": "yellow" });
                $("#desayunoStar2").css({ "color": "yellow" });
                $("#desayunoStar3").css({ "color": "yellow" });
                $("#desayunoStar4").css({ "color": "yellow" });
                $("#desayunoStar5").css({ "color": "yellow" });
                break;
        }
    }).mouseout(function () {

        if (clicked == 0) {
            $("#desayunoStar1").css({ "color": "gray" });
            $("#desayunoStar2").css({ "color": "gray" });
            $("#desayunoStar3").css({ "color": "gray" });
            $("#desayunoStar4").css({ "color": "gray" });
            $("#desayunoStar5").css({ "color": "gray" });
        }

    }).click(function () {
        var id = this.id;

        clicked = 1;

        switch (id) {
            case "desayunoStar1":
                $("#desayunoStar1").css({ "color": "yellow" });
                $("#desayunoStar2").css({ "color": "gray" });
                $("#desayunoStar3").css({ "color": "gray" });
                $("#desayunoStar4").css({ "color": "gray" });
                $("#desayunoStar5").css({ "color": "gray" });
                break;
            case "desayunoStar2":
                $("#desayunoStar1").css({ "color": "yellow" });
                $("#desayunoStar2").css({ "color": "yellow" });
                $("#desayunoStar3").css({ "color": "gray" });
                $("#desayunoStar4").css({ "color": "gray" });
                $("#desayunoStar5").css({ "color": "gray" });
                break;
            case "desayunoStar3":
                $("#desayunoStar1").css({ "color": "yellow" });
                $("#desayunoStar2").css({ "color": "yellow" });
                $("#desayunoStar3").css({ "color": "yellow" });
                $("#desayunoStar4").css({ "color": "gray" });
                $("#desayunoStar5").css({ "color": "gray" });
                break;
            case "desayunoStar4":
                $("#desayunoStar1").css({ "color": "yellow" });
                $("#desayunoStar2").css({ "color": "yellow" });
                $("#desayunoStar3").css({ "color": "yellow" });
                $("#desayunoStar4").css({ "color": "yellow" });
                $("#desayunoStar5").css({ "color": "gray" });
                break;
            case "desayunoStar5":
                $("#desayunoStar1").css({ "color": "yellow" });
                $("#desayunoStar2").css({ "color": "yellow" });
                $("#desayunoStar3").css({ "color": "yellow" });
                $("#desayunoStar4").css({ "color": "yellow" });
                $("#desayunoStar5").css({ "color": "yellow" });
                break;
        }
    });

    $("ul#almuerzo .fa-star").mouseover(function () {
        var id = this.id;

        switch (id) {
            case "almuerzoStar1":
                $("#almuerzoStar1").css({ "color": "yellow" });
                $("#almuerzoStar2").css({ "color": "gray" });
                $("#almuerzoStar3").css({ "color": "gray" });
                $("#almuerzoStar4").css({ "color": "gray" });
                $("#almuerzoStar5").css({ "color": "gray" });
                break;
            case "almuerzoStar2":
                $("#almuerzoStar1").css({ "color": "yellow" });
                $("#almuerzoStar2").css({ "color": "yellow" });
                $("#almuerzoStar3").css({ "color": "gray" });
                $("#almuerzoStar4").css({ "color": "gray" });
                $("#almuerzoStar5").css({ "color": "gray" });
                break;
            case "almuerzoStar3":
                $("#almuerzoStar1").css({ "color": "yellow" });
                $("#almuerzoStar2").css({ "color": "yellow" });
                $("#almuerzoStar3").css({ "color": "yellow" });
                $("#almuerzoStar4").css({ "color": "gray" });
                $("#almuerzoStar5").css({ "color": "gray" });
                break;
            case "almuerzoStar4":
                $("#almuerzoStar1").css({ "color": "yellow" });
                $("#almuerzoStar2").css({ "color": "yellow" });
                $("#almuerzoStar3").css({ "color": "yellow" });
                $("#almuerzoStar4").css({ "color": "yellow" });
                $("#almuerzoStar5").css({ "color": "gray" });
                break;
            case "almuerzoStar5":
                $("#almuerzoStar1").css({ "color": "yellow" });
                $("#almuerzoStar2").css({ "color": "yellow" });
                $("#almuerzoStar3").css({ "color": "yellow" });
                $("#almuerzoStar4").css({ "color": "yellow" });
                $("#almuerzoStar5").css({ "color": "yellow" });
                break;
        }
    }).mouseout(function () {

        if (clicked == 0) {
            $("#almuerzoStar1").css({ "color": "gray" });
            $("#almuerzoStar2").css({ "color": "gray" });
            $("#almuerzoStar3").css({ "color": "gray" });
            $("#almuerzoStar4").css({ "color": "gray" });
            $("#almuerzoStar5").css({ "color": "gray" });
        }

    }).click(function () {
        var id = this.id;

        clicked = 1;

        switch (id) {
            case "almuerzoStar1":
                $("#almuerzoStar1").css({ "color": "yellow" });
                $("#almuerzoStar2").css({ "color": "gray" });
                $("#almuerzoStar3").css({ "color": "gray" });
                $("#almuerzoStar4").css({ "color": "gray" });
                $("#almuerzoStar5").css({ "color": "gray" });
                break;
            case "almuerzoStar2":
                $("#almuerzoStar1").css({ "color": "yellow" });
                $("#almuerzoStar2").css({ "color": "yellow" });
                $("#almuerzoStar3").css({ "color": "gray" });
                $("#almuerzoStar4").css({ "color": "gray" });
                $("#almuerzoStar5").css({ "color": "gray" });
                break;
            case "almuerzoStar3":
                $("#almuerzoStar1").css({ "color": "yellow" });
                $("#almuerzoStar2").css({ "color": "yellow" });
                $("#almuerzoStar3").css({ "color": "yellow" });
                $("#almuerzoStar4").css({ "color": "gray" });
                $("#almuerzoStar5").css({ "color": "gray" });
                break;
            case "almuerzoStar4":
                $("#almuerzoStar1").css({ "color": "yellow" });
                $("#almuerzoStar2").css({ "color": "yellow" });
                $("#almuerzoStar3").css({ "color": "yellow" });
                $("#almuerzoStar4").css({ "color": "yellow" });
                $("#almuerzoStar5").css({ "color": "gray" });
                break;
            case "almuerzoStar5":
                $("#almuerzoStar1").css({ "color": "yellow" });
                $("#almuerzoStar2").css({ "color": "yellow" });
                $("#almuerzoStar3").css({ "color": "yellow" });
                $("#almuerzoStar4").css({ "color": "yellow" });
                $("#almuerzoStar5").css({ "color": "yellow" });
                break;
        }
    });

    $("ul#cena .fa-star").mouseover(function () {
        var id = this.id;

        switch (id) {
            case "cenaStar1":
                $("#cenaStar1").css({ "color": "yellow" });
                $("#cenaStar2").css({ "color": "gray" });
                $("#cenaStar3").css({ "color": "gray" });
                $("#cenaStar4").css({ "color": "gray" });
                $("#cenaStar5").css({ "color": "gray" });
                break;
            case "cenaStar2":
                $("#cenaStar1").css({ "color": "yellow" });
                $("#cenaStar2").css({ "color": "yellow" });
                $("#cenaStar3").css({ "color": "gray" });
                $("#cenaStar4").css({ "color": "gray" });
                $("#cenaStar5").css({ "color": "gray" });
                break;
            case "cenaStar3":
                $("#cenaStar1").css({ "color": "yellow" });
                $("#cenaStar2").css({ "color": "yellow" });
                $("#cenaStar3").css({ "color": "yellow" });
                $("#cenaStar4").css({ "color": "gray" });
                $("#cenaStar5").css({ "color": "gray" });
                break;
            case "cenaStar4":
                $("#cenaStar1").css({ "color": "yellow" });
                $("#cenaStar2").css({ "color": "yellow" });
                $("#cenaStar3").css({ "color": "yellow" });
                $("#cenaStar4").css({ "color": "yellow" });
                $("#cenaStar5").css({ "color": "gray" });
                break;
            case "cenaStar5":
                $("#cenaStar1").css({ "color": "yellow" });
                $("#cenaStar2").css({ "color": "yellow" });
                $("#cenaStar3").css({ "color": "yellow" });
                $("#cenaStar4").css({ "color": "yellow" });
                $("#cenaStar5").css({ "color": "yellow" });
                break;
        }
    }).mouseout(function () {

        if (clicked == 0) {
            $("#cenaStar1").css({ "color": "gray" });
            $("#cenaStar2").css({ "color": "gray" });
            $("#cenaStar3").css({ "color": "gray" });
            $("#cenaStar4").css({ "color": "gray" });
            $("#cenaStar5").css({ "color": "gray" });
        }

    }).click(function () {
        var id = this.id;

        clicked = 1;

        switch (id) {
            case "cenaStar1":
                $("#cenaStar1").css({ "color": "yellow" });
                $("#cenaStar2").css({ "color": "gray" });
                $("#cenaStar3").css({ "color": "gray" });
                $("#cenaStar4").css({ "color": "gray" });
                $("#cenaStar5").css({ "color": "gray" });
                break;
            case "cenaStar2":
                $("#cenaStar1").css({ "color": "yellow" });
                $("#cenaStar2").css({ "color": "yellow" });
                $("#cenaStar3").css({ "color": "gray" });
                $("#cenaStar4").css({ "color": "gray" });
                $("#cenaStar5").css({ "color": "gray" });
                break;
            case "cenaStar3":
                $("#cenaStar1").css({ "color": "yellow" });
                $("#cenaStar2").css({ "color": "yellow" });
                $("#cenaStar3").css({ "color": "yellow" });
                $("#cenaStar4").css({ "color": "gray" });
                $("#cenaStar5").css({ "color": "gray" });
                break;
            case "cenaStar4":
                $("#cenaStar1").css({ "color": "yellow" });
                $("#cenaStar2").css({ "color": "yellow" });
                $("#cenaStar3").css({ "color": "yellow" });
                $("#cenaStar4").css({ "color": "yellow" });
                $("#cenaStar5").css({ "color": "gray" });
                break;
            case "cenaStar5":
                $("#cenaStar1").css({ "color": "yellow" });
                $("#cenaStar2").css({ "color": "yellow" });
                $("#cenaStar3").css({ "color": "yellow" });
                $("#cenaStar4").css({ "color": "yellow" });
                $("#cenaStar5").css({ "color": "yellow" });
                break;
        }
    });

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function () {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function () {
        return false;
    })
});

function fn_Registrar() {
    debugger;
    var oMensaje = fn_ValidarRegistro();

    if (!oMensaje)
        return false;

    $.ajax({
        type: "POST",
        data: JSON.stringify(oMensaje),
        url: "http://localhost:8888/api/healthy-enviar",
        contentType: "application/json",
        success: function (data) {
            alert("Mensaje enviado.");
            $('#mensajeriaModal').modal('toggle');
            //window.location.reload();
        },
        error: function (e) {
            alert('Ocurrió un Error');
        }
    });
}

function fn_ValidarRegistro() {
    var oMensaje = {
        "titulo": $("#formGroupExampleInput").val(),
        "contenido": $("#exampleFormControlTextarea1").val(),
        "contacto": $("#formGroupExampleInput2").val(),
        "respuesta": ""
    };

    if (oMensaje.titulo == "" ||
        oMensaje.contenido == "" ||
        oMensaje.contacto == "") {
        alert("Revise los datos ingresados.");
        return false;
    }

    return oMensaje;
}

function fn_CargarRecetas() {
    $.ajax({
        type: "GET",
        data: {},
        url: "http://localhost:3000/recipes",
        contentType: "application/json",
        success: function (data) {
            arrRecetas = data;
            fn_CargarRecetaDelDia();
        },
        error: function (e) {
            alert('Ocurrió un error. No se pudo cargar las recetas');
        }
    });
}

function fn_CargarRecetaDelDia() {
    debugger;
    var pathDesayuno = "desayuno/image" + Math.floor((Math.random() * 5) + 1) + ".jpeg";
    var pathAlmuerzo = "almuerzo/image" + Math.floor((Math.random() * 5) + 1) + ".jpeg";
    var pathCena = "cena/image" + Math.floor((Math.random() * 5) + 1) + ".jpeg";

    var rutaDesayuno = "../Content/img/" + pathDesayuno;
    var rutaAlmuerzo = "../Content/img/" + pathAlmuerzo;
    var rutaCena = "../Content/img/" + pathCena;

    var infoDesayuno = $.grep(arrRecetas, function (element, index) {
        return element.kind == 1 && element.imagePath == pathDesayuno;
    });

    var infoAlmuerzo = $.grep(arrRecetas, function (element, index) {
        return element.kind == 2 && element.imagePath == pathAlmuerzo;
    });

    var infoCena = $.grep(arrRecetas, function (element, index) {
        return element.kind == 3 && element.imagePath == pathCena;
    });

    debugger;

    //Setear Rutas
    $("#imgDesayuno").attr("src", rutaDesayuno);
    $("#imgAlmuerzo").attr("src", rutaAlmuerzo);
    $("#imgCena").attr("src", rutaCena);

    //Setear Nombres
    $("#nombreDesayuno").html(infoDesayuno[0].name);
    $("#nombreAlmuerzo").html(infoAlmuerzo[0].name);
    $("#nombreCena").html(infoCena[0].name);

    //Setear Descripción
    $("#valorDesayuno").html(infoDesayuno[0].nutritionalValue);
    $("#valorAlmuerzo").html(infoAlmuerzo[0].nutritionalValue);
    $("#valorCena").html(infoCena[0].nutritionalValue);

    //Setear Valor Nutricional
    $("#descripcionDesayuno").html(infoDesayuno[0].description);
    $("#descripcionAlmuerzo").html(infoAlmuerzo[0].description);
    $("#descripcionCena").html(infoCena[0].description);
}