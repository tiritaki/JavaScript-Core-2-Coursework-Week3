function readingList(books) {
  // Write your code here...
  const ul = document.getElementById("reading-list");

  for (const book of books){
    //creating elements li,p,img
    const li = document.createElement('li');
    const para = document.createElement('p');
    const img = document.createElement('img')
    
    para.innerText = `${book.title} by ${book.author}`
    img.src = book.bookCoverImage
    li.style.backgroundColor = book.alreadyRead ? "green" : "red"
    
    li.appendChild(para)
    li.appendChild(img)
    
    ul.appendChild(li)

  }
}

// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
