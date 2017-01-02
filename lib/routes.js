module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      description: 'this is the home page',
      handler: function (request, reply) {
        return reply.view('landing');
      }
    }
  },
  {
    method: 'GET',
    path: '/neighbours',
    config: {
      description: 'this is neighbours',
      handler: function (request, reply) {
        return reply.view('neighbours');
      }
    }
  },
  {
    method: 'GET',
    path: '/{path*}',
    config: {
      description: 'this is the 404 page',
      handler: function (request, reply) {
        return reply.view('not-found');
      }
    }
  },
  {
    method: 'GET',
    path: '/static/{path*}',
    handler: {
      directory: { path: './' }
    }
  }
];
