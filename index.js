// const student=require("./student");
const http=require("http");
const dotenv=require("dotenv");
const express=require("express");
const mongoose=require("mongoose");
const taskControllers=require("./controllers/taskController");
dotenv.config();

const app = express();
app.use(express.json());
app.post("/tasks",taskControllers.createTask);
app.get("/tasks",taskControllers.getTasks);
app.get("/tasks/:id",taskControllers.getTaskById);
app.patch("/tasks/:id",taskControllers.updateTask);
app.delete("/tasks/:id",taskControllers.delTask);
app.get("/:id",(req,res)=>{
    // res.send("GET request");
    res.status(200).json({
        message:"hello",
        id:req.params.id
    });
});
app.post("/",(req,res)=>{
    res.status(200).json(req.body);
})

mongoose.connect("mongodb+srv://20cs246:20cs246@cluster0.dqxwnkv.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("db connected")
    }).catch((err)=>{
        console.log(err);
    });
app.listen(process.env.PORT,()=>{
    console.log("Server is running on ",process.env.PORT);
}) 

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("Hello World");
// });
// server.listen(process.env.PORT,()=>{
//     console.log("Server is running on ",process.env.PORT);
// });

// student.display();
// student.getDetails();
// console.log("Hello World");
// console.log("server");
// console.log("Hi")