import express from "express"
import cors from "cors"
import FileUpload from "express-fileupload"
import CarRoute from "./routes/CarRoute.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(FileUpload())
app.use(express.static("public"))
app.use(CarRoute)

app.listen(5000, () => console.log("Server Up and Running"));