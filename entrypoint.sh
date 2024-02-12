#!/bin/sh

# Fix permissions on the storage and bootstrap/cache directories
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Then exec the container's main process (what's set as CMD in the Dockerfile)
exec "$@"