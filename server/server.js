const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));


// LEGEND
// ⚪️ comments for instructor
// 🔵 for myself
// 🔴 problem areas


//TODO SERVER SIDE
// 1. get input info from client side✅
//         check info is correct✅
// 2. make function to add new info to global object✅
//        check function correctly adds new info✅
// 3. send updated info back to client side via a get request✅



let jokes = {
  sillyJokes: [// 🔵I think this should be an object with an array of objects
    {
      whoseJoke: "Danny",
      jokeQuestion: "Why do scuba divers fall backwards out of boats?",
      punchLine: "If they fell forwards they’d still be in the boat!"
    },
    {
      whoseJoke: "Luke",
      jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
      punchLine: "Do you know how to drive this thing?"
    },
    {
      whoseJoke: "Millie",
      jokeQuestion: "What do you call a pile of cats?",
      punchLine: "A meowntain!"
    },
    {
      whoseJoke: "dEv",
      jokeQuestion: "Why should you not play cards in the forest?",
      punchLine: "Too many Cheetahs!"
    },
    {
      whoseJoke: "Scott",
      jokeQuestion: "I went to the zoo the other day, it had one dog...",
      punchLine: "It was a shih tzu."
    }
  ]
};

app.get('/getJokes',(req, res) => {
  res.send(jokes)//🔵this should send the global objet 'jokes' to the client side
})


app.post('/addJokes', (req, res) => {
  console.log('in POST, showing our jokes variable from server side', req.body)
  console.log('global array before', jokes)
  addJoke(req.body)//🔵This should be adding the new array to the current global array
  console.log('global array after new info added', jokes)
  //🔵need a function in here to add to the global object on server side
  res.sendStatus(201);
})


function addJoke(object) {// 🔵⚪️I think I need an argument here to pass along the req.body ⚪️
  jokes.sillyJokes.unshift(object)
}









// serve back static files
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
