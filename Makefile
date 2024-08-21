.PHONY: start stop restart

ifeq ($(ENV),prod)
CONFIG_FILE=./config/docker/docker-compose.prod.yml
else
CONFIG_FILE=./config/docker/docker-compose.dev.yml
endif

start:
	docker-compose -f $(CONFIG_FILE) up --build -d

stop:
	docker-compose -f $(CONFIG_FILE) down

restart:
	docker-compose -f $(CONFIG_FILE) down
	docker-compose -f $(CONFIG_FILE) up --build -d
