const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://inventhealth.care',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/image/pwa-512.png',
    logoLink: 'https://inventhealth.care',
    title:
      "<a href='https://inventhealth.care'><img class='img-responsive' src='https://github.com/adam-p/markdown-here/blob/master/src/common/images/icon48-button-monochrome.png' alt='inventhealth logo' /></a>",
    githubUrl: 'https://github.com/',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://www.linkedin.com/groups/13739633/" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'LinkedIn'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/PtGEm9v" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/Introduction', // add trailing slash if enabled above
      '/Technologies',
      '/Regulatory',
      '/Marketing',
      '/Business',
      '/Join-Us',
    ],
    collapsedNav: [
      '/Join-Us', // add trailing slash if enabled above
    ],
    links: [{ text: 'Home', link: 'https://inventhealth.care' }, { text: 'COVID-19', link: '/Join-Us/Initiatives/COVID-19' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "<a href='https://inventhealth.care'>inventHealth </a><div class='greenCircle'></div><a href='https://inventhealth.care'>care</a>",
  },
  siteMetadata: {
    title: 'Transform healthcare for the better | inventHealthcare',
    description: 'Healthcare Innovations need to retrofit the past while building a bridge to the future. Innovators working together for a collective vision to transform healthcare for the better. ',
    ogImage: null,
    docsLocation: 'https://github.com/',
    favicon: '../src/components/images/logo.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'invent Healthcare',
      short_name: 'inventHealth',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
