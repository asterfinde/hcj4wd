// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
//var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
//function speak(name) {
//  console.log(speakWord + " " + name);
//}

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;

// ----------------------------------------------
// Code solution:
// ----------------------------------------------

// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function(window) {
  var speakWord = "Hello";

	// STEP 3: Create an object, called 'helloSpeaker'
  var helloSpeaker = {};

  // STEP 4: Attach the "speak" method to 'helloSpeaker' object
  helloSpeaker.speak = function(name) {
  	console.log(speakWord + " " + name);
  }

  // STEP 5: Expose method 'speak' from 'helloSpeaker' object to the global context
  window.helloSpeaker = helloSpeaker;
})(window);
