## About this repo

Projek ini dibuat sebagai salah satu syarat mengikuti UTS mata kuliah Penerapan Teknologi Internet Universitas Komputer Indonesia. Projek berupa aplikasi e-commerce berbasis web sederhana yang menggunakan beberapa teknologi web framework.

## Tech Stack

-   Laravel
-   Inertia.js
-   Vue.js
-   Tailwind.css
-   Shadcn-ui (Radix vue + Tailwind)

## Prerequisites

-   PHP v.8.1.2 or above
-   Composer v.2.5.8 or above
-   Node.js v.18.17.1 or above
-   NPM v.9.6.7 or above
-   MySQL

## Get started

#### Clone Repo

```
git clone git@github.com:agus-wesly/uts-laravel-ecommerce-app.git
```

#### Install dependencies

```
composer install
npm install
```

#### Fill the db configuration in .env file

```
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

```

#### Run in dev mode & you good to go

```
php artisan serve

// Open this in another terminal
npm run dev
```
