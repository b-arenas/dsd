var clicked = 0;
var arrRecetas = [];
var oUser = JSON.parse(sessionStorage['oUser']);
var preferencias = JSON.parse(sessionStorage['preferencias']);
var oTransaction = {}

$(document).ready(function () {
    if (preferencias != 1) {
        alert("Es indispensable registrar sus preferencias");
        window.location.href = "/Home/Preferencias";
    }

    fn_CargarRecetas();

    var d = new Date();
    var day = d.getDay();

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
        fn_CargarRecetaDelDia();
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

        switch ($(current_fs).attr("id")) {
            case "fsDays":
                var checked = $("input[name=chkDays]:checked").length;

                if (checked == 0) {
                    alert("Debe seleccionar por lo menos 1 día");
                    return;
                }

                fn_GenerarTransaccionDetalle();
                fn_GenerarTablaPrecios();

                break;
            case "fsPrices":
                var checked = $("input[name=rdTienda]:checked").length;

                if (checked == 0) {
                    alert("Debe seleccionar una tienda");
                    return;
                }
                break;
            case "fsPayment":

                var cardName = $("#cardName").val();
                var cardNumber = $("#cardNumber").val();
                var cardCVC = $("#cardCVC").val();
                var month = $("#month option:selected").val();

                if (cardName == "" || cardNumber == "" || cardCVC == "" | month == "0") {
                    alert("Debe ingresar todos los datos solicitados");
                    return;
                }

                if (!fn_RegistrarTransaccion()) {
                    return;
                }
                break;
            case "fsConfirm":
                window.location.reload();
                break;
        }

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
});

