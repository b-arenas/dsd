var oUser = JSON.parse(sessionStorage['oUser']);

$(document).ready(function () {

    $.ajax({
        type: "GET",
        data: {},
        url: "http://localhost:8080/api/transaction/" + oUser.code,
        contentType: "application/json",
        success: function (data) {
            debugger;

            $("#tblCompras tbody").empty();

            $.each(data, function (i, element) {
                var newRow = "<tr><td style='text-align:center'>" + element.code + "</td><td style='text-align:center'>" + element.num_days +
                    " días</td><td style='text-align:right'>S/" + element.amount + "</td><td style='text-align:center'>" + element.super_market +
                    "</td><td style='text-align:center'>" + element.type_payment + "</td><td style='text-align:center'>" + element.date + " " + element.hour +
                    "</td><td style='text-align:center'>" + element.state + "</td></tr>";

                $("#tblCompras tbody").append(newRow);
            });
        },
        error: function (e) {
            alert('Ocurrió un Error');
        }
    });
});