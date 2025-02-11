build:
	docker build -t ghcr.io/webpnk/webpnk.dev:latest --platform linux/amd64 -f infrastructure/production/app/production.Dockerfile .
deploy:
	docker push ghcr.io/webpnk/webpnk.dev:latest
