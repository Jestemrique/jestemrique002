const {EleventyI18nPlugin} = require('@11ty/eleventy');

module.exports = eleventyConfig => {

    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: 'es',
        errorMode: 'allow-fallback'
    });


    //Import collections
    const {
        getBlogsEN,
        getBlogsES,
      } = require('./config/collections/index.js');

    //Custom Collections
    eleventyConfig.addCollection('blog_en', getBlogsEN);

    eleventyConfig.addPlugin(require('./config/custom-filters.js'));
    eleventyConfig.addFilter("debug", (content) => `${JSON.stringify(content, null , 4)}`);

    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk'
    };
};