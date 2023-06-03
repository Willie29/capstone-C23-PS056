const Hapi = require('@hapi/hapi');
const generalRoutes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
 
  server.route(generalRoutes);
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();