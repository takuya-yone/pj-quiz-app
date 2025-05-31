 module.exports = {
   'swagger-spec-file': {
     input:{
     target: '../backend/swagger-spec.yml'
    },
     output:{
      mode: 'single',
      target:'./src/apiClient.ts',
      schemas: './src/model',
      client: 'fetch',
      baseUrl: 'http://localhost:4000',
      mock: true,
     }
   },
 };