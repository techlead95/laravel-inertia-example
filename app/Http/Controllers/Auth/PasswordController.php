<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;
use Inertia\Response;
//use Laravel\Socialite\Facades\Socialite;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function create(Request $request): Response
    {

        //dd(Socialite::driver('saml2')->getServiceProviderEntityId(), 
        //Socialite::driver('saml2')->getServiceProviderAssertionConsumerUrl()
        //);
        $token = $request->input('h');


        $response = Http::asForm()->post(env('SALESFORCE_INSTANCE_URL') . "/services/oauth2/token?grant_type=password&client_id=" . env('SALESFORCE_CLIENT_ID') . "&client_secret=" . env('SALESFORCE_CLIENT_SECRET') . "&username=" . env('SALESFORCE_USERNAME') . "&password=" . env('SALESFORCE_PASSWORD'));
        $data = json_decode($response->body());
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $data->access_token
        ])->post(env('SALESFORCE_INSTANCE_URL') . "/services/apexrest/VerifyToken", [
            'token' => $token,
            'checkType' => 'Registration',
        ]);
        $contactID = $response->body();
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $data->access_token
            //])->get("https://hoya--waeg.sandbox.my.salesforce.com/services/data/v47.0/query/?q=SELECT+*+FROM+Contact+WHERE+Id='" . $contactID . "'");
        ])->get(env('SALESFORCE_INSTANCE_URL') . "/services/data/v47.0/query/?q=SELECT+FirstName,+LastName+FROM+Contact+WHERE+Id='" . $contactID . "'");
        if ($response->failed()) {
            return Inertia::render('Auth/InvalidRegistration');
        }

        $contact = json_decode($response->body());

        //dd($response, $response->body());

        if (0 == $contact->totalSize) {
            return Inertia::render('Auth/InvalidRegistration');
        }

        $firstName = $contact->records[0]->FirstName;
        $lastName = $contact->records[0]->LastName;

        $firstName = str_replace(' ', '.', $firstName);
        $lastName = str_replace(' ', '.', $lastName);


        //dd($response, $response->body(), $firstName, $lastName);



        //dd($request, $request->email, $request->route('token'));


        return Inertia::render('Auth/SetPassword', [
            //'email' => $request->email,
            'token' => $token,
            'firstName' => $firstName,
            'lastName' => $lastName,
            'contactID' => $contactID,
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
            ],
            'first_name' => 'required',
            'last_name' => 'required',
            'contactid' => 'required',
            'confirm' => 'accepted',
            'terms' => 'accepted'
        ]);

        $response = Http::asForm()->post(env('SALESFORCE_INSTANCE_URL') . "/services/oauth2/token?grant_type=password&client_id=" . env('SALESFORCE_CLIENT_ID') . "&client_secret=" . env('SALESFORCE_CLIENT_SECRET') . "&username=" . env('SALESFORCE_USERNAME') . "&password=" . env('SALESFORCE_PASSWORD'));
        $data = json_decode($response->body());

        $username = $request->input('first_name') . '.' . $request->input('last_name');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $data->access_token
        ])->post(env('SALESFORCE_INSTANCE_URL') . "/services/apexrest/CheckUsername", [
            'username' => $username,
        ]);

        if ("1" == $response->body()) {
            $i = 1;
            while ("1" == $response->body()) {
                $username = $request->input('first_name') . '.' . $request->input('last_name') . $i;
                $response = Http::withHeaders([
                    'Authorization' => 'Bearer ' . $data->access_token
                ])->post(env('SALESFORCE_INSTANCE_URL') . "/services/apexrest/CheckUsername", [
                    'username' => $username,
                ]);
                $i++;
            }
        }

        //dd($username, $request->input('contactid'));
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $data->access_token
        ])->post(env('SALESFORCE_INSTANCE_URL') . "/services/apexrest/CreateUserFromPortal", [
            'contactid' => $request->input('contactid'),
            'username' => $username,
            'password' => $request->input('password'),
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
            return to_route('registration.succeeded');
        } else {
            dd($response, $response->body());
            return to_route('registration.failed');
        }
        return redirect()->route('login');
        //}

        throw ValidationException::withMessages([
            // 'email' => [trans($status)],
        ]);
    }
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back();
    }
}
