const express =require('express');
const app= express();

require("dotenv").config();
const PORT=process.env.PORT || 8000;

// middlewaer
app.use(express.json());

const blog =require("./routes/blog")

// mount

app.use("/api/v1", blog);

const connectDb = require("./config/database");
connectDb();

// start server

app.listen(PORT, () =>{
    console.log(`App is started at port no ${PORT}`);

})

app.get("/",(req,res)=>{
   res.send(`<h1>hello this is Home Page</h1>`)
})