const ControllerPrototype = require('./controller.prototype.js');
const fs = require('fs');

module.exports = (() => {
  let controller = ControllerPrototype.create({
    path: '/api/intel'
  });

  let router = controller.router;

  router.get('/', (req, res) => {
    return new Promise((resolve, reject) => {
      fs.readFile(__dirname + '/../../source/industryintel.json', 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        resolve(JSON.parse(data));
      });
    })
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      throw error
    })
  });

  return controller;
})();
