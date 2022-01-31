const express = require("express");
const path = require("path");
const fs = require("fs");
const { query } = require("express");
const app = express();
const port = 400;



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'file')) // Set the views directory
 // ENDPOINTS
app.get('/', (req, res)=>{
    const con = {}
    const params = {'title': 'Welcome to online foodshop!!', "content": con}
    res.status(200).render('index.pug', params);
})

app.get("/signup", (req, res)=>{
    const con = {}
    const params = {'title': 'Welcome to online foodshop!!', "content": con}
    res.status(200).render('signup.pug', params);
})
app.get("/rating", (req, res)=>{
    const con = {}
    const params = {'title': 'Welcome to online foodshop!!', "content": con}
    res.status(200).render('rating.pug', params);
})
app.get("/sign", (req, res)=>{
    const con = {}
    const params = {'title': 'Welcome to online foodshop!!', "content": con}
    res.status(200).render('sign.pug', params);
})
app.get("/contact", (req, res)=>{
    const con = {}
    const params = {'title': 'Welcome to online foodshop!!', "content": con}
    res.status(200).render('contact.pug', params);
})

app.post('/',(req,res)=>{
   myquery=req.body.myquery
   myname=req.body.myname
   myemail=req.body.myemail
   myphone=req.body.myphone
    output=`the query related is ${myquery},the client name is ${myname},the client email is ${myemail},the client phone number is ${myphone}`
   fs.writeFileSync('contact.txt',output)
   
   const parans = { "message": 'your form is successfully submitted'  }
   res.status(200).render('contact.pug', parans);

})
  app.post('/signup',(req,res)=>{
    myname=req.body.myname
    myemail=req.body.myemail
    myphone=req.body.myphone
    mydob=req.body.mydob
    mypass=req.body.mypassword
    output1=`te name of client is ${myname},the client email is ${myemail},the phone number of client is ${myphone},the dob of client is ${mydob},the password of client is ${mypass}`

    fs.writeFileSync('signup.txt',output1)
    console.log("you have successfully signup!!")
    

   
    const parans = { "message": 'your form is successfully submitted'  }
    res.status(200).render('signup.pug', parans);
    
})
app.post('/sign',(req,res)=>{
    console.log(req.body)
    const parans = { "message": 'your form is successfully submitted'  }
    
    res.status(200).render('sign.pug', parans);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});







