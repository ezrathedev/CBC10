let heading = document.querySelector("h1"); // step 1
console.log(heading);
heading.textContent = "Generic Heading"; // step 2
let div = document.querySelector("div");
console.log(div.innerHTML);

//! Great job on steps 1 & 2 Ezra!

let paragraphs = document.querySelectorAll("div p");
let form = document.querySelector("form");
console.log(paragraphs); // node list
let ul = document.querySelector("ul");
paragraphs.forEach((para) => {
  paragraphs += para.classList.add("blue");
});

//! Steps 3 & 4 -- By using paragraphs += you are appending to the variable of paragraphs, which works in this case only because you used let when you declared it on line 6. If you were to use const to declare your variable, this code would only apply the css class to the first paragraph. This could cause issues that you may not see coming. The correct way to do this is to remove "paragraphs +=" on line 11. The forEach method will handle applying the class to every paragraph in your node list, as it iterates through every element node in your list by nature. This is the better way of doing this:
//!   paragraphs.forEach((para) => {
//!      para.classList.add("blue");
//!   });

// paragraphs.textContent = '<p>Hello</p>'
// let newPara = document.createElement('p');
// let newTxt = document.createTextNode('hello world!');
// newPara.appendChild(newTxt);
// div.appendChild(newPara);
div.innerHTML += "<p>hello world</p>";

// step 6
const hobbies = ["soccer", "coding", "guitar", "running", "cycling"]; //step 6
console.log(hobbies);
for (let i = 0; i < hobbies.length; i++) {
  ul.innerHTML += "<li>" + hobbies[i] + "</li>";
}

//! Step 6 -- This is good code here, nothing wrong at all, but I'll show you a slighty faster way of writing this using a for..of loop for the array and template literals. Remember a for..of loop handles all the iteration for us by going through every element of the array automatically, making it easier than the traditional for loop you used.

/* //!  --Step 6 code--
        for(hobby of hobbies) {
            ul.innerHTML += `<li>${hobby}</li>`
        }
*/

form.addEventListener("click", (e) => {
  console.log(e.target);
  e.preventDefault();
  if (e.target.id === "go") {
    e.target.classList.add("go");
  } else if (e.target.id === "stop") {
    e.target.classList.add("stop");
  }
});

//! Great Job on step 9 Ezra!
