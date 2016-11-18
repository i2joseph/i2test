const intel = require('./intel');
const table = require('./table');

module.exports = (() => {
  let controllers = [
    intel,
    table
  ];

  let router = {};

  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });

  return router;
})();
