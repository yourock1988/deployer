dev:
	docker compose up --build --watch

prod:
	docker compose -f docker-compose.prod.yml up --build
