<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
//use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Http;

class NewPasswordController extends Controller
{
    /**
     * Display the password reset view.
     */
    public function create(Request $request): Response
    {
        $token = $request->input('h');


        $response = Http::asForm()->post(env('SALESFORCE_INSTANCE_URL') . "/services/oauth2/token?grant_type=password&client_id=" . env('SALESFORCE_CLIENT_ID') . "&client_secret=" . env('SALESFORCE_CLIENT_SECRET') . "&username=" . env('SALESFORCE_USERNAME') . "&password=" . env('SALESFORCE_PASSWORD'));
        $data = json_decode($response->body());
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $data->access_token
        ])->post(env('SALESFORCE_INSTANCE_URL') . "/services/apexrest/VerifyToken", [
            'token' => $token,
            'checkType' => 'ResetPassword',
        ]);

        if ("0" == $response->body()) {
            return Inertia::render('Auth/PasswordResetExpired');
        }


        dd($response, $response->body());



        //dd($request, $request->email, $request->route('token'));


        return Inertia::render('Auth/ResetPassword', [
            //'email' => $request->email,
            'token' => $token,
        ]);
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'token' => 'required',
            //'email' => 'required|email',
            'password' => [
                'required',
                'confirmed',
                Password::min(8)->mixedCase()->numbers()->symbols(),
            ]
        ]);

        $response = Http::asForm()->post(env('SALESFORCE_INSTANCE_URL') . "/services/oauth2/token?grant_type=password&client_id=" . env('SALESFORCE_CLIENT_ID') . "&client_secret=" . env('SALESFORCE_CLIENT_SECRET') . "&username=" . env('SALESFORCE_USERNAME') . "&password=" . env('SALESFORCE_PASSWORD'));
        $data = json_decode($response->body());

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $data->access_token
        ])->post(env('SALESFORCE_INSTANCE_URL') . "/services/apexrest/ResetUserPassword", [
            'token' => $request->input('token'),
            'password' => $request->input('password'),
            'context' => 'PasswordReset',
        ]);

        //dd($response, $response->body());

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        /*$status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );*/

        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        //if ($status == Password::PASSWORD_RESET) {
        //return redirect()->route('login')->with('status', __($status));
        if ($response->successful()) {
            return to_route('password.done');
        } else {
            throw ValidationException::withMessages([
                'password' => ["Unable to Reset Password"],
            ]);
        }
        return redirect()->route('login');
        //}

        throw ValidationException::withMessages([
            // 'email' => [trans($status)],
        ]);
    }
}
