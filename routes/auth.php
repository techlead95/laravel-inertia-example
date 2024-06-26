<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
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
        return Socialite::driver('salesforce')->redirect();
    })->name('salesforce');

    Route::get('salesforce/callback', function () {
        $user = Socialite::driver('salesforce')->user();

        $user = User::updateOrCreate([
            'salesforce_id' => $user->id,
        ], [
            'email' => $user->email,
            'name' => $user->name,
        ]);

        Auth::login($user);

        return redirect()->intended(RouteServiceProvider::HOME);
    });

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

    // Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
    //     ->name('password.request');

    // Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
    //     ->name('password.email');

    // Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
    //     ->name('password.reset');

    // Route::post('reset-password', [NewPasswordController::class, 'store'])
    //     ->name('password.store');
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
