var movies = [
  {
    id: 1,
    title: 'Big Lebowski',
    year: 1998,
    directors: ['Joel Coen', 'Ethan Coen'],
    bio: 'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
    movieLength: 117,
    poster: 'bigLebowski.jpg',
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
    year: 1959,
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
   title: 'Raising Arizona',
   year: 1987,
   directors: ['Joel Coen', 'Ethan Coen'],
   bio: 'When a childless couple of an ex-con and an ex-cop decide to help themselves to one of another family\'s quintuplets, their lives become more complicated than they anticipated.',
   movieLength: 94,
   poster: 'RaisingArizona.jpg',
   genre: ['Comedy']
   },
 {
   id: 9,
   title: 'Evil Dead II',
   year: 1987,
   directors: ['Sam Raimi'],
   bio: 'The lone survivor of an onslaught of flesh-possessing spirits holes up in a cabin with a group of strangers while the demons continue their attack.',
   movieLength: 84,
   poster: 'evilDead.jpg',
  genre: ['Horror', 'Comedy']
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
  title: 'Groundhog Day',
  year: 1993,
  directors: ['Harold Ramis'],
  bio: 'A weatherman finds himself inexplicably living the same day over and over again. Bill Murray is a bloody legend.',
  movieLength: 101,
  poster: 'groundhogDay.jpg',
 genre: ['Comedy']
},
{
  id: 18,
  title: 'Inception',
  year: 2010,
  directors: ['Christopher Nolan'],
  bio: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
  movieLength: 128,
  poster: 'inception.jpg',
 genre: ['Thriller', 'Sci-fi', 'Drama']
},
{
  id: 19,
  title: 'Thin Red Line',
  year: 1998,
  directors: ['Terrence Malick'],
  bio: 'Adaptation of James Jones\' autobiographical 1962 novel, focusing on the conflict at Guadalcanal during the second World War.',
  movieLength: 170,
  poster: 'thinRedLine.jpg',
  genre: ['Drama', 'War']
},
{
  id: 20,
  title: 'Superbad',
  year: 2007,
  directors: ['Greg Mottola'],
  bio: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.',
  movieLength: 113,
  poster: 'superbad.jpg',
 genre: ['Comedy']
},
{
  id: 21,
  title: 'Shoplifters',
  year: 2018,
  directors: ['Hirokazu Koreeda'],
  bio: 'A family of small-time crooks take in a child they find outside in the cold.',
  movieLength: 121,
  poster: 'shoplifters.jpg',
 genre: ['Drama']
},
{
  id: 22,
  title: 'Jean de Florette',
  year: 1986,
  directors: ['Claude Berri'],
  bio: 'A greedy landowner and his backward nephew conspire to block the only water source for an adjoining property in order to bankrupt the owner and force him to sell.',
  movieLength: 120,
  poster: 'jeanDeFlorette.jpg',
 genre: ['Drama']
},
{
  id: 23,
  title: 'Taxi Driver',
  year: 1976,
  directors: ['Martin Scorcese'],
  bio: 'A mentally unstable veteran works as a nighttime taxi driver in NYC, where the perceived sleaze fuels his urge for violent action by attempting to liberate an underage prostitute.',
  movieLength: 114,
  poster: 'taxiDriver.jpg',
  genre: ['Drama', 'Psychological']
},
{
   id: 24,
   title: 'The Princess Bride',
   year: 1987,
   directors: ['Rob Reiner'],
   bio: 'While home sick in bed, a young boy\'s grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.',
   movieLength: 98,
   poster: 'princessBride.jpg',
   genre: ['Comedy', 'Fantasy']
},
{
  id: 25,
  title: 'Coco',
  year: 2017,
  directors: ['Lee Unkrich', 'Adrian Molina'],
  bio: 'Aspiring musician Miguel, confronted with his family\'s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
  movieLength: 105,
  poster: 'coco.jpg',
  genre: ['Animation', 'Adventure', 'Comedy']
},
{
  id: 26,
  title: 'Alien',
  year: 1979,
  directors: ['Ridley Scott'],
  bio: 'After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun.',
  movieLength: 117,
  poster: 'alien.jpg',
  genre: ['Sci-fi', 'Horror', 'Suspense']
},
{
   id: 27,
   title: 'Wings of Desire',
   year: 1987,
   directors: ['Wim Wenders'],
   bio: 'An angel tires of overseeing human activity and wishes to become human when he falls in love with a mortal.',
   movieLength: 128,
   poster: 'wingsOfDesire.jpg',
   genre: ['Drama']
},
{
   id: 28,
   title: 'This Is Spinal Tap',
   year: 1984,
   directors: ['Rob Reiner'],
   bio: 'Spinal Tap, one of England\'s loudest bands, is chronicled by film director Marty DiBergi on what proves to be a fateful tour.',
   movieLength: 82,
   poster: 'spinalTap.jpg',
   genre: ['Comedy', 'Mockumentary']
},
{
  id: 29,
  title: 'Kes',
  year: 1969,
  directors: ['Ken Loach'],
  bio: 'A young, English working-class boy spends his free time caring for and training his pet falcon.',
  movieLength: 111,
  poster: 'kes.jpg',
 genre: ['Drama']
},
{
   id: 30,
   title: 'Trainspotting',
   year: 1996,
   directors: ['Danny Boyle'],
   bio: 'Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.',
   movieLength: 93,
   poster: 'trainspotting.jpg',
   genre: ['Drama', 'Comedy']
}
];
var maxNumberOnScreen = 4;
var currentTab = 'Movies';
var pageContainer = $('#pageContainer');

