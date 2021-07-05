const joke = document.getElementById('joke');
const button = document.getElementById('button');

// we use async await function to retrieve information from the web app Chuck Norris API and display it on the website
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
    } catch (error) {
        getJoke();
    }
}

getJoke();

button.addEventListener('click', getJoke);