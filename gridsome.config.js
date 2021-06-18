// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]


if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

module.exports = {
  siteName: 'osvaldom',
  siteDescription: 'Osvaldo\'s online location',
  siteUrl: 'https://www.osvaldom.online',
  titleTemplate: '%s - osvaldom',
  // pathPrefix: '/osvaldom.github.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'devnotes/articles/*.md',
        typeName: 'Article',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PortfolioImage',
        path: 'src/assets/images/portfolio/**/*.png',
      }
    }
  ],
  transformers: {
    remark: {
        autolinkClassName: 'icon icon-link heading-anchor',
        externalLinksTarget: '_blank',
        externalLinksRel: ['noopener', ],
        anchorClassName: 'icon icon-link',
        plugins: [
          ['@gridsome/remark-prismjs',
          {
            transformInlineCode: true,
          }]
        ]
    },
    images: {
    }
    },
  templates: {
    Article: [
      {
        // name: 'single-article',
        path: '/blog/articles/:id',
        component: './src/templates/Article.vue'
      }
    ],
    Tag: '/blog/tag/:id',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  chainWebpack: config => {
    console.log(config.loaders);
    config.module
        .rule("vue")
        .use("vue-svg-inline-loader")
        .loader("vue-svg-inline-loader")
        .options({
          removeAttributes: ["alt", "src"],
          svgo: true,
          // verbose: true
        });
    config.module
        .rule('avif') //create a named rule
        .test(/\.avif/) //define the file test
        .use("file-loader")  //create a named use
        .loader('file-loader') //assign a loader
        .end();  //back up to define another use, e.g. you could do .end().use()....
    // config
    //     .plugin('BundleAnalyzerPlugin')
    //     .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
  }
};
