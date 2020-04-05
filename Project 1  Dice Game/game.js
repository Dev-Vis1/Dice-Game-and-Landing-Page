var activePlayer = 0;
var scores = 0;
var MainScores = 0;
function init() {

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('roundScore-0').textContent = 0;
    document.getElementById('roundScore-1').textContent = 0;
    document.getElementById('dice').style.display = 'none';

}
function main() {

    init();
    document.querySelector('#roll').addEventListener('click', function () {
        dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.getElementById('dice');
        // var scor = document.getElementById('roundScore-' + activePlayer).textContent = dice;
        diceDOM.style.display = 'inline-block';
        diceDOM.src = 'dice-' + dice + '.jpg';
        if (dice > 1) {
            // add Score
            scores += dice;
            document.getElementById('roundScore-' + activePlayer).textContent = scores;

        } else {
            //restore back to zero
            scores = 0;
            document.getElementById('roundScore-' + activePlayer).textContent = 0;
            //changes the Player 
            if (activePlayer == 0) {
                activePlayer = 1;
            } else {
                activePlayer = 0;
            }
            MainScores = parseInt(document.getElementById('score-' + activePlayer).textContent)
        }
    }
    );

}
function hold() {
    document.querySelector('#hold').addEventListener('click', function () {
        //add the scores  to the main score
        tmpscore = parseInt(document.getElementById('roundScore-' + activePlayer).textContent);
        MainScores = MainScores + tmpscore;
        document.getElementById('score-' + activePlayer).textContent = MainScores;

        if (MainScores >= 100) {
            document.getElementById('playerscore-' + activePlayer).textContent = "WINNER !!!";
            document.getElementById("roll").disabled = true;
            document.getElementById("hold").disabled = true;


        }
        document.getElementById('roundScore-' + activePlayer).textContent = 0;
        //changes the player
        if (activePlayer == 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        scores = 0;
        MainScores = parseInt(document.getElementById('score-' + activePlayer).textContent);

    }
    )
}

function newgame() {
    document.querySelector('#newgame').addEventListener('click', function () {
        location.reload();
    }
    );

}

// function init() {
//     scores = [0, 0];
//     roundScore = 0;
//     activePlayer = 0;
// }
// function doFirst() {
//     scores = [0, 0];
//     roundScore = 0;
//     activePlayer = 0;
//     rollb = document.getElementById('roll');
//     round = document.getElementById('roundScore-' + activePlayer);
//     hold = document.getElementById('hold');
//     document.getElementById('dice').style.display = 'none';

//     rollb.addEventListener('click', rolldice, false);
//     hold.addEventListener('click', holdFunction, false);
// }
// function rolldice() {
//     dice = Math.floor(Math.random() * 6) + 1;
//     var diceDOM = document.getElementById('dice');
//     document.getElementById('roundScore-' + activePlayer).textContent = dice;
//     diceDOM.style.display = 'inline-block';
//     diceDOM.src = 'dice-' + dice + '.jpg';


// }
// function holdFunction() {
//     if (activePlayer = 0) {
//         activePlayer = 1;
//     } else {
//         activePlayer = 0;
//     }
//     // document.getElementById('roundScore-' + activePlayer).innerHTML = 0;
//     document.getElementById('roundScore-' + activePlayer).textContent = 0;
//     // init();


// }
// window.addEventListener('load', doFirst, false);
window.addEventListener('load', main)
window.addEventListener('load', hold)
window.addEventListener('load', newgame)