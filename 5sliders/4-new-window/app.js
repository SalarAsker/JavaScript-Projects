let images = document.querySelectorAll(".img-gallery img");
console.log(images);
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    openModal(`images/img${index+1}.jpg`);
    console.log(img);
    console.log(index);
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}


let btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach((bt, index) =>{
    bt.addEventListener("click", () =>{
        console.log(bt.innerText);
        console.log(index);
    });
});

// When you define the anonymous function inside the forEach loop, it forms a closure.
// Each time the loop iterates, a new instance of the anonymous function is created with its own img and index values.
// These values are captured by the closure and retained even after the loop iteration completes.
// Each event listener retains its own img and index values through the closure. When an image is clicked, the respective closure is invoked with the correct img and index.
// The reason for this is that the functions assigned to onfocus form closures; they consist of the function definition and the captured environment from the setupHelp function's scope. Three closures have been created by the loop, 