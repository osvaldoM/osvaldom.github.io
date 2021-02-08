// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'osvaldom',
  siteDescription: 'Osvaldo\'s online location',
  siteUrl: 'https://osvaldom.github.io',
  titleTemplate: '%s - osvaldom',
  // pathPrefix: '/osvaldom.github.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'devnotes/articles/*.md',
        typeName: 'Article',
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
  },
  templates: {
    Article: [
      {
        // name: 'single-article',
        path: '/blog/articles/:id',
        component: './src/templates/Articlee.vue'
      }
    ]
  }
};