const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What do you think of Lighhouse Labs? ', (answer) => {
  // TODO: Log the answer in a database
  rl.question('What is your name or nickname? ', (nickname) => {
    rl.question('What\'s an activity you like doing? ', (activity) => {
      rl.question('What do you listen to while doing that? ', (music) => {
        rl.question('What\'s your least favourite food?', (food) => {
          // console.log(`Yeah ${food}'s  gross. Me neither`);
          // console.log(`No way. Didnt think you were a ${music} fan!`);
          // console.log(`Thats Cool, I like ${activity} too.`);    
          // console.log(`Thank you for sharing your nickname: ${nickname}`);
        
          // console.log(`Thank you for your valuable feedback: ${answer}`);
          console.log(`You like to listen to ${music} when you are busy with ${activity}.\nYou also hate ${food} and got the nickname ${nickname} when you were younger.\nI agree LHL is ${answer}`);
        rl.close();
        });
      });
    });
  });
});

  // Questions;

// What is your name or nickname?

// What's an activity you like doing?
// What do you listen to while doing that ?
// Which meal is your favourite(eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite ?
// What is your superpower ? In a few words, tell us what you are amazing at!