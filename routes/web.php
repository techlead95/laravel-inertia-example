<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/alerts', function () {
    return Inertia::render('Alerts/Alerts');
});

Route::get('/admin', function () {
    return Inertia::render('Admin/AdminHome');
});

Route::get('/sign-in', function () {
    return Inertia::render('Public/SignIn');
});

Route::get('/customers', function () {
    return Inertia::render('Customers');
});

Route::get('/help', function () {
    return Inertia::render('Help');
});

Route::get('/my-account', function () {
    return Inertia::render('MyAccount');
});

Route::get('/my-links', function () {
    return Inertia::render('MyLinks');
});

Route::get('/new-order', function () {
    return Inertia::render('NewOrder');
});

Route::get('/orders', function () {
    return Inertia::render('Orders');
});

Route::get('/product-back-orders', function () {
    return Inertia::render('ProductBackOrders');
});

Route::get('/products', function () {
    return Inertia::render('Products');
});

require __DIR__.'/auth.php';
