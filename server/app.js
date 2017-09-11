const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.port || 8081;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register',(req,res)=>{
    res.json({
        message:'Hello ' + req.body.email
    });
});

app.listen(port, ()=>{
    console.log('Server running on port',port);
});