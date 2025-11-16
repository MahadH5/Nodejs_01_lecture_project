import express from 'express'
import cors from "cors"
import bodyParser from "body-parser"

import studentRoute from "./routes/studentRoute.js"

// Initialize Express
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Students
app.use("/api/students", studentRoute)


// Basic API
// GET, POST, PUT, DELETE
// API ENDPOINT
// req = request (codsi), res = response (jawaab)
app.get("/", (req, res) => {
    res.json({message: "Welcome to NODE JS and EXPRESS"})
})

// Starting the server

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`)
})

export default app