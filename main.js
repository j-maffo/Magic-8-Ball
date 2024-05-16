// Magic 8 Ball

// HTML Variables
let imgEl = document.getElementById("ball-img");
let qInEl = document.getElementById("Q-in");
let answerSpan = document.getElementById("ball-ans");
// Event Listeners
imgEl.addEventListener("click", imgClicked);
// Event Functions
function imgClicked() {
  let question = qInEl.value;
  let randnum = Math.random();
  console.log(randnum);
  // Random Response Strings
  let string1 = `Without a doubt`;
  let string2 = `As I see it, yes.`;
  let string3 = `Concentrate and ask again.`;
  let string4 = `Don't count on it.`;
  let string5 = `Outlook not so good.`;

  // Response for no questions
  let string6 = `Please ask a question...`;

  // Specific Response Strings
  let string7 = `How dare you doubt me!`;
  let string8 = `Of Course!`;
  let string9 = `Love is like a rollercoaster. Buckle up and enjoy the ride!`;
  let string10 = `Oh, the odds may be slim, but who knows? Stranger Things have happened!`;
  let string11 = `With your charm and wit, you'll be swimming in cash!`;
  let string12 = `You're gonna ace that exam like a boss! No doubt about it!`;

  // Process
  if (question == "") {
    answerSpan.innerHTML = string6;
  } else if (question.toLowerCase() == `does a magic 8 ball actually work?`) {
    answerSpan.innerHTML = string7;
  } else if (question.toLowerCase() == `is javascript awesome?`) {
    answerSpan.innerHTML = string8;
  } else if (question.toLowerCase() == `will i ever find true love?`) {
    answerSpan.innerHTML = string9;
  } else if (question.toLowerCase() == `will i win the lottery?`) {
    answerSpan.innerHTML = string10;
  } else if (question.toLowerCase() == `will i ever become a millionaire?`) {
    answerSpan.innerHTML = string11;
  } else if (question.toLowerCase() == `will i pass my upcoming exam?`) {
    answerSpan.innerHTML = string12;
  } else if (randnum <= 0.2) {
    answerSpan.innerHTML = string1;
  } else if (randnum <= 0.4) {
    answerSpan.innerHTML = string2;
  } else if (randnum <= 0.6) {
    answerSpan.innerHTML = string3;
  } else if (randnum <= 0.8) {
    answerSpan.innerHTML = string4;
  } else {
    answerSpan.innerHTML = string5;
  }
}
