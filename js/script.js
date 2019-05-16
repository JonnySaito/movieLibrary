var movies = [
  {
    id: 1,
    title: 'Raising Arizona',
    year: 1987,
    directors: ['Joel Coen', 'Ethan Coen'],
    bio: 'When a childless couple of an ex-con and an ex-cop decide to help themselves to one of another family\'s quintuplets, their lives become more complicated than they anticipated.',
    length: 94,
    poster: 'RaisingArizona.jpg',
    genre: ['Comedy']
  },
  {
    id: 2,
    title: 'Citizen Kane',
    year: 1941,
    directors: ['Orson Welles'],
    bio: 'Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance.',
    length: 119,
    poster: 'citizenKane.jpg',
    genre: ['Drama']
  },
  {
    id: 3,
    title: 'Bladerunner',
    year: 1982,
    directors: ['Ridley Scott'],
    bio: 'A blade runner must pursue and terminate four replicants who stole a ship in space and returned to Earth to find their creator.',
    length: 117,
    poster: 'bladerunner.jpg',
    genre: ['Sci-fi', 'Action']
  },
  {
    id: 4,
    title: 'Royal Tenenbaums',
    year: 2001,
    directors: ['Wes Anderson'],
    bio: 'The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.',
    length: 110,
    poster: 'royalTenenbaums.jpg',
    genre: ['Comedy', 'Drama']
  },
  {
    id: 5,
    title: 'Taxi Driver',
    year: 1976,
    directors: ['Martin Scorcese'],
    bio: 'A mentally unstable veteran works as a nighttime taxi driver in NYC, where the perceived sleaze fuels his urge for violent action by attempting to liberate an underage prostitute.',
    length: 114,
    poster: 'taxiDriver.jpg',
    genre: ['Drama']
  },
//   {
//     id: 6,
//     title: 'Shoplifters',
//     year: 2018,
//     directors: ['Hirokazu Koreeda'],
//     bio: 'A family of small-time crooks take in a child they find outside in the cold.',
//     length: 121,
//     poster: 'shoplifters.jpg',
//    genre: ['Drama']
//  },
//   {
//     id: 7,
//     title: 'Big Lebowski',
//     year: 1998,
//     directors: ['Joel Coen', 'Ethan Coen'],
//     bio: 'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
//     length: 117,
//     poster: 'bigLebowski.jpg',
//    genre: ['Comedy']
//  },
//   {
//     id: 8,
//     title: 'Heathers',
//     year: 1988,
//     directors: ['Michael Lehmann'],
//     bio: 'In order to get out of the snobby clique that is destroying her good-girl reputation, an intelligent teen teams up with a dark sociopath in a plot to kill the cool kids.',
//     length: 103,
//     poster: 'heathers.jpg',
//    genre: ['Comedy']
//  },
//   {
//     id: 9,
//     title: 'Wings of Desire',
//     year: 1987,
//     directors: ['Wim Wenders'],
//     bio: 'An angel tires of overseeing human activity and wishes to become human when he falls in love with a mortal.',
//     length: 128,
//     poster: 'wingsOfDesire.jpg',
//    genre: ['Drama']
//  },
//   {
//     id: 10,
//     title: 'Sen to Chihiro',
//     year: 2001,
//     directors: ['Hayao Miyazaki'],
//     bio: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
//     length: 125,
//     poster: 'senToChihiro.jpg',
//    genre: ['Animation']
//  },
// {
//    id: 11,
//    title: 'Rear Window',
//    year: 1954,
//    directors: ['Alfred Hitchcock'],
//    bio: 'A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.',
//    length: 112,
//    poster: 'rearWindow.jpg',
//   genre: ['Drama', 'Suspense']
// },
// {
//   id: 12,
//   title: 'Ratatouille',
//   year: 2007,
//   directors: ['Brad Bird', 'Jan Pinkava'],
//   bio: 'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.',
//   length: 111,
//   poster: 'ratatouille.jpg',
//  genre: ['Animation', 'Comedy']
// },
];

// console.log(movies);

var moviesList = document.getElementById('moviesList');

