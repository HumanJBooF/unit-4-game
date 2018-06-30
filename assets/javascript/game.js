$(function () {

    var randomNum = "";
    var losses = 0;
    var wins = 0;
    var score = 0;
    var images = ["./assets/images/Akuma1.png","assets/images/pfken.png","assets/images/vega.png","assets/images/ryusf.jpg"];

    randomNum = Math.floor(Math.random() * 102 + 19);


    $('.current').text(randomNum);
    $('.wins').text("wins: " + wins);
    $('.losses').text("losses: " + losses);
    $('.score').text(score);

    


    for(var i = 0; i < images.length; i++) {
        var fighters = $('<img>');
        fighters.addClass('fighters');
        fighters.attr('src', images[i]);
        fighters.attr('value', Math.floor(Math.random() * 11 + 1));
        $('.gems').append(fighters);
        
    }


    

    $('.fighters').on("click", function() {
        score += parseInt($(this).attr('value'));
        console.log(score);
        $('.score').text(score);
    })



    // var num1 = Math.floor(Math.random() * 11 + 1)
    // var num2 = Math.floor(Math.random() * 11 + 1)
    // var num3 = Math.floor(Math.random() * 11 + 1)
    // var num4 = Math.floor(Math.random() * 11 + 1)

    // function restart() {
    //     randomNum = Math.floor(Math.random() * 102 + 19);
    //     $('.current').text(randomNum);
      
      
      
    //     // num1 = Math.floor(Math.random() * 11 + 1);
    //     // num2 = Math.floor(Math.random() * 11 + 1);
    //     // num3 = Math.floor(Math.random() * 11 + 1);
    //     // num4 = Math.floor(Math.random() * 11 + 1);
    //     userNum = 0;
    //     $('.score').text(userNum);
        

    // }

    // function winLose() {
    //     if (userNum == randomNum) {
    //         wins++;
    //         $('.wins').text("wins: " + wins);
    //         restart();
    //     }

    //     else if (userNum > randomNum) {
    //         losses++;
    //         $('.losses').text("losses: " + losses);
    //         restart();
    //     }

       
       
       

    // }


    // $('#one').on('click', function () {
    //     // userNum = userNum + num1;
    //     // $('.score').text(userNum);
    //     winLose();
    // })

    // $('#two').on('click', function () {
    //     userNum = userNum + num2;
    //     console.log(userNum);
    //     $('.score').text(userNum);
    //     winLose();
    // })

    // $("#three").on('click', function () {
    //     userNum = userNum + num3;
    //     console.log(userNum);
    //     $('.score').text(userNum);
    //     winLose();
    // })

    // $('#four').on('click', function () {
    //     userNum = userNum + num4;
    //     console.log(userNum)
    //     $('.score').text(userNum);
    //     winLose();
    // })

});