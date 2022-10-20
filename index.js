const jokeContainer = document.getElementById('joke-container');
const btn = document.getElementById('joke-btn');

let getJoke = () => {
    jokeContainer.classList.remove('fade');
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(
            (data) => data.json()
        ).then(
            (item) => {
                jokeContainer.textContent = `${item.joke}`;
                
            }
        ).then(()=>{
            jokeContainer.classList.add('fade');
        })
}


btn.addEventListener("click", getJoke)
getJoke()