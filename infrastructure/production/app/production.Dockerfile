FROM serversideup/php:8.3-fpm-nginx

ENV PHP_OPCACHE_ENABLE=1

USER root

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

COPY --chown=www-data:www-data . /var/www/html
COPY --chown=www-data:www-data ./infrastructure/production/app/.env /var/www/html/.env

USER www-data

RUN composer install --no-interaction --optimize-autoloader --no-dev

RUN npm install
RUN npm run build

LABEL org.opencontainers.image.source=https://github.com/webpnk/webpnk.dev
