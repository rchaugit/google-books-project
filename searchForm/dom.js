import { getBooks } from "./api.js"; 

console.log(`dom.js is linked`);

//alot of repeat code? and chunky function, need to break this into smaller functions
const createCardEle = (url, alttitle, type, title, author, desc, parent) => {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "dispBox");

  const newImg = document.createElement("img");
  newImg.setAttribute("src", url);
  newImg.setAttribute("alt", alttitle);
  newImg.setAttribute("class", "img");
  newDiv.appendChild(newImg);

  const titleElement = document.createElement(type);
  titleElement.setAttribute("class", "title");
  const bookName = document.createTextNode(title);
  titleElement.appendChild(bookName);
  newDiv.appendChild(titleElement);

  const authorElement = document.createElement(type);
  authorElement.setAttribute("class", "author");
  const writers = document.createTextNode(author);
  authorElement.appendChild(writers);
  newDiv.appendChild(authorElement);

  const descElement = document.createElement(type);
  descElement.setAttribute("class", "desc");
  const descript = document.createTextNode(desc);
  descElement.appendChild(descript);
  newDiv.appendChild(descElement);

  parent.appendChild(newDiv);
}

const search = document.getElementById('search');
// console.log(search);
search.addEventListener('click', async (event)=> {
  event.preventDefault();
  // console.log(`search button activated`);
  const input = document.getElementById('input').value
  const result = await getBooks(input);
  const displayGrid = document.getElementById('disGrid');
  // console.log(result)
  displayGrid.innerHTML = ""; //clears the fields when you search again
  const notFound = "Item not available;"

  for (let i = 0; i < result.length; ++i) {
    createCardEle (
      `${result[i].volumeInfo?.imageLinks?.thumbnail}`, //url
      `Img not available for Book: ${result[i].volumeInfo?.title} author/s: ${result[i].volumeInfo.authors}`, //alttitle
      "P", //type
      `${result[i].volumeInfo?.title}`, //title
      `${result[i].volumeInfo?.authors}`, //author
      `${result[i].searchInfo?.textSnippet}`, //desc
      displayGrid //parent
    )
      // createImgElement (
      //     `${result[i].volumeInfo?.imageLinks?.thumbnail ?? "not found"} `,
      //     `Img not available for Book: ${result[i].volumeInfo.title} author/s: ${result[i].volumeInfo.authors}`,
      //     displayGrid
      //   );
      // createTextElement(
      //     "P",
      //     `${result[i].volumeInfo.title}`,
      //     displayGrid
      //   );
      // createTextElement(
      //     "P",
      //     `${result[i].volumeInfo.authors}`,
      //     displayGrid
      //   );
  }
})

// googlebook object keys
// volumeInfo.title

// volumeInfo.thumbnail
// volumeInfo.smallthumbnail

// volumeInfo.description
// volumeInfo.authors

// searchInfo.textSnippet