module.exports = {
  siteMetadata: {
    title: 'Daniel Husar',
    description: 'Product engineer based in San Francisco',
    keywords: 'blog,javascript,react,graphql,next.js,gatsby',
    language: 'en',
    siteUrl: 'https://www.danielhusar.sk',
    feed_url: 'https://www.danielhusar.sk/rss.xml',
    image_url: 'https://www.danielhusar.sk/author.png',
    twitterHandle: '@DanoHusar',
  },
  plugins: [
    {
      resolve: '@daniel.husar/gatsby-theme-spring',
      options: {
        author: 'Daniel Husar',
        blogPath: '/blog',
        paginationOffset: 5,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/img/author.png',
        name: 'Daniel Husar',
        short_name: 'Daniel Husar',
        lang: 'en-US',
        theme_color: '#209cee',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
      },
    },
  ],
}

module.exports = {
  pathPrefix: "/danielhusar.sk",
}
