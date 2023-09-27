import express from "express"
const router = express.Router()
import path from "path"
import bodyParser from "body-parser"
const __mkdir = path.resolve()

router.use(bodyParser.urlencoded({ extended: true }))
router.get("/users", (req, res) => {
	res.sendFile(path.join(__mkdir, "view", "users.html"))
})
router.post("/users", (req, res) => {
	res.sendFile(path.join(__mkdir, "view", "users.html"))
	console.log(req.body)
})

export default router
