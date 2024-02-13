// Exercise 2: Building A Basic CRUD API With Express.Js

import express from 'express';

const app = express();

const books = [
    {
      id: 1,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishedYear: 1951,
    },
    {
      id: 2,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedYear: 1813,
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960,
    },
  ];
app.use(express.json())

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('api/books/:bookId', (req,res)=>{
    const bookId = req.params.bookId;
    const book = books.find((b)=> b.id ===parseInt(bookId))
    if(!book){
        return res.status(404).send('Book was not found')
    }
    res.json(book)
})

  const port = process.env.port || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });