//Select Elements
let myautoWrittingText = document.querySelector(".auto-writting");

//Start Auto Writting
let start = 1
function autoWritting() {
    let myText = "Hi There, I'm";
    myautoWrittingText.innerHTML = myText.slice(0, start);
    if(start < myText.length){
        start++;
    } else {
        start = 1;
    }
}
setInterval(autoWritting, 200)
//End Auto Writting
//Start Scroller
let scrollerElement = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scrollerElement.style.width = `${(scrollTop / height) * 100}%`
})
//End Scroller

// get copyRight Year
let yearContent = document.querySelector("#footer p span");
let dateNow = new Date();
yearContent.innerHTML = dateNow.getFullYear();
// End copyRight Year