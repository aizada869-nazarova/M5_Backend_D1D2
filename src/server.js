import express from "express"
import listEndpoints from "express-list-endpoints"
import authorsRouter from "./services/authors/index.js"
import blogRouter from "./services/authors/blog/index.js"
import cors from 'cors'

const server = express()
const port = 3001

server.use(cors())
server.use(express.json())

server.use("/authors", authorsRouter)
server.use('/blogPosts', blogRouter)

server.listen(port, () => {
  console.log("Server listening to the port " + port)
})
console.table(listEndpoints(server))
