var movies = [
  {
    id: 1,
    title: 'Raising Arizona',
    year: 1987,
    directors: ['Joel Coen', 'Ethan Coen'],
    bio: 'When a childless couple of an ex-con and an ex-cop decide to help themselves to one of another family\'s quintuplets, their lives become more complicated than they anticipated.',
    length: 94,
    poster: 'RaisingArizona.jpg'
  },
  {
    id: 2,
    title: 'Citizen Kane',
    year: 1941,
    directors: ['Orson Welles'],
    bio: 'Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance.',
    length: 119,
    poster: 'citizenKane.jpg'
  },
  {
    id: 3,
    title: 'Bladerunner',
    year: 1982,
    directors: ['Ridley Scott'],
    bio: 'A blade runner must pursue and terminate four replicants who stole a ship in space and returned to Earth to find their creator.',
    length: 117,
    poster: 'bladerunner.jpg'
  },
  {
    id: 4,
    title: 'Royal Tenenbaums',
    year: 2001,
    directors: ['Wes Anderson'],
    bio: 'The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.',
    length: 110,
    poster: 'royalTenenbaums.jpg'
  },
  {
    id: 5,
    title: 'Taxi Driver',
    year: 1976,
    directors: ['Martin Scorcese'],
    bio: 'A mentally unstable veteran works as a nighttime taxi driver in NYC, where the perceived sleaze fuels his urge for violent action by attempting to liberate an underage prostitute.',
    length: 114,
    poster: 'taxiDriver.jpg'
  },
  // {
  //   id: 6,
  //   title: 'Shoplifters',
  //   year: 2018,
  //   directors: ['Hirokazu Koreeda'],
  //   bio: 'A family of small-time crooks take in a child they find outside in the cold.',
  //   length: 121,
  //   poster: 'shoplifters.jpg'
  // }
];

console.log(movies);

var moviesList = document.getElementById('moviesList');

for (var i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
  var movie = movies[i];
  // console.log(movie.title);
  // METHOD 1:
  // document.getElementById('moviesList').innerHTML += '<p>'+ movie.title +'</p>'
  // moviesList.innerHTML += '<div class="col-12 col-sm-6 col-md-4">';
  //   moviesList.innerHTML += '<div class="card">';
  //
  //   moviesList.innerHTML += '</div>';
  // moviesList.innerHTML += '</div>';
  // NOW THIS METHOD (ABOVE) DOESN'T WORK ANY MORE
// METHOD 2:
// var movieCard = '<div class="col-12 col-sm-6 col-md-4">';
//     movieCard += '<div class="card">';
//       movieCard += '<div class="card-body">';
//         movieCard += '<h5 class ="card-title">'+movie.title+'</h5>';
//       movieCard += '</div>';
//     movieCard += '</div>';
// movieCard += '</div>';
// console.log(movieCard);
// moviesList.innerHTML += movieCard;

// METHOD 3 (A LONGER WAY):
var columns = document.createElement('div');
var columnsAttr = document.createAttribute('class');
columnsAttr.value = 'col-12 col-sm-6 col-md-4';
columns.setAttributeNode(columnsAttr);

var card = document.createElement('div');
var cardAttr = document.createAttribute('class');
cardAttr.value = 'card';
card.setAttributeNode(cardAttr);

var cardBody = document.createElement('div');
var cardBodyAttr = document.createAttribute('class');
cardBodyAttr.value = 'card-body';
card.setAttributeNode(cardAttr);

var cardTitle = document.createElement('h5');
var cardTitleAttr = document.createAttribute('class');
cardTitleAttr.value = 'card-title';
cardTitle.setAttributeNode(cardTitleAttr);
var cardTitleText = document.createTextNode(movie.title);

cardTitle.appendChild(cardTitleText);
cardBody.appendChild(cardTitle);
card.appendChild(cardBody);
columns.appendChild(card);

moviesList.appendChild(columns);

}
