const ControllerPrototype = require('./controller.prototype.js');
const fs = require('fs');

module.exports = (() => {
  let controller = ControllerPrototype.create({
    path: '/api/table'
  });

  let router = controller.router;

  router.get('/', (req, res) => {
    return new Promise((resolve, reject) => {
      fs.readFile(__dirname + '/../../source/table.json', 'utf8', (err, data) => {
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

  router.get('/company/:company/country/:country/sector/:sector', (req, res) => {
    let company = req.params.company;
    let country = req.params.country;
    let sector = req.params.sector;

    return new Promise((resolve, reject) => {
      fs.readFile(__dirname + '/../../source/table.json', 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        resolve(JSON.parse(data));
      });
    })
    .then((data) => {
      return data.filter((eachData) => {
        if(company === "ALL") {
          return true;
        }
        return eachData.company_name === company
      })
    })
    .then((data) => {
      return data.filter((eachData) => {
        if(country === "ALL") {
          return true;
        }
        return eachData.countryList === country
      })
    })
    .then((data) => {
      return data.filter((eachData) => {
        if(sector === "ALL") {
          return true;
        }
        return eachData.sector === sector
      })
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
