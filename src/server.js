import http from 'node:http'
import ms from 'ms'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('q-' + ms(172800000))
})

const PORT = 8181

server.listen(8181, '0.0.0.0', () => {
  console.log(`Сервер запущен на http://0.0.0.0:${PORT}`)
})
