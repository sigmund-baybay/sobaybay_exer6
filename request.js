import needle from 'needle';

needle.post(
    'http://localhost:3000/save-sudent',        
    {   stdnum: 202400001,
        fname: "Mary",
        lname: "Jane",
        age: 25
    },  
    (err, res) => {
    console.log(res.body) // prints the server’s response “Received a
    // POST request.”
    }
);
needle.post(
    'http://localhost:3000/save-sudent',        
    {   stdnum: 202400002,
        fname: "Mary2",
        lname: "Jane2",
        age: 26
    },  
    (err, res) => {
    console.log(res.body) // prints the server’s response “Received a
    // POST request.”
    }
);
needle.post(
    'http://localhost:3000/save-sudent',        
    {   stdnum: 202400003,
        fname: "Mary3",
        lname: "Jane3",
        age: 27
    },  
    (err, res) => {
    console.log(res.body) // prints the server’s response “Received a
    // POST request.”
    }
);
needle.post(
    'http://localhost:3000/save-sudent',        
    {   stdnum: 202400004,
        fname: "Mary4",
        lname: "Jane4",
        age: 28
    },  
    (err, res) => {
    console.log(res.body) // prints the server’s response “Received a
    // POST request.”
    }
);
needle.post(
    'http://localhost:3000/save-sudent',        
    {   stdnum: 202400005,
        fname: "Mary5",
        lname: "Jane5",
        age: 29
    },  
    (err, res) => {
    console.log(res.body) // prints the server’s response “Received a
    // POST request.”
    }
);  


needle.get('http://localhost:3000/user?stdnum=8051495845', (err, res) => {
    console.log(res.body); // prints the body of the response message. 
    
    });

needle.get('http://localhost:3000/members', (err, res) => {
    console.log(res.body); // prints the body of the response message. 

    });
        