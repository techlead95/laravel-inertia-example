FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y gnupg2 curl unixodbc-dev zip unzip

# Add Microsoft repository for Debian 10 (Buster) or Debian 11 (Bullseye) as per your base image
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
    && curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list

# Update apt cache and install the ODBC driver and SQL Server Command-Line Tools
RUN apt-get update \
    && ACCEPT_EULA=Y apt-get install -y msodbcsql17 mssql-tools
ENV COMPOSER_ALLOW_SUPERUSER 1
# Install additional PHP extensions
RUN pecl install pdo_sqlsrv sqlsrv && docker-php-ext-enable pdo_sqlsrv sqlsrv

WORKDIR /var/www/html
COPY . /var/www/html
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-interaction --no-dev --prefer-dist

COPY entrypoint.sh /usr/local/bin/
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 9000
CMD ["php-fpm"]