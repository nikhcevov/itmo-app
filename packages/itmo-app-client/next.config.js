const withOffline = require('next-offline')
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

const pwaConf = {
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: false,
  // Docs: https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW#GenerateSW
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/gtfo-cdo.*\.now\.sh\/(?!api)/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'http-calls',
          networkTimeoutSeconds: 5,
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 1 // 1 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
        urlPattern: /^https:\/\/fonts\.gstatic\.com/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-webfonts',
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'google-fonts-stylesheets'
        }
      },
      {
        // Cache JavaScript and CSS
        urlPattern: /\.(?:js|css)$/,
        handler: 'StaleWhileRevalidate'
      },
      {
        // Cache Images
        urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          }
        }
      }
    ]
  },
  experimental: {
    async rewrites () {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js'
        }
      ]
    }
  }
}

const envConf = phase => {
  // when started in development mode `next dev` or `npm run dev`
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD

  console.log(`isDev:${isDev}  isProd:${isProd}`)

  if (isDev) {
    return {
      HOST_API: 'http://localhost:5000'
    }
  }

  if (isProd) {
    return {
      HOST_API: 'https://api.sb0101.online'
    }
  }
}

module.exports = phase => {
  return withOffline(
    {
      ...pwaConf,
      env: { ...envConf(phase) }
    })
}
