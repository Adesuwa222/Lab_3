// the things on the page
const buttonA = document.getElementById('button-a');
const buttonB = document.getElementById('button-b');
const nextButton = document.getElementById('next-button');
const photo = document.getElementById('photo');
const partLabel = document.getElementById('part-label');
const caption = document.getElementById('caption');

// Story A: a plant grows (seed, sprout, flower)
const storyA = [
  { part: 'Beginning', image: 'images/seed.jpg', caption: 'A small seed is planted in the soil.' },
  { part: 'Middle', image: 'images/sprout.jpg', caption: 'It slowly grows into a sprout.' },
  { part: 'End', image: 'images/flower.jpg', caption: 'Finally, it blooms into a flower.' }
];

// Story B: a plant starts again (flower, seed, sprout)
const storyB = [
  { part: 'Beginning', image: 'images/flower.jpg', caption: 'A flower is in full bloom.' },
  { part: 'Middle', image: 'images/seed.jpg', caption: 'It lets go of a seed.' },
  { part: 'End', image: 'images/sprout.jpg', caption: 'A new plant begins to grow.' }
];

// variables that remember where we are
let currentStory = storyA;
let currentStep = 0;

// function: show the current step
function showStep() {
  const step = currentStory[currentStep];

  photo.src = step.image;
  photo.alt = step.caption;
  partLabel.textContent = step.part;
  caption.textContent = step.caption;

  // on the last step, the button says Start over
  if (currentStep === currentStory.length - 1) {
    nextButton.textContent = 'Start over';
  } else {
    nextButton.textContent = 'Next';
  }
}

// function: pick a story and go back to the beginning
function chooseStory(story, chosenButton) {
  currentStory = story;
  currentStep = 0;

  buttonA.classList.remove('active');
  buttonB.classList.remove('active');
  chosenButton.classList.add('active');

  showStep();
}

// function: go to the next step
function nextStep() {
  if (currentStep < currentStory.length - 1) {
    currentStep = currentStep + 1;
  } else {
    currentStep = 0;
  }
  showStep();
}

// event listeners
buttonA.addEventListener('click', function() {
  chooseStory(storyA, buttonA);
});

buttonB.addEventListener('click', function() {
  chooseStory(storyB, buttonB);
});

nextButton.addEventListener('click', nextStep);

// show the first step when the page loads
showStep();
