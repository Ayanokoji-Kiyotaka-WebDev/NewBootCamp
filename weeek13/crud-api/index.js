const express = require('express');
const app = express();
const PORT = 5004;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

const fetchPosts = require('./data/dataService');
app.get('/api/posts', async (req, res) => {
    try {
      const posts = await fetchPosts();
      res.json(posts);
      console.log('Data has been successfully retrieved and sent as a response');
    } catch (error) {
      console.error(`Error in /api/posts: ${error}`);
      res.status(500).send('Server error');
    }
  });

