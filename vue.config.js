module.exports = {
  productionSourceMap: false,
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      cacheId: 'pwa-sample',
      swDest: 'service-worker.js',
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://connpass\.com/api/v1/event/'),
          handler: 'networkFirst',
          options: {
            cacheName: 'api',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24
            },
            fetchOptions: {
              mode: 'cors',
            },
            matchOptions: {
              ignoreSearch: true,
            },
          }
        }
      ]
    }
  }
}