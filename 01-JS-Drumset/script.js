

function removeTransition(e) {
    e.target.classList.remove('playing');
}



function playSoundOnKeyDown(e) {

    playSound(e.keyCode);
}

function playSound(inputKey){
    const audio = document.querySelector(`audio[data-key="${+inputKey}"]`);
    const key = document.querySelector(`div[data-key="${+inputKey}"]`);

    if (!key) { note.innerHTML = ""; keys.classList.remove('playing'); }

    if (!audio) return;

    const keyNote = key.getAttribute("data-note");
    
    key.classList.add('playing');
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
const note = document.querySelector(".nowplaying");
keys.forEach(key =>
    key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSoundOnKeyDown);

// window.addEventListener('click' , playSound);