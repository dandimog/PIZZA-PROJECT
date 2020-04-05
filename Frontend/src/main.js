/**
 * Created by chaika on 25.01.16.
 */

$(function(){
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

    $("#qwe").click(function () {
        Liq.init();
    })

});
