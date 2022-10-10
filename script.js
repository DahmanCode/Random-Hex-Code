let outputColor = document.querySelector("#output-color span");
let output = document.getElementById("output");
let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let customAlert = document.querySelector(".custom-alert");
let hexString = "0123456789abcdef";

let generateHexCode = () => {
  let hexCode = "#";
  for (i=0; i<6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  output.value = hexCode;
  outputColor.classList.remove("show-color");
  setTimeout(() => {
    outputColor.classList.add("show-color");
  }, 10);
  outputColor.style.backgroundColor = hexCode;
}

copyBtn.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
  customAlert.style.transform = "translateX(50%) translateY(0%)";
  setTimeout(() => {
    customAlert.style.transform = "translateX(50%) translateY(calc(-10px - 100%))";
  }, 1500);
})

window.onload = generateHexCode;
generateBtn.addEventListener("click", generateHexCode);