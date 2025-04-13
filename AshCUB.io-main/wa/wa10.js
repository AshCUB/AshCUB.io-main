const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit in Arizona, the perfect day for the pool. :insertx: packed all of his stuff -which weighed over 300 pounds- and made their way past the :inserty:. Once they finaly got there they :insertz:, despite everyone staring. They met up with :insertx: and enjoyed a long day in the sun.";

let insertX = 
["Billy the Accountant",
"a Gorilla",
"Dr.Doofenshmirtz"];

let insertY =
["a Starbucks",
"Federal Prison",
"an unattended child"];

let insertZ =
["had a mental break",
"danced on an unmarked grave",
"slapped the next person they saw"];



randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem).replace(":inserty:", yItem).replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = String(Math.round(300/0.0714286))+" stones";
    const temperature =  String(Math.round((94-32)*(5/9)))+" centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature).replace("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}