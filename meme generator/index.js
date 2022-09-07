// function update_text(){
//     const user_text = document.getElementById("user_text");
//     const meme_text = document.getElementById("meme_text");
//     meme_text.innerHTML = user_text.value;
// }

// function update_image(){
//     var img = document.querySelector("img")
//     var file = document.querySelector("input[type=file]").files[0];
// }
// img.src = window.URL.createObjectURL(file);

let img = document.getElementsByTagName("img");
let form = document.querySelector("form");
const button = document.querySelector("button");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const meme = document.createElement("div");
    const textTop= document.createElement("div");
    const textBottom = document.createElement("div");
    const img = document.createElement("img");

    img.src = document.getElementById("imageUrl").value;
    textTop.classList.add("textTop");
    textTop.innerHTML = document.getElementById("topText").value;

    textBottom.classList.add("textBottom");
      textBottom.innerHTML = document.getElementById("bottomText").value;
      

    meme.classList.add("meme");
    meme.append(textTop);
    meme.append(textBottom);
    meme.append(img);
    let memeLocation = document.getElementById("location");
    memeLocation.append(meme);

form.reset()
   
    })