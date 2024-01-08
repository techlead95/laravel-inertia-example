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

Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/AdminHome', [
            'users' => [
                [
                    'id' => 1,
                    'email' => 'vgislason@yahoo.com',
                    'stAccount' => '621347',
                    'stName' => 'Ship to 1'
                ],
                [
                    'id' => 2,
                    'email' => 'josianne.mckenzie@schroeder.biz',
                    'stAccount' => '621438',
                    'stName' => 'Ship to 2'
                ],
                [
                    'id' => 3,
                    'email' => 'vgislason@yahoo.com',
                    'stAccount' => '625887',
                    'stName' => 'Ship to Blue'
                ],
                [
                    'id' => 4,
                    'email' => 'vgislason@yahoo.com',
                    'stAccount' => '151121',
                    'stName' => 'Schneider'
                ],
                [
                    'id' => 5,
                    'email' => 'vgislason@yahoo.com',
                    'stAccount' => '554744',
                    'stName' => 'Ana'
                ],
            ]
        ]);
    });

    Route::get('/ship-to-account-maintenance', function () {
        return Inertia::render('Admin/ShipToAccountMaintenance', [
            'shipTos' => [
                [
                    'id' => 1,
                    'shipToNumber' => 621437,
                    'shipToName' => 'Black Behavioral Health Center'
                ],
                [
                    'id' => 2,
                    'shipToNumber' => 624277,
                    'shipToName' => 'Sugra Shack Bakery'
                ],
                [
                    'id' => 3,
                    'shipToNumber' => 638411,
                    'shipToName' => 'Scott Seafood'
                ],
                [
                    'id' => 4,
                    'shipToNumber' => 621247,
                    'shipToName' => 'Shannons Crown Industries'
                ],
                [
                    'id' => 5,
                    'shipToNumber' => 621437,
                    'shipToName' => 'Bloated Toads'
                ],
            ]
        ]);
    });

    Route::get('/modules', function () {
        return Inertia::render('Admin/Modules');
    });

    Route::get('/frame', function () {
        return Inertia::render('Admin/Frame');
    });
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
