<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use SocialiteProviders\Manager\SocialiteWasCalled;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (!app()->environment('local')) {
            URL::forceScheme('https');
        }

        Event::listen(function (SocialiteWasCalled $event) {
            $event->extendSocialite('salesforce', \SocialiteProviders\SalesForce\Provider::class);
            $event->extendSocialite('azure', \SocialiteProviders\Azure\Provider::class);
        });
    }
}
