const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()
const upload = multer();

var db = require('./models');
var FormEntry = db.FormEntry;

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('verbose', true)

app.get('/', (req, res) => res.render('pages/index'))

app.post('/form', function(req, res){
  console.log(req.body)
  FormEntry.create({'value': req.body['form_data']})
  res.send('got it.')
})

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
  db.sequelize.sync()
})
