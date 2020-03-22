/**
 * Created by chaika on 09.02.16.
 */
// import {initializeMap} from "./main";

exports.mainPage = function (req, res) {
    res.render('mainPage', {
        pageTitle: 'Вибір Піци'
    });
};

exports.orderPage = function (req, res) {
    //TODO: implement

    res.render('orderPage', {
        pageTitle: 'asda asd'
    });

};