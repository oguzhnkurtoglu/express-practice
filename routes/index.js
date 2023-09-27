import express from "express"
const router = express.Router()
import path from "path"

const __mkdir = path.resolve()

router.use("/index", (req, res) => {
	res.sendFile(path.join(__mkdir, "view", "index.html"))
})

export default router
