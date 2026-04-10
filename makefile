include .env

build:
	docker-compose up --build -d
up:
	docker-compose up -d
down:
	docker-compose stop

reload:
	make down
	make up

db-restore:
	gunzip -c dumps/auction.sql.gz | docker exec -i burunzhuy_pgsql psql -u$(DB_USERNAME) -p$(DB_PASSWORD) $(DB_DATABASE);
db-export:
	docker exec burunzhuy_pgsql pg_dump -U$(DB_USERNAME) $(DB_DATABASE) | gzip > dumps/auction_$(shell date +%F).sql.gz