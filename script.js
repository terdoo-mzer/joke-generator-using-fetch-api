window.addEventListener('DOMContentLoaded', generateJoke);

const jokeSetup = document.querySelector('.joke-setup');
const jokePunchline = document.querySelector('.joke-punchline');

const generateJokeButton = document.querySelector('.generateJokeBtn');
generateJokeButton.addEventListener('click', generateJoke);

function generateJoke() {
    const url = 'https://official-joke-api.appspot.com/random_joke';

     fetch(url)
    .then(function(response) {
    return response.json();
    })
    .then(function(data){
        jokeSetup.innerHTML =  data.setup;
        jokePunchline.innerHTML = `Answer: ${data.punchline}`;
    })
    .catch(function(err) {
        console.error(err);
        jokeSetup.innerHTML = "Api is currently down";
    });

}

// Set text to text to Speech using SpeechSynthesis Interface (Web Speech API)
speechIcon = document.querySelector('.speech-icon')

speechIcon.addEventListener('click', textToAudio);
function textToAudio() {
    let msg = `${jokeSetup.innerHTML} ${jokePunchline.innerHTML}`;
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 5;
    speech.rate = 1;
    speech.pitch = .8;
    
    window.speechSynthesis.speak(speech);
}


// Set random background images
function setBackground() {
    const background = [
        'url("assets/img/smiley2.jpg")',
        'url("assets/img/smiley3.jpg")',
        'url("assets/img/smiley4.jpg")'
    ];

    let randomBackground = Math.floor(Math.random() * (background.length));
    document.querySelector('.bg-image').style.backgroundImage = background[randomBackground];
}

// window.addEventListener('DOMContentLoaded', setBackground);

setBackground();

// Set time duration to run the setBackground function
setInterval(() => {
  setBackground();
}, 6500);