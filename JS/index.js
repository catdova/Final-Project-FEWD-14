$('.ii').click(function(){
	$('.ii-container').slideToggle();
});

$('.i').click(function(){
	$('.i-container').slideToggle();
});

$('.lyriccitation1').click(displayNoteOne);

$('#citation1').click(displayNoteOne);

function displayNoteOne (){
	event.preventDefault();
	$('.note1').slideToggle();
};


$('.lyriccitation2').click(displayNoteTwo);
$('.lyriccitation3').click(displayNoteThree);
$('.lyriccitation4').click(displayNoteFour);
$('.lyriccitation5').click(displayNoteFive);
$('.lyriccitation6').click(displayNoteSix);
$('.lyriccitation7').click(displayNoteSeven);
$('.lyriccitation8').click(displayNoteEight);
$('.lyriccitation9').click(displayNoteNine);

$('#citation2').click(displayNoteTwo);
$('#citation3').click(displayNoteThree);
$('#citation4').click(displayNoteFour);
$('#citation5').click(displayNoteFive);
$('#citation6').click(displayNoteSix);
$('#citation7').click(displayNoteSeven);
$('#citation8').click(displayNoteEight);
$('#citation9').click(displayNoteNine);



function displayNoteTwo(){
	event.preventDefault();
	$('.note2').slideToggle();
};

function displayNoteThree (){
	event.preventDefault();
	$('.note3').slideToggle();
};

function displayNoteFour (){
	event.preventDefault();
	$('.note4').slideToggle();
};

function displayNoteFive (){
	event.preventDefault();
	$('.note5').slideToggle();
};

function displayNoteSix (){
	event.preventDefault();
	$('.note6').slideToggle();
};

function displayNoteSeven (){
	event.preventDefault();
	$('.note7').slideToggle();
};

function displayNoteEight (){
	event.preventDefault();
	$('.note8').slideToggle();
};

function displayNoteNine (){
	event.preventDefault();
	$('.note9').slideToggle();
};

