const port = 8080
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())


const option = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

app.get('/books', (req, res) => {
  const url = 'https://api-for-missions-and-railways.herokuapp.com/public/books'
  axios.get(url, option)
  .then(response => {
    res.json(response.data)
  })
})

app.listen(8000, () => console.log(`server running ${port}`))
