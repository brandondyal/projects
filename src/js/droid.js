var $userInput = $('#user_input');
var $btn = $('#translate_button');
var counter = 0;
var audioElement = document.createElement('audio');
var soundBank = [
	'beep.mp3',
	'cheerful.mp3',
	'concerned.mp3',
	'determined.mp3',
	'eureka.mp3',
	'excited.mp3',
	'laughing.mp3',
	'look.mp3',
	'playful.mp3',
	'processing.mp3',
	'proud.mp3',
	'sad.mp3',
	'shocked.mp3',
	'snappy.mp3',
	'surprised.mp3',
	'unbelievable.mp3',
	'unsure.mp3',
	'very_excited.mp3'
];

// event handler for when a sound is loaded and ready to be played
audioElement.addEventListener("loadeddata", function() {
	audioElement.play();

	$btn.attr('disabled', true).text('TRANSLATING...');	
	console.log('play() has been reached');	
}, true);

audioElement.addEventListener("playing", function(){
//	$(".eye").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
}, true);

// event handler for when the sound ends
audioElement.addEventListener("ended", function() {
//	$('.eye').removeClass('translating');
//$(".eye").fadeIn(100);
	console.log(counter);
	console.log($userInput.val().length);
	if (counter < $userInput.val().length) {
		loadSound();
	}
	else {
	console.log('ended has been reached');
	$btn.attr('disabled', false).text('TRANSLATE');
	counter = 0;
	}	
}, true); 

// loads a random sound from the array
function loadSound() {	
	console.log($userInput.val().charAt(counter));	// gets the character at the position === to the counter if check here
	counter++;
	var sound = soundBank[Math.floor(Math.random() * (0 - soundBank.length) + soundBank.length)];
    audioElement.setAttribute('src', 'sounds/' + sound);
    audioElement.load();
 }


$btn.click(function(event) {
	event.preventDefault();
	if ($userInput.val() === "") {
		$('#oops').html('<h3>' + 'Oops! No text was entered. Please enter a message to be translated.' + '</h3>');
	} else {
		$('#oops').html('');
		loadSound();
	}
});