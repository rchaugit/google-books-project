const createCard = (result, parent) => { //creates a div
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "dispBox");
  parent.appendChild(newDiv);
  newImg(result);
  newTitle(result);
  newAuthor(result);
  newDesc(result);
}

const newImg = (result, parent) => { //creates an img that attaches to div
  const newImg = document.createElement("img")
  const url = `${result[i].volumeInfo?.imageLinks?.thumbnail ?? "not found"}`;
  const alttitle = `Img not available for Book: ${result[i].volumeInfo.title} author/s: ${result[i].volumeInfo.authors}`;
  newImg.setAttribute("src", url);
  newImg.setAttribute("alt", alttitle);
  newImg.setAttribute("class", "img");
  parent.appendChild(newImg);
}

const newTitle = (result, parent) => { //creates a title<p> that attaches to div
  const titleElement = document.createElement("P");
  titleElement.setAttribute("class", "title");
  const bookName = document.createTextNode(title);
  titleElement.appendChild(bookName);
  parent.appendChild(titleElement);
}

const newAuthor = (result, parent) => { //creates a author<p> that attaches to div
  const authorElement = document.createElement("P");
  authorElement.setAttribute("class", "author");
  const writers = document.createTextNode(author);
  authorElement.appendChild(writers);
  parent.appendChild(authorElement);
}

const newDesc = (result, parent) => { //creates a desc<p> that attaches to div
  const descElement = document.createElement("P");
  descElement.setAttribute("class", "desc");
  const descript = document.createTextNode(desc);
  descElement.appendChild(descript);
  parent.appendChild(descElement);
}

result.map((createCard))