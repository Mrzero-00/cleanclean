const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/sms_sender.php',
    createProxyMiddleware({
      target: 'https://sslsms.cafe24.com',
      changeOrigin: true,
    })
  );
};
