const express = require("express")
const path = require("path")
const app = express()
const port= 3010



app.use(express.static(path.resolve(__dirname,"public")))

app.get("/",(req,res)=> res.sendFile(path.join(__dirname,"views","index.html")))

app.listen(port,()=> console.log(`el servidor se levanto con exito http://localhost${port}`))


