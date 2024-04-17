import mongoose from "mongoose";

//connect mongodb to atlas
const connectToDatabase = async () => {
    await mongoose.connect('mongodb+srv://sobaybay:c2ozgaZZKY1NdPfZ@cluster0.lhtfhky.mongodb.net/ICS', {  
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

};

connectToDatabase();

// Subject model
const Student = mongoose.model('students', {
  stdnum: String,
  fname: String,
  lname: String,
  age: Number
  }, 'studentData')

export default {Student};