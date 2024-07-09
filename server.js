import Express from 'express';
import Path from 'path';

const app = Express();
const dir_front ="frontend/build";
const dir = Path.resolve();

app.use(Express.static(dir_front));
app.use(Express.json());
app.use(Express.urlencoded());


app.listen('5000',function(){
    console.log("Server has started");
});

app.get("/", function(req,res){
    res.sendFile(dir + "/" + dir_front + "/index.html");
});

app.get("/register_page", function(req,res){
    let {name, lastname, id} = req.body;
    console.log("Info recibida "+" "+name +" " + lastname + " " + id);
    res.sendFile(dir + "/" + dir_front + "/index.html");
});

app.get("/consult_page", function(req,res){
    res.sendFile(dir + "/" + dir_front + "/index.html");
});

app.get("/contact_page", function(req,res){
    res.sendFile(dir + "/" + dir_front + "/index.html");
});