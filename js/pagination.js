var movies = [
  {
    id: 1,
    title: 'Raising Arizona',
    year: 1987,
    directors: ['Joel Coen', 'Ethan Coen'],
    bio: 'When a childless couple of an ex-con and an ex-cop decide to help themselves to one of another family\'s quintuplets, their lives become more complicated than they anticipated.',
    movieLength: 94,
    poster: 'RaisingArizona.jpg',
    genre: ['Comedy']
  },
  {
    id: 2,
    title: 'Paris, Texas',
    year: 1984,
    directors: ['Wim Wenders'],
    bio: 'Travis Henderson, an aimless drifter who has been missing for four years, wanders out of the desert and must reconnect with society, himself, his life, and his family.',
    movieLength: 145,
    poster: 'parisTexas.jpg',
   genre: ['Drama', 'Psychological']
  },
  {
    id: 3,
    title: 'Les Quatre Cents Coups',
    year: 1971,
    directors: ['Francois Truffaut'],
    bio: 'A young boy, left without attention, delves into a life of petty crime.',
    movieLength: 99,
    poster: '400Blows.jpg',
   genre: ['Drama']
  },
  {
    id: 4,
    title: 'Chinatown',
    year: 1974,
    directors: ['Roman Polanski'],
    bio: 'A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption, and murder.',
    movieLength: 130,
    poster: 'chinatown.jpg',
    genre: ['Drama']
  },
  {
    id: 5,
    title: 'Bladerunner',
    year: 1982,
    directors: ['Ridley Scott'],
    bio: 'A blade runner must pursue and terminate four replicants who stole a ship in space and returned to Earth to find their creator.',
    movieLength: 117,
    poster: 'bladerunner.jpg',
    genre: ['Sci-fi', 'Action']
  },
  {
    id: 6,
    title: 'Royal Tenenbaums',
    year: 2001,
    directors: ['Wes Anderson'],
    bio: 'The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.',
    movieLength: 110,
    poster: 'royalTenenbaums.jpg',
    genre: ['Comedy', 'Drama']
  },
  {
    id: 7,
    title: 'Mulholland Drive',
    year: 2001,
    directors: ['David Lynch'],
    bio: 'After a car wreck on the winding Mulholland Drive renders a woman amnesiac, she and a perky Hollywood-hopeful search for clues and answers across Los Angeles in a twisting venture beyond dreams and reality.',
    movieLength: 147,
    poster: 'mulhollandDrive.jpg',
   genre: ['Psychological', 'Drama']
  },
  {
    id: 8,
    title: 'Big Lebowski',
    year: 1998,
    directors: ['Joel Coen', 'Ethan Coen'],
    bio: 'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
    movieLength: 117,
    poster: 'bigLebowski.jpg',
   genre: ['Comedy']
 },
 {
    id: 9,
    title: 'Wings of Desire',
    year: 1987,
    directors: ['Wim Wenders'],
    bio: 'An angel tires of overseeing human activity and wishes to become human when he falls in love with a mortal.',
    movieLength: 128,
    poster: 'wingsOfDesire.jpg',
   genre: ['Drama']
 },
  {
    id: 10,
    title: 'Sen to Chihiro',
    year: 2001,
    directors: ['Hayao Miyazaki'],
    bio: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
    movieLength: 125,
    poster: 'senToChihiro.jpg',
   genre: ['Animation']
 },
{
   id: 11,
   title: 'Rear Window',
   year: 1954,
   directors: ['Alfred Hitchcock'],
   bio: 'A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.',
   movieLength: 112,
   poster: 'rearWindow.jpg',
  genre: ['Drama', 'Suspense', 'Psychological']
},
{
  id: 12,
  title: 'Ratatouille',
  year: 2007,
  directors: ['Brad Bird', 'Jan Pinkava'],
  bio: 'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.',
  movieLength: 111,
  poster: 'ratatouille.jpg',
 genre: ['Animation', 'Comedy']
},
{
  id: 13,
  title: 'Heathers',
  year: 1988,
  directors: ['Michael Lehmann'],
  bio: 'In order to get out of the snobby clique that is destroying her good-girl reputation, an intelligent teen teams up with a dark sociopath in a plot to kill the cool kids.',
  movieLength: 103,
  poster: 'heathers.jpg',
 genre: ['Comedy', 'Psychological']
},
{
  id: 14,
  title: 'Harold and Maude',
  year: 1971,
  directors: ['Hal Ashby'],
  bio: 'Young, rich, and obsessed with death, Harold finds himself changed forever when he meets lively septuagenarian Maude at a funeral.',
  movieLength: 91,
  poster: 'haroldAndMaude.jpg',
 genre: ['Comedy', 'Drama']
},
{
  id: 15,
  title: 'Dreams',
  year: 1990,
  directors: ['Akira Kurosawa'],
  bio: 'A collection of tales based upon the actual dreams of director Akira Kurosawa. There\'s a very cool story about a foxy ghost who visits a dude stuck in a snowstorm.',
  movieLength: 119,
  poster: 'dreams.jpg',
 genre: ['Drama', 'Japanese']
},
{
  id: 16,
  title: 'Crouching Tiger, Hidden Dragon',
  year: 2000,
  directors: ['Ang Lee'],
  bio: 'A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure with a mysterious man in the frontier of the nation.',
  movieLength: 120,
  poster: 'crouchingTiger.jpg',
 genre: ['Drama', 'Action']
},
{
  id: 17,
  title: 'Shoplifters',
  year: 2018,
  directors: ['Hirokazu Koreeda'],
  bio: 'A family of small-time crooks take in a child they find outside in the cold.',
  movieLength: 121,
  poster: 'shoplifters.jpg',
 genre: ['Drama']
},
{
  id: 18,
  title: 'Jean de Florette',
  year: 1986,
  directors: ['Claude Berri'],
  bio: 'A greedy landowner and his backward nephew conspire to block the only water source for an adjoining property in order to bankrupt the owner and force him to sell.',
  movieLength: 120,
  poster: 'jeanDeFlorette.jpg',
 genre: ['Drama']
},
{
  id: 19,
  title: 'Taxi Driver',
  year: 1976,
  directors: ['Martin Scorcese'],
  bio: 'A mentally unstable veteran works as a nighttime taxi driver in NYC, where the perceived sleaze fuels his urge for violent action by attempting to liberate an underage prostitute.',
  movieLength: 114,
  poster: 'taxiDriver.jpg',
  genre: ['Drama', 'Psychological']
},
{
  id: 20,
  title: 'Kes',
  year: 1969,
  directors: ['Ken Loach'],
  bio: 'A young, English working-class boy spends his free time caring for and training his pet falcon.',
  movieLength: 111,
  poster: 'kes.jpg',
 genre: ['Drama']
}
];

