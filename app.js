console.log("app.js loaded!")

const summaryE1 =
   document.getElementById("summary")
const listE1 = document.getElementById("book-list")

fetch("books.json")
     .then(response => {
        if(!reponse. ok) {
           throw new Error(`HTTP $ {response.status}`);
           }
  return response.json();
})
   .then(data => {
console.log("Parsed JSON type:",Array.isArray(data) ?
             "array" : typeof data);
 console.log("First item sample:", data[0]);
            
            summaryE1.textContent = `You have ${data.length} book(s) in your library.`;
              data.sort((a, b) => b.rating - a.rating);
listE1.innerHTML = "";
data.forEach(book => {
   const li = document.createElement("li");
   li.textContent = `${book.title} (${book.author}
(${book.pages} pages) ★$ {book.rating}`;
   listE1.appendChild(li);
   });
  
