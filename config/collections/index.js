// English blog collection
const getBlogsEN = collection => {
//   const blogs = collection.getFilteredByGlob('./src/en/blog/*.md');
  const blogs = collection.getFilteredByGlob('./src/en/blog/*.md');

  return blogs.reverse();
};

// Spanish blog collection
const getBlogsES = collection => {
    const blogs = collection.getFilteredByGlob('./src/es/blog/*.md');
    return blogs.reverse();
  };


