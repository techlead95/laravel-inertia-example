<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LensController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\FrameController;
use App\Http\Controllers\OrderController;

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

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/', function () {
        return redirect()->route('admin.users.index');
    });

    Route::resource('users', UserController::class);

    Route::get('/frame/catalog', [FrameController::class, 'catalog'])->name('frame.catalog');
    Route::resource('frame', FrameController::class);

    Route::get('/lens/catalog', [LensController::class, 'catalog'])->name('lens.catalog');
    Route::resource('lens', LensController::class);

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

    Route::get('/coating', function () {
        return Inertia::render('Admin/Coating');
    });

    Route::get('/tint', function () {
        return Inertia::render('Admin/Tint');
    });

    Route::get('/misc', function () {
        return Inertia::render('Admin/Misc');
    });
});

Route::resource('orders', OrderController::class);

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

Route::get('/technical-documents', function () {
    return Inertia::render('TechnicalDocuments');
});

Route::get('/news', function () {
    return Inertia::render('News');
});

Route::get('/my-hoya-links', function () {
    return Inertia::render('MyHoyaLinks');
});

Route::get('/frame-availability', function () {
    return Inertia::render('FrameAvailability');
});

require __DIR__ . '/auth.php';
