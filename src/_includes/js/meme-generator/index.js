import {loadFont} from "./font.js";
import {renderCanvas, canvasToPng} from "./canvas.js";

await loadFont();

const fileInput = document.querySelector("#meme-generator-input__file");
const fontSizeInput = document.querySelector("#meme-generator-input__font-size");
const topTextInput = document.querySelector("#meme-generator-input__top-text");
const bottomTextInput = document.querySelector("#meme-generator-input__bottom-text");
const generateButton = document.querySelector(".meme-generator__generate");

fileInput.addEventListener("change", (evt) => renderCanvas(evt));
fontSizeInput.addEventListener("input", (evt) => renderCanvas(evt));
topTextInput.addEventListener("input", (evt) => renderCanvas(evt));
bottomTextInput.addEventListener("input", (evt) => renderCanvas(evt));
generateButton.addEventListener("click", () => canvasToPng());