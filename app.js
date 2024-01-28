const express = require('express');
const app =  express();
require('dotenv').config();
const fetchcvroutes  = require('./routes/cvRoutes');

app.use(express.json());


app.get('/', (req , res) => {
    res.status(200).json({
        msg : 'hey this project is related to nodejs filesystem basics'
    })

})

app.use('/api/gencv' , fetchcvroutes)



const port = process.env.PORT;
app.listen(port , () => {
    console.log(`server is listening at ${port}`);
})