function fn_Registrar() {
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

function fn_GenerarTransaccionDetalle() {
    var checked = $("input[name=chkDays]:checked");
    var aTransactionDetails = [];

    $.each(checked, function (element, index) {
        var pathDesayuno = "desayuno/image" + Math.floor((Math.random() * 5) + 1) + ".jpeg";
        var pathAlmuerzo = "almuerzo/image" + Math.floor((Math.random() * 5) + 1) + ".jpeg";
        var pathCena = "cena/image" + Math.floor((Math.random() * 5) + 1) + ".jpeg";

        var infoDesayuno = $.grep(arrRecetas, function (element, index) {
            return element.kind == 1 && element.imagePath == pathDesayuno;
        });

        var infoAlmuerzo = $.grep(arrRecetas, function (element, index) {
            return element.kind == 2 && element.imagePath == pathAlmuerzo;
        });

        var infoCena = $.grep(arrRecetas, function (element, index) {
            return element.kind == 3 && element.imagePath == pathCena;
        });

        var oDesayuno = {
            recipe_code: infoDesayuno[0].id,
            priceVea: infoDesayuno[0].priceVea,
            priceMetro: infoDesayuno[0].priceMetro,
            priceTottus: infoDesayuno[0].priceTottus,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        }

        var oAlmuerzo = {
            recipe_code: infoAlmuerzo[0].id,
            priceVea: infoAlmuerzo[0].priceVea,
            priceMetro: infoAlmuerzo[0].priceMetro,
            priceTottus: infoAlmuerzo[0].priceTottus,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        }

        var oCena = {
            recipe_code: infoCena[0].id,
            priceVea: infoCena[0].priceVea,
            priceMetro: infoCena[0].priceMetro,
            priceTottus: infoCena[0].priceTottus,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        }


        if ($(this).val() == "1") {
            oDesayuno.monday = true;
            oAlmuerzo.monday = true;
            oCena.monday = true;
        }

        if ($(this).val() == "2") {
            oDesayuno.tuesday = true;
            oAlmuerzo.tuesday = true;
            oCena.tuesday = true;
        }

        if ($(this).val() == "3") {
            oDesayuno.wednesday = true;
            oAlmuerzo.wednesday = true;
            oCena.wednesday = true;
        }

        if ($(this).val() == "4") {
            oDesayuno.thursday = true;
            oAlmuerzo.thursday = true;
            oCena.thursday = true;
        }

        if ($(this).val() == "5") {
            oDesayuno.friday = true;
            oAlmuerzo.friday = true;
            oCena.friday = true;
        }

        if ($(this).val() == "6") {
            oDesayuno.saturday = true;
            oAlmuerzo.saturday = true;
            oCena.saturday = true;
        }

        if ($(this).val() == "7") {
            oDesayuno.sunday = true;
            oAlmuerzo.sunday = true;
            oCena.sunday = true;
        }

        aTransactionDetails.push(oDesayuno);
        aTransactionDetails.push(oAlmuerzo);
        aTransactionDetails.push(oCena);
    });

    oTransaction = {
        "transaccionDetalles": aTransactionDetails
    }

}

function fn_GenerarTablaPrecios() {
    var checked = $("input[name=chkDays]:checked");
    $("#tblPrices tbody").empty();

    var totalVea = 0;
    var totalTottus = 0;
    var totalMetro = 0;

    $.each(checked, function (element, index) {
        var newRowContent = "<tr>";

        if ($(this).val() == "1") {
            var mondayPrices = ObtenerPreciosLunes();
            newRowContent += "<td>" + "Lunes" + "</td><td style='text-align:right'>S/" + mondayPrices.plazaVea + "</td><td style='text-align:right'>S/" + mondayPrices.tottus +
                "</td><td style='text-align:right'>S/" + mondayPrices.metro + "</td>";
            totalVea += mondayPrices.plazaVea;
            totalTottus += mondayPrices.tottus;
            totalMetro += mondayPrices.metro;
        }
        if ($(this).val() == "2") {
            var tuesdayPrices = ObtenerPreciosMartes();
            newRowContent += "<td>" + "Martes" + "</td><td style='text-align:right'>S/" + tuesdayPrices.plazaVea + "</td><td style='text-align:right'>S/" + tuesdayPrices.tottus +
                "</td><td style='text-align:right'>S/" + tuesdayPrices.metro + "</td>";
            totalVea += tuesdayPrices.plazaVea;
            totalTottus += tuesdayPrices.tottus;
            totalMetro += tuesdayPrices.metro;
        }
        if ($(this).val() == "3") {
            var wednesdayPrices = ObtenerPreciosMiercoles();
            newRowContent += "<td>" + "Miércoles" + "</td><td style='text-align:right'>S/" + wednesdayPrices.plazaVea + "</td><td style='text-align:right'>S/" + wednesdayPrices.tottus +
                "</td><td style='text-align:right'>S/" + wednesdayPrices.metro + "</td>";
            totalVea += wednesdayPrices.plazaVea;
            totalTottus += wednesdayPrices.tottus;
            totalMetro += wednesdayPrices.metro;
        }
        if ($(this).val() == "4") {
            var thursdayPrices = ObtenerPreciosJueves();
            newRowContent += "<td>" + "Jueves" + "</td><td style='text-align:right'>S/" + thursdayPrices.plazaVea + "</td><td style='text-align:right'>S/" + thursdayPrices.tottus +
                "</td><td style='text-align:right'>S/" + thursdayPrices.metro + "</td>";
            totalVea += thursdayPrices.plazaVea;
            totalTottus += thursdayPrices.tottus;
            totalMetro += thursdayPrices.metro;
        }
        if ($(this).val() == "5") {
            var fridayPrices = ObtenerPreciosViernes();
            newRowContent += "<td>" + "Viernes" + "</td><td style='text-align:right'>S/" + fridayPrices.plazaVea + "</td><td style='text-align:right'>S/" + fridayPrices.tottus +
                "</td><td style='text-align:right'>S/" + fridayPrices.metro + "</td>";
            totalVea += fridayPrices.plazaVea;
            totalTottus += fridayPrices.tottus;
            totalMetro += fridayPrices.metro;
        }
        if ($(this).val() == "6") {
            var saturdayPrices = ObtenerPreciosSabado();
            newRowContent += "<td>" + "Sábado" + "</td><td style='text-align:right'>S/" + saturdayPrices.plazaVea + "</td><td style='text-align:right'>S/" + saturdayPrices.tottus +
                "</td><td style='text-align:right'>S/" + saturdayPrices.metro + "</td>";
            totalVea += saturdayPrices.plazaVea;
            totalTottus += saturdayPrices.tottus;
            totalMetro += saturdayPrices.metro;
        }
        if ($(this).val() == "7") {
            var sundayPrices = ObtenerPreciosDomingo();
            newRowContent += "<td>" + "Domingo" + "</td><td style='text-align:right'>S/" + sundayPrices.plazaVea + "</td><td style='text-align:right'>S/" + sundayPrices.tottus +
                "</td><td style='text-align:right'>S/" + sundayPrices.metro + "</td>";
            totalVea += sundayPrices.plazaVea;
            totalTottus += sundayPrices.tottus;
            totalMetro += sundayPrices.metro;
        }

        newRowContent += "</tr>";

        $("#tblPrices tbody").append(newRowContent);
    });

    $("#tblPrices tfoot").empty();

    var totalFooter = "<tr style='font-weight: bold'>" + "<td>" + "Total" + "</td><td  id='total1' style='text-align:right'>S/" + totalVea +
        "</td><td id='total2' style='text-align:right'>S/" + totalTottus + "</td><td id='total3' style='text-align:right'>S/" + totalMetro + "</td>" + "</tr>";
    $("#tblPrices tfoot").append(totalFooter);

    var radioFooter = "<tr><td></td><td><input type='radio' name='rdTienda' value='1' /></td><td><input type='radio' name='rdTienda' value='2' /></td>" + 
        "<td><input type='radio' name='rdTienda' value='3' /></td></tr>";
    $("#tblPrices tfoot").append(radioFooter);
}

function ObtenerPreciosLunes() {
    var mondayPrices = {};

    var infoMonday = $.grep(oTransaction.transaccionDetalles, function (element, index) {
        return element.monday == true;
    });

    var plazaVea = 0;
    var tottus = 0;
    var metro = 0;

    $.each(infoMonday, function (index, element) {
        plazaVea += element.priceVea;
        tottus += element.priceTottus;
        metro += element.priceMetro;
    });

    mondayPrices = {
        plazaVea: plazaVea,
        tottus: tottus,
        metro: metro
    }

    return mondayPrices;
}

function ObtenerPreciosMartes() {
    var tuesdayPrices = {};

    var infoTuesday = $.grep(oTransaction.transaccionDetalles, function (element, index) {
        return element.tuesday == true;
    });

    var plazaVea = 0;
    var tottus = 0;
    var metro = 0;

    $.each(infoTuesday, function (index, element) {
        plazaVea += element.priceVea;
        tottus += element.priceTottus;
        metro += element.priceMetro;
    });

    tuesdayPrices = {
        plazaVea: plazaVea,
        tottus: tottus,
        metro: metro
    }

    return tuesdayPrices;
}

function ObtenerPreciosMiercoles() {
    var wednesdayPrices = {};

    var infoWednesday = $.grep(oTransaction.transaccionDetalles, function (element, index) {
        return element.wednesday == true;
    });

    var plazaVea = 0;
    var tottus = 0;
    var metro = 0;

    $.each(infoWednesday, function (index, element) {
        plazaVea += element.priceVea;
        tottus += element.priceTottus;
        metro += element.priceMetro;
    });

    wednesdayPrices = {
        plazaVea: plazaVea,
        tottus: tottus,
        metro: metro
    }

    return wednesdayPrices;
}

function ObtenerPreciosJueves() {
    var thursdayPrices = {};

    var infoThursday = $.grep(oTransaction.transaccionDetalles, function (element, index) {
        return element.thursday == true;
    });

    var plazaVea = 0;
    var tottus = 0;
    var metro = 0;

    $.each(infoThursday, function (index, element) {
        plazaVea += element.priceVea;
        tottus += element.priceTottus;
        metro += element.priceMetro;
    });

    thursdayPrices = {
        plazaVea: plazaVea,
        tottus: tottus,
        metro: metro
    }

    return thursdayPrices;
}

function ObtenerPreciosViernes() {
    var fridayPrices = {};

    var infoFriday = $.grep(oTransaction.transaccionDetalles, function (element, index) {
        return element.friday == true;
    });

    var plazaVea = 0;
    var tottus = 0;
    var metro = 0;

    $.each(infoFriday, function (index, element) {
        plazaVea += element.priceVea;
        tottus += element.priceTottus;
        metro += element.priceMetro;
    });

    fridayPrices = {
        plazaVea: plazaVea,
        tottus: tottus,
        metro: metro
    }

    return fridayPrices;
}

function ObtenerPreciosSabado() {
    var saturdayPrices = {};

    var infoSaturday = $.grep(oTransaction.transaccionDetalles, function (element, index) {
        return element.saturday == true;
    });

    var plazaVea = 0;
    var tottus = 0;
    var metro = 0;

    $.each(infoSaturday, function (index, element) {
        plazaVea += element.priceVea;
        tottus += element.priceTottus;
        metro += element.priceMetro;
    });

    saturdayPrices = {
        plazaVea: plazaVea,
        tottus: tottus,
        metro: metro
    }

    return saturdayPrices;
}

function ObtenerPreciosDomingo() {
    var sundayPrices = {};

    var infoSunday = $.grep(oTransaction.transaccionDetalles, function (element, index) {
        return element.sunday == true;
    });

    var plazaVea = 0;
    var tottus = 0;
    var metro = 0;

    $.each(infoSunday, function (index, element) {
        plazaVea += element.priceVea;
        tottus += element.priceTottus;
        metro += element.priceMetro;
    });

    sundayPrices = {
        plazaVea: plazaVea,
        tottus: tottus,
        metro: metro
    }

    return sundayPrices;
}

function fn_RegistrarTransaccion() {
    var radio = $("input[name=rdTienda]:checked")[0].value;
    var tienda = "";

    switch (radio) {
        case "1":
            tienda = "Plaza Vea";
            break;
        case "2":
            tienda = "Tottus";
            break;
        case "3":
            tienda = "Metro";
            break;
    }

    oTransaction.amount = $("#total" + radio).html().replace("S/","");
    oTransaction.num_days = $("input[name=chkDays]:checked").length;
    oTransaction.date = "";
    oTransaction.hour = "";
    oTransaction.state = "Aprobado";
    oTransaction.type_payment = "VISA";
    oTransaction.super_market = tienda;
    oTransaction.user = {
        "code": oUser.code
    }


    $.each(oTransaction.transaccionDetalles, function (i, element) {
        delete oTransaction.transaccionDetalles[i]["priceVea"];
        delete oTransaction.transaccionDetalles[i]["priceTottus"];
        delete oTransaction.transaccionDetalles[i]["priceMetro"];
    });

    $.ajax({
        type: "POST",
        data: JSON.stringify(oTransaction),
        url: "http://localhost:8080/api/transaction",
        contentType: "application/json",
        success: function (data) {
            alert(data);

            if (data == "Transacción guardada") {
                window.location.reload();
            } else {
                return false;
            }
        },
        error: function (e) {
            alert('Ocurrió un Error');
        }
    });
}