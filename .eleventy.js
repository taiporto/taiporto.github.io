const markdownShortcode = require("eleventy-plugin-markdown-shortcode");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const markdownIt = require("markdown-it");
const uslug = require('uslug');

const markdownItAnchor = require('markdown-it-anchor');

const uslugify = s => uslug(s);

module.exports = function(eleventyConfig){

    eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');

    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.addPassthroughCopy("js");

    //adding plugins
    eleventyConfig.addPlugin(markdownShortcode);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    //adds plugins and configures markdownIt
    let options = {
        html: true,
        breaks: true,
        linkify: true
      };


    // sets markdownIt as default markdown library for parsing .md files
    let markdownLib = markdownIt(options).use(markdownItAnchor, {slugify: uslugify});
    eleventyConfig.setLibrary("md", markdownLib);

    // configures a filter to allow inserting .md snippets into any nunjucks layout. From here: https://github.com/11ty/eleventy/issues/658
    eleventyConfig.addFilter('markdown', function(value) {
        let markdown = require('markdown-it')({
            html: true
        });
        return markdown.render(value);
    });

    // adds filter to order the skills list with the skill categories with more items first
     eleventyConfig.addFilter("orderSkillsMoreFirst", function(objectArray){
        return objectArray.sort((a,b) => b.skills.length - a.skills.length)
     });


     // adds shortcut to translate break-lines into separate <p> elements
    eleventyConfig.addPairedShortcode("richText", function(content) {
        return content.split("\n").reduce((acc, line, i) => acc+`<p id="${i}" class="mb-0">${line}</p>`);
    });

    return {
        templateFormats: ["md", "njk", "css"],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: 'site',
            includes: '_includes',
            data: '_data',
            output: 'docs'
        }
    }
   
}