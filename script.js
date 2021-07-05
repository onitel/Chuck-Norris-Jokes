const joke = document.getElementById('joke');
const button = document.getElementById('button');

async function getJoke() {
    const proxyUrl = "https://api.chucknorris.io/jokes/random";
    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const randomJoke = await data.value;
        if (randomJoke.length > 180) {
            joke.classList.add("veryLongJoke");
        } else if (randomJoke.length > 150) {
            joke.classList.add("longerJoke");
        } else if (randomJoke.length > 120) {
            joke.classList.add("longJoke");
        } else {
            joke.classList.remove('longJoke');
            joke.classList.remove('longerJoke');
            joke.classList.remove('veryLongJoke');
        }
        joke.innerText = randomJoke;
        console.log(randomJoke);
        console.log(randomJoke.length);
    } catch (error) {
        getJoke();
        console.log(error);
    }
}

getJoke();

button.addEventListener('click', getJoke);