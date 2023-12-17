const allBooks = [
    {
      title: 'MEDITATIONS',
      author: 'Marcus Aurelius',
      image: 'https://cloud.firebrandtech.com/api/v2/img/111/9780785839989/XL',
      alreadyRead: false
    },
    {
      title: 'Discourses ',
      author: "Epictetus",
      image:  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1624934807i/58450821.jpg',
      alreadyRead: true
    }
  ];
  
  const listBooksElement = document.querySelector(".listBooks")
  
  const table = document.createElement("table")
  table.classList.add("table")
  
  for (const book of allBooks) {
    const row = document.createElement("tr")
  
    const titleCell = document.createElement("td")
    titleCell.textContent = book.title;
  
    const authorCell = document.createElement("td")
    authorCell.textContent = book.author;
  
    const imageCell = document.createElement("td")
const image = document.createElement("img")
    image.src = book.image
    image.width = 100
    imageCell.appendChild(image)
  
    row.appendChild(titleCell)
    row.appendChild(authorCell)
    row.appendChild(imageCell)
  
    table.appendChild(row)
  }
  
  listBooksElement.appendChild(table)