import mongoose from "mongoose";

//connect mongodb to atlas
const connectToDatabase = async () => {
  try {
      await mongoose.connect('mongodb+srv://sobaybay:c2ozgaZZKY1NdPfZ@cluster0.lhtfhky.mongodb.net/ICS', {  
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
      console.log('Connected to MongoDB');
  } catch (error) {
      console.error('Error connecting to MongoDB:', error);
  }
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