const express =  require("express");
const path= require("path");
const app =express();
const port = 8080;
//app.use(express.static('static',options));//for serving static file
app.use(express.static('static'));
app.use(express.urlencoded())
//pug specific stuff
app.set('view engine','pug');//set the template engine as pug
app.set('views',path.join(__dirname,'views'));//set the views directory

//endpoints
app.get('/',(req, res)=>{
    const params = {};
    res.status(200).render('home.pug',params);
});
app.get('/contact',(req, res)=>{
    const params = {};
    res.status(200).render('contact.pug',params);
});

//Start the server
app.listen(port, () => {
    console.log(`Application started successfully on port ${port}`);
});
