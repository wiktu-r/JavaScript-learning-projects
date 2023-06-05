keyClasses = document.getElementsByClassName("key");
const arrayOfKeys = Array.from(keyClasses);

document.addEventListener('keydown', (e) => {
    let keyLetter = e.key;
    letterToAscii = keyLetter.toUpperCase().charCodeAt(0)

    arrayOfKeys.forEach(key => {
        if (key.getAttribute("data-key") == letterToAscii) {
            key.classList.add("playing");

            audioHTML = document.querySelector(`audio[data-key="${letterToAscii}"]`);
            audioSrc = new Audio(audioHTML.src);
            audioSrc.play();

            setTimeout(function() {
                key.classList.remove("playing");
              }, 150);
        } 
    })

})