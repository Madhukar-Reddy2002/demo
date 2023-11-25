const express = require('express');
const port = process.env.PORT || 1430

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.listen(port, ()=>
console.log("application is running", port));