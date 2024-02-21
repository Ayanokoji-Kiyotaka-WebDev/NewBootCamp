const express = require('express');
const app = express();
const PORT = process.env.PORT || 300;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Emoji Guessing Game!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const emojis = [
    { name: 'grinning face', character: '😀' },
    { name: 'grinning face with big eyes', character: '😃' },
    { name: 'grinning face with smiling eyes', character: '😄' },
    { name: 'beaming face with smiling eyes', character: '😁' },
    { name: 'grinning squinting face', character: '😆' },
    { name: 'grinning face with sweat', character: '😅' },
    { name: 'rolling on the floor laughing', character: '🤣' },
]


const getRandomEmoji = () => {

    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
  

    const options = [...emojis];
    options.splice(randomIndex, 1); 
    options.unshift(randomEmoji);
  

    const shuffledOptions = options.sort(() => Math.random() - 0.5);
  
    return { emoji: randomEmoji, options: shuffledOptions.map(emoji => emoji.name) };
  };


  app.get('/game', (req, res) => {
    const { emoji, options } = getRandomEmoji();
    res.json({ emoji: emoji.character, options: options });
  });


  app.post('/guess', (req, res) => {
    const { player, guess } = req.body;
    const { emoji, options } = getRandomEmoji();
  })


  app.post('/guess', (req, res) => {
    const { player, guess } = req.body;
    const { emoji, options } = getRandomEmoji();
  
    const isCorrect = guess === emoji.name;
  
    if (isCorrect) {
      player.score = (player.score || 0) + 1;
    }

    const response = {
      isCorrect,
      correctAnswer: emoji.name,
      playerScore: player.score || 0,
      nextEmoji: getRandomEmoji(),
    };
  
    res.json(response);
  });
  