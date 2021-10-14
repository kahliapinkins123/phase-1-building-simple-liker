// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//Creates an array of like elements (heart)
const likeArray = document.querySelectorAll('.like-glyph');

//Adds a 'click' event to each 'like' element in our array
likeArray.forEach(function(like){
  like.addEventListener('click', function(){
      mimicServerCall()
      .then(function(){ //This displays is the response is a succcess
        if(like.textContent === EMPTY_HEART){
          like.textContent = FULL_HEART;
          like.classList.add('activated-heart');
        } else{
          like.textContent = EMPTY_HEART;
          like.classList.remove('activated-heart');
        }
      })
      .catch(function(error){ //This displays if the response is a failure
        let modal = document.querySelector('#modal');
        document.querySelector('#modal-message').textContent = error;
        modal.className = 'show';

        setTimeout(()=> modal.className = 'hidden', 3000);
      })
    
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
