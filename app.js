const express = require('express')
const app = express()

//* body-parser
const bodyParser = require('body-parser');     
app.use(bodyParser.urlencoded({extended:false}));  

//*ejs, dotenv, public-static
app.set ('view engine', 'ejs')
app.use(express.static('public'));
require('dotenv').config()

//*database connection
const mongoose = require('mongoose')
const dbUrl = process.env.MONGODB_URL
mongoose.connect(dbUrl).then(res=> console.log("veritabanı bağlantısı kuruldu")).catch(err=> console.log("veri tabanı bağlantı hatası"))


//*routes


const basket = require('./routes/basket')
const admin = require('./routes/admin')
const addPorduct = require('./routes/addPorduct')
const categories = require('./routes/categories')
const product = require('./routes/product')
const index = require('./routes/index')
app.use(basket)
app.use(admin)
app.use(addPorduct)
app.use(categories)
app.use(product)
app.use(index)







app.listen(3000)