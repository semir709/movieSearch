import {MY_API_KEY} from './config.js';

let movie = document.getElementById("movieSearch").value;


document.getElementById("btn").addEventListener("click", () => {
    movie = document.getElementById("movieSearch").value;
    
    getMovies();
});


async function getMovies() {
    await fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/" + movie, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": MY_API_KEY,
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        
        return data;
    })
    .then(data => {
        let e = document.getElementById("movies");
        let imgBlock;
        let tagP;
        let tagPic;

        while(e.firstChild){
            e.removeChild(e.firstChild);
        }

        data.titles.forEach(element => {
            imgBlock = document.createElement("div");
            tagP = document.createElement("p");
            tagPic = document.createElement("img");

            imgBlock.style.background = "#041f4b";

            tagP.style.color = "white";
            tagP.style.margin = "10px"
   
            tagPic.src = element.image;
            tagPic.style.width = "100%";
            tagPic.style.height = "400px";
          

            let text = document.createTextNode(element.title);
            tagP.appendChild(text);

            imgBlock.appendChild(tagPic);
            imgBlock.appendChild(tagP);

            e.appendChild(imgBlock);
          
        });
    })
    .catch(err => {
        console.error(err);
    });
}

