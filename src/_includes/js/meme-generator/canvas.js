const draw = (canvas, img, options) => {
    const ctx = canvas.getContext("2d");

    // Background image
    ctx.drawImage(img, 0, 0);

    // Font settings
    ctx.miterLimit = 2;
    ctx.lineWidth = options.fontSize * 0.1;
    ctx.font = `900 ${options.fontSize}px Montserrat`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#fff";

    // Calculate some usually okay default text offsets
    // TODO: implement user controlled text offsets?
    const horizontalOffset = canvas.width * 0.5;
    const topTextOffset = canvas.height * 0.07;
    const bottomTextOffset = canvas.height * 0.93;

    // Top text
    ctx.strokeText(options.topText, horizontalOffset, topTextOffset);
    ctx.fillText(options.topText, horizontalOffset, topTextOffset);
    // Bottom text
    ctx.strokeText(options.bottomText, horizontalOffset, bottomTextOffset);
    ctx.fillText(options.bottomText, horizontalOffset, bottomTextOffset);
};

export const renderCanvas = () => {
    const fileInput = document.querySelector("#meme-generator-input__file");
    const fontSizeInput = document.querySelector("#meme-generator-input__font-size");
    const topTextInput = document.querySelector("#meme-generator-input__top-text");
    const bottomTextInput = document.querySelector("#meme-generator-input__bottom-text");

    const file = fileInput.files[0];
    const fontSize = fontSizeInput.value;
    const topText = topTextInput.value;
    const bottomText = bottomTextInput.value;

    const img = new Image();
    const url = URL.createObjectURL(file);
    img.src = url;

    img.onload = () => {
        const canvas = document.querySelector(".meme-generator__canvas");

        canvas.width = img.width;
        canvas.height = img.height;
        canvas.setAttribute("style", `max-width: ${img.width}px; max-height: ${img.height}px;`);

        draw(canvas, img, {fontSize, topText, bottomText});

        URL.revokeObjectURL(url);
    };
};

export const canvasToPng = () => {
    const canvas = document.querySelector(".meme-generator__canvas");

    canvas.toBlob((blob) => {
        const img = document.createElement("img");
        const url = URL.createObjectURL(blob);
        console.log(url);
        // img.onload = () => URL.revokeObjectURL(url);
        img.src = url;
        img.classList.add("meme-generator__preview");

        const previewWrapper = document.querySelector(".meme-generator__preview-wrapper");
        previewWrapper.replaceChildren(img);
    }, "image/png");
};