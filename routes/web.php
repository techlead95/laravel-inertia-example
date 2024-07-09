<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LensController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\FrameController;
use App\Http\Controllers\FrameAddonController;
use App\Http\Controllers\FrameOffloadAvailabilityController;
use App\Http\Controllers\FrameVariationController;
use App\Http\Controllers\LensCoatingController;
use App\Http\Controllers\MiscController;
use App\Http\Controllers\MirrorController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TintController;
use App\Http\Controllers\ShipToController;


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

Route::middleware('auth')->group(function () {

    Route::middleware('check.approved')->group(function () {
        Route::prefix('admin')->name('admin.')->middleware('admin')->group(function () {
            Route::get('/', function () {
                return redirect()->route('admin.users.index');
            });

            Route::put('users/{user}/ajax-update', [UserController::class, 'ajaxUpdate'])->name('users.ajax-update');
            Route::resource('users', UserController::class);

            Route::get('/frame/catalog', [FrameController::class, 'catalog'])->name('frame.catalog');
            Route::put('frames/{frame}/update-lens-material-limitations', [FrameController::class, 'updateLensMaterialLimitation'])->name('frames.update-lens-material-limitations');
            Route::put('frames/{frame}/update-lens-style-limitations', [FrameController::class, 'updateLensStyleLimitation'])->name('frames.update-lens-style-limitations');
            Route::resource('frames.frame-variations', FrameVariationController::class);
            Route::resource('frames.frame-addon', FrameAddonController::class);
            Route::resource('frames.offload-availabilities', FrameOffloadAvailabilityController::class);
            Route::resource('frame', FrameController::class);

            Route::get('/lens/catalog', [LensController::class, 'catalog'])->name('lens.catalog');
            Route::resource('lens', LensController::class);

            Route::get('/mirror/catalog', [MirrorController::class, 'catalog'])->name('mirror.catalog');
            Route::resource('mirror', MirrorController::class);

            /*Route::get('/ship-to-account-maintenance', function () {
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
            });*/

            Route::get('/modules', function () {
                return Inertia::render('Admin/Modules');
            });

            Route::resource('coatings', LensCoatingController::class);

            Route::resource('tint', TintController::class);

            Route::resource('misc', MiscController::class);

            Route::resource('users.shiptos', ShipToController::class);
        });

        Route::middleware('user')->group(function () {
            Route::get('/', function () {
                //return Inertia::render('Home');
                return redirect()->route('orders.index');
                //return Inertia::render('orders');
            });

            Route::resource('orders', OrderController::class);

            Route::get('/customers', function () {
                return Inertia::render('Customers');
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
        });
    });

    Route::get('/alerts', function () {
        return Inertia::render('Alerts/Alerts');
    });

    Route::get('/help', function () {
        return Inertia::render('Help');
    });

    Route::get('/my-account', function () {
        return Inertia::render('MyAccount');
    });

    Route::get('need-approval', function () {
        return inertia()->render('NeedApproval');
    })->name('need-approval');
});

require __DIR__ . '/auth.php';
