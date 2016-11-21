const express = require('express')
const compression = require('compression')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()

const serverRoutes = require('./server/routes/server')

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(__dirname + '/client/build'))

app.get('/server', serverRoutes)

// Static.
app.use((req, res, next) => {
  if (req.url.match(/((scripts|styles|images|assets)\/\w*\.(svg|js|html|css|png|jpg|jpeg))/)) {
    const match = req.url.match(/((scripts|styles|images|assets)\/\w*\.(svg|js|html|css|png|jpg|jpeg))/)[0]
    console.log(`File requested: ${match}`)
    res.sendFile(`public/${match}`, {root: './'})
    return;
  }
  next()
})

app.get('*', (req, res) => {
  res.sendFile('/client/src/index.html', { root: __dirname })
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}.`)
})
