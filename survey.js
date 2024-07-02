const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const answers = [];

const askQuestion = (index) => {
  if (index < questions.length) {
    rl.question(questions[index], (answer) => {
      answers.push(answer);
      askQuestion(index + 1);
    });
  } else {
    rl.close();
    const profile = `
    Meet ${answers[0]}, who loves to spend time doing ${answers[1]} while listening to ${answers[2]}.
    ${answers[0]}'s favourite meal of the day is ${answers[3]}, especially when enjoying ${answers[4]}.
    A big fan of ${answers[5]}, and has a unique superpower: ${answers[6]}!
    `;
    console.log(profile);
  }
};

askQuestion(0);
