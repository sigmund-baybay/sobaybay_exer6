import mongoose from "mongoose";

await mongoose.connect('mongodb+srv://sobaybay:c2ozgaZZKY1NdPfZ@cluster0.lhtfhky.mongodb.net/ICS', {  
    useNewUrlParser: true, useUnifiedTopology: true })


// Subject model
const Student = mongoose.model('students', {
    stdnum: Number,
    fname: String,
    lname: String,
    age: Number
  })

// results here will always be an array, containing all documents 
let data = await Student.find({});
console.log(data);

// the result parameter will contain a single object (the first matching document found
// if no matching document was found, result will be null
data = await Student.findOne({ fname: "Peter", lname: "Parker" });
console.log(data);

