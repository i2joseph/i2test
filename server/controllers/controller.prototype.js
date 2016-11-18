const express = require('express');

module.exports = (() => {
  return {
    create: (attributes) => {
      return {
        path: attributes.path || '',
        router: express.Router()
      };
    }
  };
})();
