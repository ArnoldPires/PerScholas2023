const mainButton = document.querySelector("#bdayOne");
const mainImg = document.querySelector("#bdayOne img");
const present = document.querySelectorAll(".reward .img img");
const rewardImgs = ["bday2.gif", "bday3.gif", "bday4.gif"];
const resetButton = document.querySelector("#resetButton");
const hOne = document.querySelector("h1");
const reset = document.querySelector("#reset");

mainButton.addEventListener("click", function() {
  mainImg.style.display = "none";
  present.forEach((image, index) => {
    image.src = rewardImgs[index];
    image.parentElement.style.display = "block";
    hOne.style.display = "none";
    reset.style.display = "block";
  });
});
 function refreshPage() {
      location.reload();
    }