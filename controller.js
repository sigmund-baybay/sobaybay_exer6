//import statements
import Student from './mongoose-basics.js'


const saveStudent = async (req, res) => {

    try{
        const newStudent = new Student({
            stdnum: req.body.stdnum,
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age
        });

        await newStudent.save();

        res.send({inserted:true});
    }catch(err){
        console.log(err);
        res.send({inserted:false});
    }   
};

const updateStudent = async (req, res) => {
    try{
        await Student.updateOne(
        { fname: "Mary Jane" },
        {$set: {lname: "Parker"}}
        );
        res.send('Updated a Student.');
    }catch(err){
        console.log(err);
    }

};
const removeUser = async (req, res) => {
    res.send('Received a POST request.');

    try{
        await Student.deleteOne({ stdnum: 8051495845})

    }catch(err){
        console.log(err);
    }
};

const removeAllUsers = async (req, res) => {
    res.send('Received a POST request.');

    try{
        await Student.deleteMany({});

        res.send({deleted:true});
    }catch(err){
        console.log(err);
        res.send({deleted:false}); 
    }

};



const getUser = async (req, res) => {
    try{
        user = await Student.findOne({ stdnum:res.query.stdnum });
        res.json(user);

    }catch(err){
        console.log(err);
    }


};

const getMembers = async (req, res) => {
    try{
        
        let members = await Student.find({});

        res.json(members);

    }catch(err){
        console.log(err);
    }

};


export default { saveStudent, updateStudent, removeUser, removeAllUsers, getUser, getMembers }   