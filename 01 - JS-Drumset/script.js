

function removeTransitionanHideKeyNote(e) {
    console.log(e.target.classList);
    e.target.classList.remove('playing');
}



function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);


    console.log(note);
    console.log(key);
    if (!key) { note.innerHTML = ""; keys.classList.remove('playing'); }

    if (!audio) return;

    const keyNote = key.getAttribute("data-note");
    console.log(keyNote);

    key.classList.add('playing');
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
const note = document.querySelector(".nowplaying");
keys.forEach(key =>
    key.addEventListener('transitionend', removeTransitionanHideKeyNote));

window.addEventListener('keydown', playSound);