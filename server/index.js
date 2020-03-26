const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

const { createProxyMiddleware } = require('http-proxy-middleware')


app.use(express.static('../dist'))

app.use('/api/gethomepictures', createProxyMiddleware({ target: 'http://localhost:3000/', changeOrigin: true }));
app.use('/api/neighborhoods', createProxyMiddleware({ target: 'http://localhost:8080/', changeOrigin: true }));
app.use('/api/houses', createProxyMiddleware({ target: 'http://localhost:8080/', changeOrigin: true }));
app.use('/properties', createProxyMiddleware({ target: 'http://localhost:5000/', changeOrigin: true }));
app.use('/examplehomesummary/', createProxyMiddleware({ target: 'http://localhost:3333/', changeOrigin: true }));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
