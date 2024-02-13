const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello, world!');
});

const PORT = process.env.PORT || 300;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

const posts = [
    {
        id: 1,
        title: 'Sample Blog Post 1',
        content: 'This is the content of the first sample blog post.',
    },
    {
        id: 2,
        title: 'Sample Blog Post 2',
        content: 'This is the content of the second sample blog post.',
    },
    {
        id: 3,
        title: 'Sample Blog Post 3',
        content: 'This is the content of the third sample blog post.',
    },
];

app.use(express.json());

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return res.status(404).send('Post was not found');
    }

    res.json(post);
});

app.post('/posts', (req, res) => {
    const newPost = req.body;
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex((p) => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).send('Post was not found');
    }

    const updatedPost = req.body;
    posts[postIndex] = updatedPost;
    res.json(updatedPost);
});

app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex((p) => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).send('Post was not found');
    }

    const deletedPost = posts.splice(postIndex, 1);
    res.status(200).json(deletedPost);
});