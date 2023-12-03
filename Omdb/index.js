let rootElement = document.getElementById('root');
let root2Element = document.getElementById('root-2');
let errorElement = document.getElementById('error');

let search = async ()=>{
    rootElement.style.display = 'block';
    rootElement.style.display = 'grid';
    root2Element.style.display = 'none';
    rootElement.innerHTML = '';
    let movieName = document.getElementById("movieName").value;
    errorElement.style.display='none'
    try{
        let URL = await fetch(`https://www.omdbapi.com/?apikey=1f89b8&s=${movieName}`)
        let data = await URL.json();

        let home = document.getElementById('home');
        home.style.display = 'none'

        for(let i of data.Search){
            let movieCard = document.createElement('div');
            let imgData = document.createElement('img');
            let movieName = document.createElement('p');
            let releaseYear = document.createElement('p');
            
            imgData.src = i.Poster;
            movieName.textContent = i.Title;
            releaseYear.textContent = i.Year;

            movieCard.append(imgData,movieName, releaseYear);
            rootElement.append(movieCard);
        }
        let movieCard = document.querySelectorAll('#root>div');
        movieCard.forEach(element=>{
            let nameOfMovie = element.children.item(1).innerHTML
            element.addEventListener('click', ()=>{
                moviePage(nameOfMovie);
            })
        })
    }
    catch(error){
        errorElement.style.display = 'flex'
    }
}

let moviePage = async (nameOfMovie)=>{
    root2Element.innerHTML='';
    rootElement.style.display = 'none';
    root2Element.style.display = 'block';
    let newUrl = await fetch(`https://www.omdbapi.com/?apikey=1f89b8&t=${nameOfMovie}`)
    let newData = await newUrl.json();
    let page = document.createElement('div');

    let newName = document.createElement('p');
    newName.textContent = newData.Title;
    
    let newImg = document.createElement('img');
    newImg.src = newData.Poster;
    let imgDiv = document.createElement('div');
    imgDiv.append(newImg);

    let released = document.createElement('p');
    released.textContent = `Released on :  ${newData.Released}`;

    let actors = document.createElement('p');
    actors.textContent = `Actors :  ${newData.Actors}`;

    let awards = document.createElement('p');
    awards.textContent = `Awards :  ${newData.Awards}`;

    let boxOffice = document.createElement('p');
    boxOffice.textContent = `BoxOffice Collection :  ${newData.BoxOffice}`;

    let country = document.createElement('p');
    country.textContent = `Country :  ${newData.country}`;

    let director = document.createElement('p');
    director.textContent = `Director :  ${newData.Director}`;

    let genre = document.createElement('p');
    genre.textContent = `Genre :  ${newData.Genre}`;

    let language = document.createElement('p');
    language.textContent = `Languages :  ${newData.Language}`;

    let plot = document.createElement('p');
    plot.textContent = `Plot :  ${newData.Plot}`;

    let rated = document.createElement('p');
    rated.textContent = `Ratings :  ${newData.Rated}`;

    let writers = document.createElement('p');
    writers.textContent = `Written by :  ${newData.Writer}`;

    let runTime = document.createElement('p');
    runTime.textContent = `Total Runtime :  ${newData.Runtime}`;

    let imdbRating = document.createElement('p');
    imdbRating.textContent = `IMDB Rating :  ${newData.imdbRating}`;

    let textDiv = document.createElement('div');
    textDiv.append(newName, released, actors, awards, boxOffice, director, country, language, genre, plot, rated, writers, runTime, imdbRating)

    page.append(imgDiv, textDiv);
    root2Element.append(page)
}