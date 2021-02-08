// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'osvaldom',
  siteUrl: 'https://osvaldom.github.io',
  // pathPrefix: '/osvaldom.github.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'devnotes/potential-articles/*.md',
        typeName: 'Post',
        remark: {
          // remark options
        }
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
};