var maxNumberOnScreen = 8;
var numberOfPages = Math.ceil(movies.length / maxNumberOnScreen);

if(numberOfPages > 1){
    var pagination = document.getElementById('paginationMovies');
    for (var i = 0; i < numberOfPages; i++) {
        pagination.innerHTML += '<li class="page-item"><a class="page-link" href="#">'+(i+1)+'</a></li>';
    }
}

if(maxNumberOnScreen > movies.length){
    // console.log("There are not enough movies in the database to fill the entire screen");
    showMovieThumbnails(0, movies.length);
} else {
    // console.log("there is more movies than the max on screen");
    showMovieThumbnails(0, maxNumberOnScreen);
}


function showMovieThumbnails(start, end){
    console.log(start);
    console.log(end);
    for (var i = start; i < end; i++) {
        var movie = movies[i];

        var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
            movieCard += '<div class="movieThumb movieThumb2 card h-100" data-id="'+movie.id+'">';
                movieCard += '<img src="images/posters/'+movie.poster+'" class="card-img-top" alt="">';
                movieCard += '<div class="card-body">';
                    movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
                movieCard += '</div>';
            movieCard += '</div>';
        movieCard += '</div>';

        document.getElementById('moviesList').innerHTML += movieCard;
    }
}

// var moviesList = document.getElementById('moviesList');
//
// for (var i = 0; i < movies.length; i++) {
//   // console.log(movies[i]);
//   var movie = movies[i];
//   // console.log(movie.title);
//     };
