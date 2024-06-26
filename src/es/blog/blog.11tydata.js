require('dotenv').config();

const isDevenv = process.env.DEV_ENVIRONMENT;
const todaysDate = new Date();

function showDraft(data) {
  const isDraft = 'draft' in data && data.draft !== false;
  const isFutureDate = data.page.date > todaysDate;

  return (isDevenv == "true") || (!isDraft && !isFutureDate);
};

module.exports = () => {
    return {
        "layout": "layouts/post.njk",
        "tags": "blog_es",
        
        eleventyComputed: {
            eleventyExcludeFromCollections: (data) => {
                if (showDraft(data)) {
                    return data.eleventyExcludeFromCollections;
                }
                else {
                    return true;
                }
            },
        permalink: (data) => {
            if (showDraft(data)) {
                return data.permalink
            }
            else {
                return false;
            }
        }
        }
    }
}