for (var i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
  var movie = movies[i];
  // console.log(movie.title);

  // METHOD 1 ***MAY NOT WORK IN JS ANYMORE!***:
  // document.getElementById('moviesList').innerHTML += '<p>'+ movie.title +'</p>'
  // moviesList.innerHTML += '<div class="col-12 col-sm-6 col-md-4">';
  //   moviesList.innerHTML += '<div class="card">';
  //
  //   moviesList.innerHTML += '</div>';
  // moviesList.innerHTML += '</div>';
  // ***NOW THIS METHOD (ABOVE) MAY NOT WORK ANY MORE***

// METHOD 2:
var genreClass = '';

if(movie.genre[0] === 'Drama'){
  genreClass = 'border-primary';
} else if(movie.genre[0] === 'Comedy'){
  genreClass = 'border-success';
} else if(movie.genre[0] === 'Sci-fi'){
  genreClass = 'border-danger';
} else if(movie.genre[0] === 'Animation'){
  genreClass = 'border-secondary';
} else if(movie.genre[0] === 'Suspense'){
  genreClass = 'border-warning';
} else if(movie.genre[0] === 'Action'){
  genreClass = 'border-info';
} else {
  genreClass = 'border-dark';
}


var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
    movieCard += '<div class="movieThumb card '+genreClass+' " onclick="showMoreMovie('+movie.id+');">';
    // ONE WAY TO ADD A CLICK EVENT; BELOW IS ANOTHER WAY
    // movieCard += '<div class="movieThumb movieThumb2 card '+genreClass+' " data-id="'+movie.id+'">';
    movieCard += '<img src="images/posters/'+movie.poster+'" class="card-img-top" alt="">';
      movieCard += '<div class="card-body">';
        movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
      movieCard += '</div>';
    movieCard += '</div>';
movieCard += '</div>';
// console.log(movieCard);
moviesList.innerHTML += movieCard;

// METHOD 3 (A LONGER WAY):
// var columns = document.createElement('div');
// var columnsAttr = document.createAttribute('class');
// columnsAttr.value = 'col-12 col-sm-6 col-md-4';
// columns.setAttributeNode(columnsAttr);
//
// var card = document.createElement('div');
// var cardAttr = document.createAttribute('class');
// cardAttr.value = 'card';
// card.setAttributeNode(cardAttr);
//
// var cardBody = document.createElement('div');
// var cardBodyAttr = document.createAttribute('class');
// cardBodyAttr.value = 'card-body';
// card.setAttributeNode(cardAttr);
//
// var cardTitle = document.createElement('h5');
// var cardTitleAttr = document.createAttribute('class');
// cardTitleAttr.value = 'card-title';
// cardTitle.setAttributeNode(cardTitleAttr);
// var cardTitleText = document.createTextNode(movie.title);
//
// cardTitle.appendChild(cardTitleText);
// cardBody.appendChild(cardTitle);
// card.appendChild(cardBody);
// columns.appendChild(card);
//
// moviesList.appendChild(columns);
//
}

function showMoreMovie(movieNumber){
  var singleMovie;
  // console.log(movieNumber);
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].id === movieNumber) {
            // console.log(movies[i]);
            singleMovie = movies[i];
            break;
        }
    }

        document.getElementById('posterImage').src = 'images/posters/'+singleMovie.poster;
        document.getElementById('movieTitle').innerText = singleMovie.title;
        document.getElementById('movieYear').innerText = singleMovie.year;

        document.getElementById('movieDirectors').innerHTML = "";
          for (var j = 0; j < singleMovie.directors.length; j++) {
                document.getElementById('movieDirectors').innerHTML += "<li class = 'list-inline-item'>" + singleMovie.directors[j] + "</li>";
            };
        document.getElementById('movieBio').innerText = singleMovie.bio;
        document.getElementById('movieLength').innerText = singleMovie.length;

        document.getElementById('movieGenre').innerHTML = "";
        var badgeClass = '';
          for (var k = 0; k < singleMovie.genre.length; k++) {
              if(movie.genre[0] === 'Drama'){
                badgeClass = 'badge badge-primary';
              } else if(movie.genre[0] === 'Comedy'){
                badgeClass = 'badge badge-success';
              } else if(movie.genre[0] === 'Sci-fi'){
                badgeClass = 'badge badge-danger';
              } else if(movie.genre[0] === 'Animation'){
                badgeClass = 'badge badge-secondary';
              } else if(movie.genre[0] === 'Suspense'){
                badgeClass = 'badge badge-warning';
              } else if(movie.genre[0] === 'Action'){
                badgeClass = 'badge badge-info';
              } else {
                badgeClass = 'badge badge-dark';
              }
                document.getElementById('movieGenre').innerHTML += '<span class='+badgeClass+'>' + singleMovie.genre[k] + '</span>';
            };

        document.getElementById('moviePopUp').style.display = 'flex';
        document.body.style.overflow = 'hidden';
}


var movieThumbnails = document.getElementsByClassName('movieThumb2');
  for (var i = 0; i < movieThumbnails.length; i++) {
    // movieThumbnails[i];
    // console.log(movieThumbnails[i]);
    // console.log(movieThumbnails[i].dataset.id);
    // var id = parseInt(movieThumbnails[i].dataset.id);
    // movieThumbnails[i].onclick = showMoreMovie;
    // ALTERNATIVE WAY TO ABOVE:
    movieThumbnails[i].onclick = function(){
      var id = parseInt(this.dataset.id);
      showMoreMovie(id);
    }
}

document.getElementById('close').onclick = function(){
document.getElementById('moviePopUp').style.display = 'none'
document.body.style.overflow = 'scroll';
}
