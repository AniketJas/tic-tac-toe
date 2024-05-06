var chk = 0;
var winp1 = 0;
var winp2 = 0;

var b1btn = document.getElementById('b1');
var b2btn = document.getElementById('b2');
var b3btn = document.getElementById('b3');
var b4btn = document.getElementById('b4');
var b5btn = document.getElementById('b5');
var b6btn = document.getElementById('b6');
var b7btn = document.getElementById('b7');
var b8btn = document.getElementById('b8');
var b9btn = document.getElementById('b9');

//function to set values to buttons
function setbtn1() {
    if (chk % 2 == 0) {
        b1btn.innerHTML = 'X';
        b1btn.value = 'X';
    } else {
        b1btn.innerHTML = 'O';
        b1btn.value = 'O';
    }
    b1btn.disabled = true;
    chk++;
}

function setbtn2() {
    if (chk % 2 == 0) {
        b2btn.innerHTML = 'X';
        b2btn.value = 'X';
    } else {
        b2btn.innerHTML = 'O';
        b2btn.value = 'O';
    }
    b2btn.disabled = true;
    chk++;
}

function setbtn3() {
    if (chk % 2 == 0) {
        b3btn.innerHTML = 'X';
        b3btn.value = 'X';
    } else {
        b3btn.innerHTML = 'O';
        b3btn.value = 'O';
    }
    b3btn.disabled = true;
    chk++;
}

function setbtn4() {
    if (chk % 2 == 0) {
        b4btn.innerHTML = 'X';
        b4btn.value = 'X';
    } else {
        b4btn.innerHTML = 'O';
        b4btn.value = 'O';
    }
    b4btn.disabled = true;
    chk++;
}

function setbtn5() {
    if (chk % 2 == 0) {
        b5btn.innerHTML = 'X';
        b5btn.value = 'X';
    } else {
        b5btn.innerHTML = 'O';
        b5btn.value = 'O';
    }
    b5btn.disabled = true;
    chk++;
}

function setbtn6() {
    if (chk % 2 == 0) {
        b6btn.innerHTML = 'X';
        b6btn.value = 'X';
    } else {
        b6btn.innerHTML = 'O';
        b6btn.value = 'O';
    }
    b6btn.disabled = true;
    chk++;
}

function setbtn7() {
    if (chk % 2 == 0) {
        b7btn.innerHTML = 'X';
        b7btn.value = 'X';
    } else {
        b7btn.innerHTML = 'O';
        b7btn.value = 'O';
    }
    b7btn.disabled = true;
    chk++;
}

function setbtn8() {
    if (chk % 2 == 0) {
        b8btn.innerHTML = 'X';
        b8btn.value = 'X';
    } else {
        b8btn.innerHTML = 'O';
        b8btn.value = 'O';
    }
    b8btn.disabled = true;
    chk++;
}

function setbtn9() {
    if (chk % 2 == 0) {
        b9btn.innerHTML = 'X';
        b9btn.value = 'X';
    } else {
        b9btn.innerHTML = 'O';
        b9btn.value = 'O';
    }
    b9btn.disabled = true;
    chk++;
}

//resetting values

function playAgain() {

    b1btn.value = b2btn.value = b3btn.value = b4btn.value = b5btn.value = b6btn.value = b7btn.value = b8btn.value = b9btn.value = '';

    b1btn.innerHTML = b2btn.innerHTML = b3btn.innerHTML = b4btn.innerHTML = b5btn.innerHTML = b6btn.innerHTML = b7btn.innerHTML = b8btn.innerHTML = b9btn.innerHTML = '';

    b1btn.disabled = b2btn.disabled = b3btn.disabled = b4btn.disabled = b5btn.disabled = b6btn.disabled = b7btn.disabled = b8btn.disabled = b9btn.disabled = false;

    chk = 0;
    winner.innerHTML = '';
}

//Start a fresh game

function newGame() {
    playAgain();
    winp1 = 0;
    winp2 = 0;

    document.getElementById('player1score').innerHTML = '0';
    document.getElementById('player2score').innerHTML = '0';
}

//function to check winner

var winner = document.getElementById('winner');

