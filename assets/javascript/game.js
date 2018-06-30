$(function() {

   var randomNum = Math.floor(Math.random() * 102+19)
   var losses = 0;
   var wins = 0;
   var userNum = 0;


    $('.current').text(randomNum);
    $('.wins').text(wins);
    $('.losses').text(losses);
    $('.score').text(userNum);

    var num1= Math.floor(Math.random() * 11+1)
    var num2= Math.floor(Math.random() * 11+1)
    var num3= Math.floor(Math.random() * 11+1)
    var num4= Math.floor(Math.random() * 11+1)


    $('#one').on('click', function(){
        userNum = userNum + num1;
        console.log(userNum);
    })

    $('#two').on('click',function(){
        userNum = userNum + num2;
        console.log(userNum);
    })

    $("#three").on('click',function(){
        userNum = userNum + num3;
        console.log(userNum);
    })

    $('#four').on('click',function(){
        userNum = userNum + num4;
    })
   
});