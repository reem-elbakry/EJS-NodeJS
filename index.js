const express = require('express');


const app = express();

const port = 5000;

//Static files setub 
app.use(express.static('public'));
//more explanation
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))


//To include templating engins and views
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(express.json());

//Routes
const newsRoutes = require('./src/routes/news')
app.use('/', newsRoutes)
app.use('/article', newsRoutes)














app.listen(port, ()=> console.log(`app is running on port ${port}`))