function playerWins() {

    //check if player 1(X) wins

    if (b1btn.value == 'X' && b2btn.value == 'X' && b3btn.value == 'X') {
        winner.innerHTML = 'Player 1 wins';
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        winp1 = winp1 + 1;
    }

    else if (b4btn.value == 'X' && b5btn.value == 'X' && b6btn.value == 'X') {
        winner.innerHTML = 'Player 1 wins';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        winp1 = winp1 + 1;
    }

    else if (b7btn.value == 'X' && b8btn.value == 'X' && b9btn.value == 'X') {
        winner.innerHTML = 'Player 1 wins';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        winp1 = winp1 + 1;
    }

    else if (b1btn.value == 'X' && b4btn.value == 'X' && b7btn.value == 'X') {
        winner.innerHTML = 'Player 1 wins';
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        winp1 = winp1 + 1;
    }

    else if (b2btn.value == 'X' && b5btn.value == 'X' && b8btn.value == 'X') {
        winner.innerHTML = 'Player 1 wins';
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;
        winp1 = winp1 + 1;
    }

    else if (b3btn.value == 'X' && b6btn.value == 'X' && b9btn.value == 'X') {
        winner.innerHTML = 'Player 1 wins';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        winp1 = winp1 + 1;
    }

    else if (b1btn.value == 'X' && b5btn.value == 'X' && b9btn.value == 'X') {
        winner.innerHTML = 'Player 1 wins';
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        winp1 = winp1 + 1;
    }

    else if (b3btn.value == 'X' && b5btn.value == 'X' && b7btn.value == 'X') {
        winner.innerHTML = 'Player 1 wins';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        winp1 = winp1 + 1;
    }

    //check if player 2 wins

    else if (b1btn.value == 'O' && b2btn.value == 'O' && b3btn.value == 'O') {
        winner.innerHTML = 'Player 2 wins';
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        winp2 = winp2 + 1;
    }

    else if (b4btn.value == 'O' && b5btn.value == 'O' && b6btn.value == 'O') {
        winner.innerHTML = 'Player 2 wins';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        winp2 = winp2 + 1;
    }

    else if (b7btn.value == 'O' && b8btn.value == 'O' && b9btn.value == 'O') {
        winner.innerHTML = 'Player 2 wins';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        winp2 = winp2 + 1;
    }

    else if (b1btn.value == 'O' && b4btn.value == 'O' && b7btn.value == 'O') {
        winner.innerHTML = 'Player 2 wins';
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        winp2 = winp2 + 1;
    }

    else if (b2btn.value == 'O' && b5btn.value == 'O' && b8btn.value == 'O') {
        winner.innerHTML = 'Player 2 wins';
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;
        winp2 = winp2 + 1;
    }

    else if (b3btn.value == 'O' && b6btn.value == 'O' && b9btn.value == 'O') {
        winner.innerHTML = 'Player 2 wins';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        winp2 = winp2 + 1;
    }

    else if (b1btn.value == 'O' && b5btn.value == 'O' && b9btn.value == 'O') {
        winner.innerHTML = 'Player 2 wins';
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        winp2 = winp2 + 1;
    }

    else if (b3btn.value == 'O' && b5btn.value == 'O' && b7btn.value == 'O') {
        winner.innerHTML = 'Player 2 wins';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        winp2 = winp2 + 1;
    }

    else if (chk >= 9) {
        winner.innerHTML = 'Tied !!';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }
    document.getElementById('player1score').innerHTML = winp1;
    document.getElementById('player2score').innerHTML = winp2;
}

function openRules() {
    document.getElementById('gamerule').style.display = 'block';

    document.getElementById('aboutme').style.display = 'none';
}

function openAbtMe() {
    document.getElementById('aboutme').style.display = 'block';

    document.getElementById('gamerule').style.display = 'none';
}

window.onkeydown = function (gfg) {
    if (gfg.keyCode === 27) {
        document.getElementById('gamerule').style.display = 'none';
        document.getElementById('aboutme').style.display = 'none';
    };
}

window.addEventListener('mouseup', function (event) {
    var popupAbtme = document.getElementById('aboutme');
    var popupRule = document.getElementById('aboutme');

    if (event.target != popupAbtme && event.target.parentNode != popupAbtme) {
        document.getElementById('aboutme').style.display = 'none';
    }

    if (event.target != popupRule && event.target.parentNode != popupRule) {
        document.getElementById('gamerule').style.display = 'none';
    }
})

function is_touch_enabled() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}