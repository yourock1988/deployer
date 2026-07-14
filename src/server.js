import http from 'node:http'
import ms from 'ms'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  const rand = () => Math.trunc(Math.random() * 1000003)
  const time = ms(rand())
  res.end('time-' + time)
})

const PORT = 8181

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Сервер запущен на http://0.0.0.0:${PORT}`)
})
