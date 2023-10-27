const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://task-tracker-iu81.onrender.com',
      changeOrigin: true,
    })
  );
}; 