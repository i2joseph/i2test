module.exports = (app, routes) => {
  return {
    init: () => {
      for(var path in routes) {
        app.use(path, routes[path]);
      }
    }
  }
}