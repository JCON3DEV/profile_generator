const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});

rl.question('What is your name or nickname? ', (nameAnswer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for sharing: ${nameAnswer}`);

  rl.close();
});

//

// What's an activity you like doing?
// What do you listen to while doing that ?
// Which meal is your favourite(eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite ?
// What is your superpower ? In a few words, tell us what you are amazing at!