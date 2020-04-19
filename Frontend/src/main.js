/**
 * Created by chaika on 25.01.16.
 */
var isExisting1 = false;
var isExisting2 = false;
var isExisting3 = true;

$(function () {
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var PizzaCart = require('./pizza/PizzaCart');
    var Map = require('./pizza/Maps');
    var Liq = require('./pizza/Liqpay');
    var Order = require('./pizza/Order');

    if (window.location.pathname === "/") {
        PizzaMenu.initialiseMenu();
    }

    if (window.location.pathname === "/order.html") {
        Map.initializeMap();
    }

    PizzaCart.initialiseCart();

    // $("#qwe").click(function () {
    //     // Order.createOrder();
    //     console.log(isExisting1, isExisting2, isExisting3);
    //     setTimeout(function() {
    //         Liq.initialise();
    //     }, 4000);
    //
    // });

    $('#1').focusout(function () {
        var sentenceRegex = /^\D+$/;
        var myValue = this.value;
        //console.log(myValue);
        //console.log('Sentences: ', myValue.match(sentenceRegex) );

        isExisting1 = sentenceRegex.test(myValue);
        console.log(isExisting1);

        if (isExisting1 === true) {
            isExisting1 = true;

            var feedback1 = document.getElementById("1-feedback");

            feedback1.classList.add("valid-feedback");
            feedback1.classList.remove("display-none");
            feedback1.classList.remove("invalid-feedback");
            $("#1-feedback").html("Correct!");

            var element1 = document.getElementById("1");

            element1.classList.remove("is-invalid");
            element1.classList.add("is-valid");

        } else {
            feedback1 = document.getElementById("1-feedback");

            feedback1.classList.add("invalid-feedback");
            feedback1.classList.remove("display-none");
            feedback1.classList.remove("valid-feedback");
            $("#1-feedback").html("Please, make sure you entered no numbers!");

            element1 = document.getElementById("1");

            element1.classList.remove("is-valid");
            element1.classList.add("is-invalid");
        }
        check(isExisting1, isExisting2, isExisting3);
    });

    $('#2').focusout(function () {
        var sentenceRegex = /^[+]380?[0-9]{9}$/;
        var myValue = this.value;
        console.log(myValue);
        isExisting2 = sentenceRegex.test(myValue);
        console.log(isExisting2);
        if (isExisting2 === true) {
            isExisting2 = true;

            var feedback2 = document.getElementById("2-feedback");

            feedback2.classList.add("valid-feedback");
            feedback2.classList.remove("display-none");
            feedback2.classList.remove("invalid-feedback");
            $("#2-feedback").html("Correct!");

            var element2 = document.getElementById("2");

            element2.classList.remove("is-invalid");
            element2.classList.add("is-valid");

        } else {
            feedback2 = document.getElementById("2-feedback");

            feedback2.classList.add("invalid-feedback");
            feedback2.classList.remove("display-none");
            feedback2.classList.remove("valid-feedback");
            $("#2-feedback").html("Please, make sure you entered the telephone number in format of +380634527439");

            element2 = document.getElementById("2");

            element2.classList.remove("is-valid");
            element2.classList.add("is-invalid");
        }
        check(isExisting1, isExisting2, isExisting3);
    });

    // $('#3').focusout(function () {
    //     var sentenceRegex = /@/;
    //     var myValue = this.value;
    //     console.log(myValue);
    //     isExisting3 = sentenceRegex.test(myValue);
    //     console.log(isExisting3);
    //     if (isExisting3 === true) {
    //         isExisting3 = true;
    //         // $('#3').css("border", " 1px solid green");
    //     } else {
    //         // $('#3').css("border", " 1px solid red");
    //         // $('#numberEmail').css("visibility", "visible");
    //     }
    //     check(isExisting1, isExisting2, isExisting3);
    // });

});

function check(isExisting1, isExisting2, isExisting3) {

    console.log(isExisting1, isExisting2, isExisting3);

    if (isExisting1 === true && isExisting2 === true && isExisting3 === true) {

        $('#qwe').removeAttr("disabled");
        // $('#qwe').attr('disabled', false);

    } else {
        $('#qwe').attr('disabled', true);
    }
}