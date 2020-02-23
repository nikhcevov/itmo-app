const withOffline = require('next-offline')

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  // Docs: https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW#GenerateSW
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      // {
      //   // Cache pages
      //   urlPattern: /^https?.*/,
      //   handler: 'NetworkFirst',
      //   options: {
      //     cacheName: 'https-calls',
      //     networkTimeoutSeconds: 15,
      //     expiration: {
      //       maxEntries: 150,
      //       maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
      //     },
      //     cacheableResponse: {
      //       statuses: [0, 200]
      //     }
      //   }
      // },
      {
        urlPattern: /^https:\/\/gtfo-cdo/,
        handler: 'StaleWhileRevalidate'
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
  }
}

module.exports = withOffline(nextConfig)
