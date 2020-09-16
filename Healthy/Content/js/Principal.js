var clicked = 0;

$(document).ready(function () {
    var d = new Date();
    var day = d.getDay();

    for (var i = 0; i < day; i++) {
        if (i == day - 1) {
            $("#dvDia_" + i + " div:first").removeClass("border-left-gray").addClass("border-left-primary").addClass("border-bottom-primary");
            $("#dvDia_" + i + " i").removeClass("text-gray-300").addClass("text-primary");
        }
        else {
            $("#dvDia_" + i + " div:first").removeClass("border-left-gray").addClass("border-left-success");
            $("#dvDia_" + i + " i").removeClass("text-gray-300").addClass("text-success");
        }
    }

    var today = "";

    switch (day) {
        case 0:
            today = "Lunes";
            break;
        case 1:
            today = "Martes";
            break;
        case 2:
            today = "Miércoles";
            break;
        case 3:
            today = "Jueves";
            break;
        case 4:
            today = "Viernes";
            break;
        case 5:
            today = "Sábado";
            break;
        case 6:
            today = "Domingo";
            break;
    }

    today += " " + ((d.getDate() < 10) ? "0" + d.getDate() : d.getDate()) + "/" + ((d.getMonth() < 10) ? "0" + d.getMonth() : d.getMonth());

    $("#dvSelectedDay h6").text(today);


    $("div[id^='dvDia_'] div.h-100").on("click", function () {
        $("#dvSelectedDay h6").text(this.innerText);
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
});