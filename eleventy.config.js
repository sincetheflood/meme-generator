module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"src/_includes/css": "css"});
    eleventyConfig.addPassthroughCopy({"src/_includes/fonts": "fonts"});
    eleventyConfig.addPassthroughCopy({"src/_includes/js": "js"});

    return {
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "dist",
        },
    };
};