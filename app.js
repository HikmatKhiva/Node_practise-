import express from 'express';
import path from 'path';
import routerServer  from './routes/server.js';

const app = express();
const PORT  = process.env.PORT ?? 3100;
const __dirname = path.resolve();

// App use Code
app.use(express.static(path.resolve(__dirname,"static")));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routerServer)

//App Set 
app.set("view engine",'ejs');
app.set("views",path.resolve(__dirname, 'ejs'));

// App Route 
app.get("/",(req,res)=>{
    res.render("index",{title:"Home",active:"home"})
})
app.get("/about",(req,res)=>{
    res.render("about",{title:"About",active:"about"})
})

app.listen(PORT,()=>{
    console.log(`server has been started http://localhost:${PORT}`);
})