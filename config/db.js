const mongoose = require("mongoose");
const connectToDB = async()=>{
const connect = await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true

});
console.log(`Mongodb connected successfully: ${connect.connection.host} ....`)
}
connectToDB();