// English blog collection
// const getBlogsEN = collection => {

// const blogs = collection.getFilteredByGlob('./src/en/blog/*.md');

//   return blogs.reverse();
// };

// Spanish blog collection
// const getBlogsES = collection => {
//     const blogs = collection.getFilteredByGlob('./src/es/blog/*.md');
//     return blogs.reverse();
//   };





// English blog collection
// const getBlogsLocale = (collection, locale) => {
//   const blogs = collection.getFilteredByTag("blog_" + locale);
//   return blogs.reverse();
// };

const getBlogPostsLocale = collectionAPI => 
  locale => collectionAPI.getFilteredByTag("blog_" + locale);


  // Create a collection that filters content based on locale
  //   eleventyConfig.addCollection("contentByLocale", collectionApi => 
  //     locale => 
  //         collectionApi.getAll().filter((item) => item.data.locale === locale)
  // );
