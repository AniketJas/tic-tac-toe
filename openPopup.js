
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
    document.getElementById('aboutme').style.display = 'none';

    document.getElementById('gamerule').style.display = 'none';
})

window.addEventListener('touchend', function (event) {
    document.getElementById('aboutme').style.display = 'none';

    document.getElementById('gamerule').style.display = 'none';
})