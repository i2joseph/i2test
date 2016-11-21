const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');

app.set('port', 8888);

app.use(express.static('./client'));
app.use(bodyParser.json());

router(app, require('./controllers/controllers')).init();



// WildCard Route

app.get('*',function(req, res){
  res.sendFile('index.html', {'root':'client'})
});


app.listen(app.get('port'), () => {
  console.log('Express server listening on ' , app.get('port'));
});