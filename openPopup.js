
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

    var gamerule = document.getElementById('gamerule');
    var abtme = document.getElementById('aboutme');

    if (event.target != gamerule && event.target.parentNode != gamerule) {
        document.getElementById('gamerule').style.display = 'none';
    }

    if (event.target != abtme && event.target.parentNode != abtme) {
        document.getElementById('aboutme').style.display = 'none';
    }
})

window.addEventListener('touchend', function (event) {
    var gamerule = document.getElementById('gamerule');
    var abtme = document.getElementById('aboutme');

    if (event.target != gamerule && event.target.parentNode != gamerule) {
        document.getElementById('gamerule').style.display = 'none';
    }

    if (event.target != abtme && event.target.parentNode != abtme) {
        document.getElementById('aboutme').style.display = 'none';
    }
})