const config = {
  siteTitle: 'Rafi Priatna',
  siteTitleShort: 'Rafi Priatna',
  siteTitleAlt: 'Rafi Priatna',
  siteLogo: '/logos/logo.png',
  siteUrl: 'https://rafipriatna.id',
  repo: 'https://github.com/rafipriatna/rafipriatna.id',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'DD MMMM YYYY',
  siteDescription:
    'Mahasiswa biasa yang ingin berbagi pengalaman dalam bentuk tulisan.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-132809816-2',
  disqusShortname: 'rafipriatna',
  postDefaultCategoryID: 'Personal',
  userName: 'rafipriatna',
  userEmail: 'root@rafipriatna.id',
  userTwitter: 'rafipriatna23',
  userLocation: 'Jakarta, ID',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Artikel',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
