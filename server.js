const Jsonserver = require('json-server')
const server = Jsonserver.create()
const route = Jsonserver.router('db.json')

const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3200
server.use(middlewares)
server.use(router)

server.listen(port)