function clickOnPagination(x){
    // console.log("You clicked on page number " + (x));

    if (movies.length < (x * maxNumberOnScreen)) {
       endNumber = movies.length;
     } else {
       endNumber = x * maxNumberOnScreen;
     }
     var startNumber = (endNumber - maxNumberOnScreen);
    $('#moviesList').html = " ";
    showMovieThumbnails(startNumber, endNumber);
}

showMovieThumbnails();
function showMovieThumbnails(start,end){
    $('#moviesList').empty();
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
        $('#moviesList').append(movieCard);
    }
}

var pageTabs = $('.page-tab');
pageTabs.click(function(){
    pageTabs.removeClass('active');
    $(this).addClass('active');
    console.log($(this).text());
    changeTabs($(this).text());
});

function changeTabs(tabName){
    if(currentTab === tabName){
        console.log('you are still on the same page');
    } else {
        currentTab = tabName;
        $('#pageContainer').html('');
            if(tabName === 'Directors'){
                showDirectors();
            }
            else if(tabName === 'Genres'){
                showGenres();
            }
            else if(tabName === 'Watchlist'){
                showWatchList();
            }
            else if(tabName === 'Movies'){
                $('#pageContainer').html('<div id="moviesList" class="row"></div>');
                $('#pageContainer').append('<div class="row"><div class="col"><nav><ul id="paginationMovies" class="pagination justify-content-center"></ul></nav></div></div>');
                showMovies();
            }
        }
};

// for (var i = 0; i < pageTabs.length; i++) {
//     pageTabs[i].onclick = function(){
//         for (var j = 0; j < pageTabs.length; j++) {
//             if (pageTabs[j].classList.contains('active')){
//                 (pageTabs[j].classList.remove('active'));
//                 break;
//             }
//         }
//         if(!this.classList.contains('active')){
//             this.classList.add('active');
//             }
//         changeTab(this.innerText);
//         // console.log(this.classList);
//         // this.classList.add('newClass', 'secondNewClass');
//         // console.log(this.classList.contains('active'));
//         // console.log(this.classList.item(0));
//         // this.classList.remove('active');
//         // this.classList.toggle('active');
//     };
// };


// function changeTab(tabName){
//     if(currentTab === tabName){
//         console.log('you are still on the same page');
//     } else {
//         pageContainer.innerHTML = '';
//         currentTab = tabName;
//         if(tabName === 'Directors'){
//             showDirectors();
//         }
//         else if(tabName === 'Genres'){
//             showGenres();
//         }
//         else if(tabName === 'Movies'){
//             pageContainer.innerHTML = '<div id="moviesList" class="row"></div>';
//             pageContainer.innerHTML += '<div class="row"><div class="col"><nav><ul id="paginationMovies" class="pagination justify-content-center"></ul></nav></div></div>';
//             showMovies();
//         }
//     }
// }

var uniqueDirectors = [];
var allDirectors = [];
function showDirectors(){
        $('#pageContainer').html('<div class="row"><div class="col"><h2 class="display-4">Directors</h2></div></div>');
        for (var i = 0; i < movies.length; i++) {
          for (var j = 0; j < movies[i].directors.length; j++) {
            allDirectors.push(movies[i].directors[j]);
          }
        }

        for (var i = 0; i < allDirectors.length; i++) {
          if (uniqueDirectors.includes(allDirectors[i]) === false) {
            uniqueDirectors.push(allDirectors[i]);
          }
        }
        for (var i = 0; i < uniqueDirectors.length; i++) {
          $('#pageContainer').append('<div class="row"><div class="col"><ul><li>' + uniqueDirectors[i] + '</li></ul></div></div>');
        }
};

var uniqueGenres = [];
var allGenres = [];
function showGenres(){
    $('#pageContainer').html('<div class="row"><div class="col"><h2 class="display-4">Genres</h2></div></div>');
    for (var i = 0; i < movies.length; i++) {
      for (var j = 0; j < movies[i].genre.length; j++) {
        allGenres.push(movies[i].genre[j]);
      }
    }
    for (var i = 0; i < allGenres.length; i++) {
      if (uniqueGenres.includes(allGenres[i]) === false){
        uniqueGenres.push(allGenres[i]);
      }
    }
    for (var i = 0; i < uniqueGenres.length; i++) {
      $('#pageContainer').append('<div class="row"><div class="col"><ul><li>' + uniqueGenres[i] + '</li></ul></div></div>');
    }
};


