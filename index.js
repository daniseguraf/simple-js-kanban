console.log('init');

// First steps

// 1. Insert the new card in DOM
// 2. When clicked the button "new" it creates a new empty card object

function Card() {
  this.id = Math.floor((Math.random()*1000000))
}

// Methods
Card.prototype.setTitle = function() {
  console.log('setTitle');
}

Card.prototype.setContent = function() {
  console.log('setContent');
}

document.querySelector('.new-item').addEventListener('click', function() {
  const textarea = document.createElement('textarea')

  textarea.setAttribute('class', 'card')
  textarea.setAttribute('placeholder', 'Ingresar info')
  document.querySelector('.to-do-body').appendChild(textarea)

  let newcard = new Card();
  console.log(newcard);

  return newcard
})
