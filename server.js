// Importing required modules
const express = require('express')
const path = require('path')

// Creating express instance
const app = express()

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Get route to serve HTML Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

const port = 3000;

// Starting the server
app.listen(port, () => {
    console.log(`Server is Listening on port: ${port}`)
})