function showWatchList(){
    console.log("show watchlist");
    $('#pageContainer').html('<div class="row"><div class="col"><h2 class="display-4">Watchlist</h2></div></div>');
};

showMovies();
function showMovies(){

    var numberOfPages = Math.ceil(movies.length / maxNumberOnScreen);

    if(numberOfPages > 1){
        var pagination = $('#paginationMovies');
        for (var i = 0; i < numberOfPages; i++) {
            $('.pagination').append('<li class="page-item"><a class="page-link" href="#" onclick="clickOnPagination('+(i+1)+')">'+(i+1)+'</a></li>') ;
        }
    }

    if(maxNumberOnScreen > movies.length){
        // console.log("There are not enough movies in the database to fill the entire screen");
        showMovieThumbnails(0, movies.length);
    } else {
        // console.log("there are more movies than the max on screen");
        showMovieThumbnails(0, maxNumberOnScreen);
    }
}


var moviesList = $('#moviesList');

for (var i = 0; i < movies.length; i++) {
  var movie = movies[i];var genreClass = getGenreColour(movie.genre[0]);

  var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
      movieCard += '<div class="movieThumb card h-100 border-'+genreClass+' " onclick="showMoreMovie('+movie.id+');">';
      movieCard += '<img src="images/posters/'+movie.poster+'" class="card-img-top" alt="">';
        movieCard += '<div class="card-body">';
          movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
        movieCard += '</div>';
      movieCard += '</div>';
  movieCard += '</div>';
  moviesList.innerHTML += movieCard;
}

function showMoreMovie(movieNumber){
  var singleMovie;
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].id === movieNumber) {
            singleMovie = movies[i];
            break;
        }
    }

        $('#posterImage').src = 'images/posters/'+singleMovie.poster;
        $('#movieTitle').text = singleMovie.title;
        $('#movieYear').text = singleMovie.year;

        $('#movieDirectors').html = "";
          for (var j = 0; j < singleMovie.directors.length; j++) {
                $('#movieDirectors').html += "<li class = 'list-inline-item'>" + singleMovie.directors[j] + "</li>";
            };
        $('#movieBio').text = singleMovie.bio;
        $('#movieLength').text = singleMovie.movieLength;

        $('#movieGenre').html = "";


        var badgeClass = '';
          for (var i = 0; i < singleMovie.genre.length; i++) {
              var genreColour = getGenreColour(singleMovie.genre[i]);
              if(singleMovie.genre[i] === 'Drama'){
                badgeClass = 'badge-primary';
            } else if(singleMovie.genre[i] === 'Comedy'){
                badgeClass = 'badge-success';
            } else if(singleMovie.genre[i] === 'Sci-fi'){
                badgeClass = 'badge-danger';
            } else if(singleMovie.genre[i] === 'Animation'){
                badgeClass = 'badge-secondary';
            } else if(singleMovie.genre[i] === 'Suspense'){
                badgeClass = 'badge-warning';
            } else if(singleMovie.genre[i] === 'Action'){
                badgeClass = 'badge-info';
              } else {
                badgeClass = 'badge-dark';
              }
                $('#movieGenre').html += '<span class= "badge badge-'+genreColour+' mr-1">' + singleMovie.genre[i] + '</span>';
            };

        $('#moviePopUp').style.display = 'flex';
        document.body.style.overflow = 'hidden';
}

var movieThumbnails = $('.movieThumb2');
  for (var i = 0; i < movieThumbnails.length; i++) {
    movieThumbnails[i].onclick = function(){
      var id = parseInt(this.dataset.id);
      showMoreMovie(id);
    }
}

$('#close').click = function(){
$('#moviePopUp').style.display = 'none'
document.body.style.overflow = 'scroll';
}

function getGenreColour(genre){
    if(genre === 'Drama'){
      return 'primary';
    } else if(genre === 'Comedy'){
      return 'success';
    } else if(genre === 'Sci-fi'){
      return 'danger';
    } else if(genre === 'Animation'){
      return 'secondary';
    } else if(genre === 'Suspense'){
      return 'warning';
    } else if(genre === 'Action'){
      return 'info';
    } else if(genre === 'Psychological'){
        return 'dark';
    } else {
      return 'light';
    }
}



//ADD A BUTTON TO THE POPUP FOR "ADD TO WATCH LIST"; THAT ADDS THE MOVIE TO THE WATCH LIST TAB (WHICH INCLUDES A REMOVE BUTTON)
