const express = require('express');
const app = express();
const path = require('path');


const mainRoutes = require ('./src/routes/main.routes');
const adminRoutes = require ('./src/routes/admin.routes');
const shopRoutes = require ('./src/routes/shop.routes');


app.listen(3001,() =>console.log('server corriendo en 3001'));

// app.get(express.static('public'));

// template engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"./src/views"));

// middleware config
app.use(express.urlencoded());
app.use(express.json());

app.use((req,res)=>{res.status(404).send('la Pagina no existe')});




























