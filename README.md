## Local Environment Setup

- Install Node.js, WSL, and Docker.
- Spin up containers. `docker-compose up`
- Generate an encryption key for Laravel. `docker-compose exec php-fpm php artisan key:generate`
- Run migrations and seeds for the database. `docker-compose exec php-fpm php artisan migrat:refresh --seed`
- Install Frontend dependencies. `npm install`

## Run Project Locally

- Spin up containers if you haven't. `docker-compose up`
- Run vite development server. `npm run dev`
test