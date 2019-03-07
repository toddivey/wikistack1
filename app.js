const express = require('express')
// const app = express.Router()
const app = express()
const morgan = require('morgan')
//  const serve   = require('express-static');
 const  { db, Page, User } =require('./models')
const path = require('path')
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')

app.use('/wiki', wikiRouter)

app.use(morgan('dev'));
app.use(express.static('stylesheets'))//serving up static files (e.g. css files)

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/wiki')
})

 db.authenticate().then(()=> {console.log('connected to the database')})

 const PORT = 3000

 const init = async() => {
     await Page.sync({force: true})
     await User.sync({force: true})
     app.listen(PORT, () => {
         console.log(`App listening in port ${PORT}`)
     })
     
     
 } 
init()
module.exports = app