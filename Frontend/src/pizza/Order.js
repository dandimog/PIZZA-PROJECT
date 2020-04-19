function createOrder(){
    var data ={
        'fullName': $('#1').val(),
        'phoneNumber': $('#2').val(),
        'address': $('#3').val()
    };

    $.ajax({
        url:'http://localhost:5050/api/create-order/',
        type: 'POST',
        contentType : 'application/json',
        data: JSON.stringify(data),
        success: function(data){
            callback(null, data);
        },
        error: function() {
            callback(new Error("Ajax Failed"));
        }
    });
}

$("#q").click(function () {
    createOrder();
});

exports.createOrder = createOrder; //?