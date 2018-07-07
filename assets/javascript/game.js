$(function () {

    var randomNum = "";
    var losses = 0;
    var wins = 0;
    var score = 0;
    var images = ["./assets/images/ryunobg.png", "assets/images/veganobg.png", "assets/images/sagatnobg.png", "assets/images/kumanobgpng.png"];
    

    //put the current random number to match into a function
    function randomNumfun() {
        randomNum = Math.floor(Math.random() * 102 + 19); //current randomly generated number
    }

//adding images to html with a random value of 1-12
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
        $('.current').text("Target: " + randomNum);
        $('.wins').text("Wins: " + wins);
        $('.losses').text("Losses: " + losses);
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
            wins++;                //If your score equals the randomly generated number you win!
            resetAll();
        }
        else if (score > randomNum) {
            losses++;               //if you go over that number you lose!
            resetAll();
        };
    }
       
   $('#soundbutton').on('click', function(){
       console.log('wegotclick');
 
   })


    //click event!
    $(document).on("click", '.fighters', fighterClick);
 
   


});