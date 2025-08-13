const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
          
    })
        .then(console.log("Db Connected Successfully"))
        
        .catch( (error) => {
            console.log("Issue in DB");
            console.log(error);
            process.exit(1);
        })
};

module.exports = connectDb;
