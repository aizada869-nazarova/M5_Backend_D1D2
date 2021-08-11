import express from "express"

const blogRouter = express.Router()
blogRouter.get("/", (req, res) => {})
blogRouter.get("/:id", (req, res) => {})
blogRouter.post("/", (req, res) => {})
blogRouter.put("/:id", (req, res) => {})
blogRouter.delete("/:id", (req, res) => {})

export default blogRouter