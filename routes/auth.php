<?php

use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('email-login', [AuthenticatedSessionController::class, 'create'])
        ->name('email-login');

    Route::get('login', function () {
        return inertia()->render('Auth/Login');
    })->name('login');


    Route::get('admin-login', function () {
        return inertia()->render('Auth/AdminLogin');
    })->name('admin-login');

    Route::get('salesforce/redirect', function () {
        //return Socialite::driver('salesforce')->redirect();
        return Socialite::driver('saml2')
            //->with(['state' => env('SALESFORCE_REDIRECT_URI')])
            //->with(['pageDesign' => 'SafetyRx'])
            //->redirectURL(env('SALESFORCE_REDIRECT_URI'))
            ->redirect();
    })->name('salesforce');


    Route::post('salesforce/callback', function () {

        //Route::get('salesforce/callback', function () {
        //$user = Socialite::driver('salesforce')->user();
        $user = Socialite::driver('saml2')->stateless()->user();

        $attributes = $user->getRaw();

        //dd($attributes[0]->getName(), $attributes[0]->getAllAttributeValues());
        for ($i = 0; $i < count($attributes); $i++) {
            switch ($attributes[$i]->getName()) {
                case 'username':
                    $username = $attributes[$i]->getAllAttributeValues()[0];
                case 'email':
                    $email = $attributes[$i]->getAllAttributeValues()[0];
                case 'contact_id':
                    $contact_id = $attributes[$i]->getAllAttributeValues()[0];
            }
        }
        //dd($user, $user->getRaw(), $username, $email, $contact_id);
        $user = User::updateOrCreate([
            //'salesforce_id' => $user->id,
            //'salesforce_id' => $user->user["preferred_username"],
            'salesforce_id' => $contact_id,
        ], [
            //'email' => $user->email,
            'email' => $email,
            'salesforce_username' => $username,
            //'name' => $user->name,
            //'first_name' => $user->user["given_name"],
            //'last_name' => $user->user["family_name"],
        ]);

        Auth::login($user);

        return redirect()->intended(RouteServiceProvider::HOME);
    });
    /*Route::get('saleforce/metadata', function () {
        return Socialite::driver('saml2')->getServiceProviderMetadata();
    });*/


    Route::get('azure/redirect', function () {
        return Socialite::driver('azure')->redirect();
    })->name('azure');

    Route::get('azure/callback', function () {
        $user = Socialite::driver('azure')->user();

        $user = User::updateOrCreate([
            'azure_id' => $user->id,
        ], [
            'email' => $user->email,
            'name' => $user->name,
        ]);

        Auth::login($user);

        return redirect()->intended(RouteServiceProvider::HOME);
    });

    Route::post('email-login', [AuthenticatedSessionController::class, 'store']);


    //Route::get('forgotpassword', function () {
    //    return inertia()->render('Auth/ForgotPassword');
    //});

    Route::get('initial-password', [PasswordController::class, 'create'])
        ->name('password.initial');
    Route::get('invalid-registration', function () {
        return Inertia::render('Auth/InvalidRegistration');
    })->name('invalid.registration');
    Route::get('registration-succeeded', function () {
        return Inertia::render('Auth/RegistrationSucceeded');
    })->name('registration.succeeded');
    Route::get('registration-failed', function () {
        return Inertia::render('Auth/RegistrationFailed');
    })->name('registration.failed');
    Route::post('initial-password', [PasswordController::class, 'store'])
        ->name('password.initialized');



    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::get('password-email-sent', function () {
        return Inertia::render('Auth/ForgotPasswordLinkSent');
    })->name('password.email.sent');
    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.username');



    //Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
    Route::get('reset-password', [NewPasswordController::class, 'create'])
        ->name('password.reset');
    Route::get('password-reset-expired', function () {
        return Inertia::render('Auth/PasswordResetExpired');
    })->name('password.reset.expired');
    Route::get('password-done', function () {
        return Inertia::render('Auth/PasswordSet');
    })->name('password.done');
    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});

Route::middleware('auth')->group(function () {
    // Route::get('verify-email', EmailVerificationPromptController::class)
    //     ->name('verification.notice');

    // Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
    //     ->middleware(['signed', 'throttle:6,1'])
    //     ->name('verification.verify');

    // Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    //     ->middleware('throttle:6,1')
    //     ->name('verification.send');

    // Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
    //     ->name('password.confirm');

    // Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    // Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
