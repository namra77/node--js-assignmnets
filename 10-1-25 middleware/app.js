import express from 'express'
const app=express();
const port=3000;

app.use ((req,res,next)=>{
console.log(`logging ${req.method} ${req.url}`);
next();
})

app.use("users", (req,res,next)=>{

    const{pwd, role}=req.query;
    console.log(role, pwd)


if (role && pwd) {
    if (role === 'admin' && pwd === 'hello@1234') {
      res.send('Welcome admin');
    } else if (role === 'user' && pwd === 'user@1234') {
      res.send('Welcome user');
    } else {
      res.status(403).send('Forbidden');
    }
  } else {
    res.status(403).send('Forbidden');
  }
});

app.get("/admin" , (req,res)=>{
    res.send("user is here");

})

app.post("/admin", (req,res)=>{

})

app.get("/abc/:id", (req,res)=>{
    res.send("hello home")
})

app.listen(port , ()=>{
    console.log(`Server is Running at ${port}`)
})