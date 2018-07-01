$(function () {

    var randomNum = "";
    var losses = 0;
    var wins = 0;
    var score = 0;
    var images = ["./assets/images/Akuma1.png", "assets/images/pfken.png", "assets/images/vega.png", "assets/images/ryusf.jpg"];


    //put the current random number to match into a function
    function randomNumfun() {
        randomNum = Math.floor(Math.random() * 102 + 19); //current randomly generated number
    }

    //this was my attempt at adding images and giving them a random value from 1 - 12.. 
    //thinking theres an easier way but this is better then rewriting math.floor 4 times
    function fighterS() {
        for (var i = 0; i < images.length; i++) {
            var fighters = $('<img>');
            fighters.addClass('fighters');
            fighters.attr('src', images[i]);
            fighters.attr('value', Math.floor(Math.random() * 12 + 1));
            $('.gems').append(fighters);
        }
    }

    //function to reset all text on screen
    function resetText() {
        $('.current').text(randomNum);
        $('.wins').text("wins: " + wins);
        $('.losses').text("losses: " + losses);
        $('.score').text('Your score is: ');
        $('.fighters').empty();
    }

    //reset the random number and the score
    function resetAll() {
        randomNumfun();
        score = 0;
        resetText();

    }
    //Game Start 
    randomNumfun();
    resetText();
    fighterS();

    //takes the value from a fighter and turns it into an integer
    function fighterClick() {
        score += parseInt($(this).attr("value"));
        $(".score").text('Your score is: ' + score);
        if (score == randomNum) {
            wins++;                 //If your score equals the randomly generated number you win!
            resetAll();
        }
        else if (score > randomNum) {
            losses++;               //if you go over that number you lose!
            resetAll();
        };
    }

    //tried to make ,fighters work but after some research this was the way to get it all to come together
    $(document).on("click", '.fighters', fighterClick);

});