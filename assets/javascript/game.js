$(function() {

   var randomNum = Math.floor(Math.random() * 102+19)
   var losses = 0;
   var wins = 0;
   var userNum = 0;


    $('.current').text(randomNum);
    $('.wins').text("wins: " + wins);
    $('.losses').text("losses: " + losses);
    $('.score').text(userNum);

    var num1= Math.floor(Math.random() * 11+1)
    var num2= Math.floor(Math.random() * 11+1)
    var num3= Math.floor(Math.random() * 11+1)
    var num4= Math.floor(Math.random() * 11+1)





function restart(){
    randomNum = Math.floor(Math.random() * 102+19);
    $('.current').text(randomNum);
    num1 = Math.floor(Math.random() * 11+1);
    num2 = Math.floor(Math.random() * 11+1);
    num3 = Math.floor(Math.random() * 11+1);
    num4 = Math.floor(Math.random() * 11+1);
    userNum = 0;
    $('.score').text(userNum);

} 

function winLose(){
    if(userNum == randomNum){
        wins++;
        $('.wins').text(wins);
        restart();
    }
   
    else if( userNum > randomNum){
        losses++;
        $('.losses').text(losses);
        restart();
    
    }


    
}





    $('#one').on('click', function(){
        userNum = userNum + num1;
        console.log(userNum);
        $('.score').text(userNum);  
        winLose();
     })

    $('#two').on('click',function(){
        userNum = userNum + num2;
        console.log(userNum);
        $('.score').text(userNum);
        winLose();
    })

    $("#three").on('click',function(){
        userNum = userNum + num3;
        console.log(userNum);
        $('.score').text(userNum);
        winLose();
    })

    $('#four').on('click',function(){
        userNum = userNum + num4;
        console.log(userNum)
        $('.score').text(userNum);
        winLose();
    })
   
});