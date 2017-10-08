const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const extensions = [];

app.prepare()
.then(() => {
  const server = express()
  
  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }))
  
  // parse application/json
  server.use(bodyParser.json())
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('/upload', (req, res) => {
    const {javascript, json} = req.body;
    extensions.push({
      javascript, json
    });

    res.json(extensions);
  });

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})