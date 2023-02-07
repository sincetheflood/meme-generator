export const loadFont = async () => {
    const font = new FontFace("Montserrat", "url('/fonts/Montserrat-Black.woff2')", {
        weight: "900",
    });

    await font.load();
    document.fonts.add(font);
};