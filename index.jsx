const express = require('express')
const app = express();
const port = 5000
//const path =require('path')
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`sever is running at ${port} on the Browser......`);
    
})