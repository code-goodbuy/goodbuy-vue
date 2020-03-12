module.exports = {
  title: 'Goodbuy Docs',
  description: 'A Vue.js project documentation',
  themeConfig: {
    logo: '/GoodbuyLogoTitle.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Vue',
        items: [
          { text: 'Guide', link: '/vue-guide/'},
          { text: 'Tourbleshooting', link: '/vue-troubleshooting/' },
        ]
      },
      {
        text: 'Django',
        items: [
          { text: 'Guide', link: '/django-guide/' },
          { text: 'Tourbleshooting', link: '/django-troubleshooting/' },
        ]
      },
      { text: 'Website', link: 'https://goodbuy.netlify.com/' },
    ],
    sidebar: 'auto',
  },
}
