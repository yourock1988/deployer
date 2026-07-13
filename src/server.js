import http from 'node:http'
import ms from 'ms'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  const rand = () => Math.trunc(Math.random() * 1000001)
  const time = ms(rand())
  res.end('time-' + time)
})

const PORT = 8181

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Сервер запущен на http://0.0.0.0:${PORT}`)
})

// docker build --progress=plain --build-arg BUILDKIT_INLINE_CACHE=1 --cache-from ghcr.io/${{ github.repository }}/deployer:latest -t ghcr.io/${{ github.repository }}/deployer:latest .

// - name: Build and Push
//   run: |
//     docker buildx build \
//       --push \
//       --cache-from type=registry,ref=ghcr.io/${{ github.repository }}/deployer:latest \
//       --cache-to type=registry,ref=ghcr.io/${{ github.repository }}/deployer:latest,mode=max \
//       -t ghcr.io/${{ github.repository }}/deployer:latest .

// # - name: Set up Docker Buildx
// #   uses: docker/setup-buildx-action@v4

// я же блядь создаю package-lock.json файл не из контейнера

// RUN apk add tzdata && ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

// docker pull ghcr.io/${{ github.repository }}/deployer:latest || true

// env:
//   DOCKER_BUILDKIT: 1

// terraform и ansible должны разворачивать раннер

//  ну и как тогда синхронизировать версии Docker и BuildKit настройки buildx локальный кеш и доступные cache exporters/importers у раннера с моим локальным компом и продакшен сервером
