// export const getBreeds = async (page) => {   
//   const responsePromise = fetch(`https://catfact.ninja/breeds?page=${page}`);
//   const response = await responsePromise;
//   const jsonResponse = await response.json();
//   return jsonResponse.data;
// };


console.log(`api javascript is linked`)

export const getBooks = async (volume) => {
  const responsePromise = fetch(`https://www.googleapis.com/books/v1/volumes?q=${volume}`);
  const response = await responsePromise;
  const data = await response.json();
  return data.items;
}


// Testing API functionality with old request method
// const getGoogBooks = (callback) => {
//   const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//   // console.log(request, request.readyState);
//   if(request.readyState === 4 && request.status === 200) {
//     // console.log(request.responseText);
//     const data = JSON.parse(request.responseText);
//     console.log(data);
//   }
// });

// request.open('GET',`https://www.googleapis.com/books/v1/volumes?q=dogs`)
// request.send();
// };

// console.log(`this is getGoogBooks`, getGoogBooks());