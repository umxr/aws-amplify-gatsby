module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'GOT',
        fieldName: 'got',
        url: 'https://4slrfgbwcjhk7n6nr7zztkiofu.appsync-api.eu-west-2.amazonaws.com/graphql',
        headers: {
          'x-api-key': 'da2-hgefve4jjrdb7m6mibeol45c24'
        }
      }
    }
  ]
}
