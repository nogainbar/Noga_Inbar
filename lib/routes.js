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
    path: '/about',
    config: {
      description: 'this is the about page',
      handler: function (request, reply) {
        return reply.view('about');
      }
    }
  },
  {
    method: 'GET',
    path: '/contact',
    config: {
      description: 'this is the contact page',
      handler: function (request, reply) {
        return reply.view('contact');
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
    path: '/qsa',
    config: {
      description: 'this is qsa',
      handler: function (request, reply) {
        return reply.view('qsa');
      }
    }
  },
  {
    method: 'GET',
    path: '/breathewithme',
    config: {
      description: 'this is breathewithme',
      handler: function (request, reply) {
        return reply.view('bwm');
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
