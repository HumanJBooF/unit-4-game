$(function () {

    const images = ["./assets/images/ryunobg.png", "assets/images/veganobg.png", "assets/images/sagatnobg.png", "assets/images/kumanobgpng.png"];
    const $current = $('.current');
    const $wins = $('.wins');
    const $losses = $('.losses');
    const $score = $('.score');
    const $listGroup = $('.list-group');
    let randomNum = "";
    let losses = 0;
    let wins = 0;
    let score = 0;

    //put the current random number to match into a function
    const randomNumfun = () => {
        randomNum = Math.floor(Math.random() * 102 + 19); //current randomly generated number
    }

    //adding images to html with a random value of 1-12
    const fighterS = () => {
        images.forEach(image => {
            const fighters = $('<img>');
            fighters.addClass('fighters');
            fighters.attr('src', image);
            fighters.attr('value', Math.floor(Math.random() * 12 + 1));
            $('.gems').append(fighters);
        });
    }

    //reset the random number and the score
    const resetAll = () => {
        randomNumfun();
        score = 0;
        $current.text(`Target:  ${randomNum}`);
        $wins.text(`Wins: ${wins}`);
        $losses.text(`Losses: ${losses}`);
        $score.text(`Your score is: `);
        $('.fighters').empty();
    }

    //Game Start 
    randomNumfun();
    resetAll();
    fighterS();

    //takes the value from a fighter and turns it into an integer
    function fighterClick () {
        score += parseInt($(this).attr("value"));
        $(".score").text(`Your score is: ${score}`);
        if (score === randomNum) {
            wins++;                //If your score equals the randomly generated number you win!
            resetAll();
        } else if (score > randomNum) {     //if you go over that number you lose!
            losses++;
            resetAll();
        };
    }

    //click event!
    $(document).on("click", '.fighters', fighterClick);
    $listGroup.on('click', () => {
        $listGroup.fadeOut();
    })
});