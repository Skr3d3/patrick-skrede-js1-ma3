// Question 2

const apiKey = "377751d8f1464102a392c4093e41098b"
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const loader = document.querySelector(".loader");
const showLoader = () => loader.style.display = "block";
const hideLoader = () => loader.style.display = "none";

const gameContainer = document.querySelector("#game-container");

const fetchGames = async() => {

    showLoader();

    try {
    const response = await fetch(url);
    const  data = await response.json()
    const games = data.results

        for(let i = 0; i < 8 && i < games.length; i++) {
            const game = games[i];
            const name = game.name;
            const rating = game.rating;
            const tags = game.tags.length;

            gameContainer.innerHTML += `
            <h2>Name: ${name}</h2>
            <p>Rating: ${rating}</p>
            <p>Number of Tags: ${tags}</p>
            `
        }
    }
    catch (error) {
        
        console.log("Errormessage", error)
        gameContainer.innerHTML = "An unexpected error occured. Please try again later";
    }
    
    finally {
        hideLoader();
    }
};

fetchGames();