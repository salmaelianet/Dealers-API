const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require ('express');
const mongoose = require ('mongoose');

const app = express();

const dealersRoutes = require('./routes/dealerRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/repartidores-api',{
useNewUrlParser: true ,
useUnifiedTopology: true  
}).then(db=>console.log('db is conect'))
  .catch(err => console.log(err));
//configuraciones
app.set('port',process.env.PORT || 3000);


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/api/dealers', dealersRoutes);

//iniciar servidor
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
})