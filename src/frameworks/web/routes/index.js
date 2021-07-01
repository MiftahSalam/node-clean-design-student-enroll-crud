const express = require('express')
const router = require('./students')

const apiRouter = (dependencies) => {
    const routes = express.Router()
    const studentRouter = router(dependencies)

    routes.use('/students',studentRouter)

    return routes
}

module.exports = apiRouter