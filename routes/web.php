<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;

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

    Route::get('/frame/catalog', function () {
        return Inertia::render('Admin/FrameCatalog');
    });

    Route::get('/lens', function () {
        return Inertia::render('Admin/Lens');
    });

    Route::get('/lens/catalog', function () {
        return Inertia::render('Admin/LensCatalog');
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

Route::get('/auth/redirect/azure', function () {
    return Socialite::driver('azure')->redirect();
});

Route::get('/auth/callback/azure', function () {
    $user = Socialite::driver('azure')->user();

    dd($user);
});

Route::get('/auth/logout/azure', function () {
    $logoutUrl = Socialite::driver('azure')->getLogoutUrl(url('/'));
    return redirect($logoutUrl);
});

// Route::get('/auth/redirect/salesforce', function () {
//     return Socialite::driver('salesforce')->redirect();
// });

// Route::get('/auth/callback/salesforce', function () {
//     $user = Socialite::driver('salesforce')->user();

//     dd($user);
// });

// Route::get('/auth/logout/salesforce', function () {
//     $logoutUrl = Socialite::driver('salesforce')->getLogoutUrl(url('/'));
//     return redirect($logoutUrl);
// });

require __DIR__.'/auth.php';
