import express from "express"
import index from "./routes/index.js"
import path from "path"
import users from "./routes/users.js"

const __mkdir = path.resolve()

const app = express()
app.use(express.static("public"))

app.use(users)
app.use(index)

app.get("/", (req, res) => {
	res.redirect("/index")
})

app.use((req, res) => {
	res.status(404)
	res.sendFile(path.join(__mkdir, "view", "404.html"))
})
app.listen(3000)
