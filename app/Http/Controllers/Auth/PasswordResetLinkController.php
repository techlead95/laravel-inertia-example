<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Client;
use PhpParser\Node\Expr\Cast\Object_;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    public function continue(): Response
    {
        dd("test");
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }
    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'username' => 'required',
        ]);

        /*$req = [
            "grant_type" => "password",
            "client_id" => "' . env('SALESFORCE_CLIENT_ID') . '",
            "client_secret" => "' . env('SALESFORCE_CLIENT_SECRET') . '",
            "username" => "' . env('SALESFORCE_USERNAME') . '",
            "password" => "' . env('SALESFORCE_PASSWORD') . '"
        ];*/
        $req = [
            "grant_type" => "password",
            "client_id" => env('SALESFORCE_CLIENT_ID'),
            "client_secret" => env('SALESFORCE_CLIENT_SECRET'),
            "username" => env('SALESFORCE_USERNAME'),
            "password" => env('SALESFORCE_PASSWORD'),
        ];
        /*
        $apiCredentials = [
            'client_id' => env('SALESFORCE_CLIENT_ID'),
            'client_secret' => env('SALESFORCE_CLIENT_SECRET'),
            'security_token' => '',
           ];
   
           $userCredentials = [
           'username' => env('SALESFORCE_USERNAME'),
           'password' => env('SALESFORCE_PASSWORD'),
           ];
        $client = new Client(['base_uri' => 'hoya--waeg.sandbox.my.salesforce.com']);
        */
        /*$req = [
            'client_id' => '3MVG9ZPHiJTk7yFzdlTbabzLeg5v0HPr7ix9MlsjyboCakYqdiMN4Xdw.InIaUvwI2tTfANKH_Rp8x27u8s6p',
            'redirect_uri' => 'https://optic-2-master.azurewebsites.net/salesforce/callback',
            'response_type' => 'code',
        ];*/
        //$response = Http::post("https://test.salesforce.com/services/oauth2/token?grant_type=password&client_id=" . env('SALESFORCE_CLIENT_ID') . "&client_secret=" . env('SALESFORCE_CLIENT_SECRET') . "&username=" . env('SALESFORCE_USERNAME') . "&password=" . env('SALESFORCE_PASSWORD'));

        //$response = Http::withBasicAuth(env('SALESFORCE_USERNAME') , env('SALESFORCE_PASSWORD'))->withUrlParameters($req)->post("https://test.salesforce.com/services/oauth2/token");

        //$response = Http::withUrlParameters($req)->post("https://hoya--waeg.sandbox.my.salesforce.com/services/oauth2/token");
        //$response = Http::post("https://hoya--waeg.sandbox.my.salesforce.com/services/oauth2/authorize?client_id=" . env('SALESFORCE_CLIENT_ID') . "&redirect_uri=https://optic-2-master.azurewebsites.net/salesforce/callback&response_type=code");
        //return redirect()->away("https://hoya--waeg.sandbox.my.salesforce.com/services/oauth2/authorize?client_id=" . env('SALESFORCE_CLIENT_ID') . "&redirect_uri=https://optic-2-master.azurewebsites.net/salesforce/callback&response_type=code");
        $response = Http::asForm()->post("https://hoya--waeg.sandbox.my.salesforce.com/services/oauth2/token?grant_type=password&client_id=" . env('SALESFORCE_CLIENT_ID') . "&client_secret=" . env('SALESFORCE_CLIENT_SECRET') . "&username=" . env('SALESFORCE_USERNAME') . "&password=" . env('SALESFORCE_PASSWORD'));
        $data = json_decode($response->body());
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $data->access_token
            //])->get("https://hoya--waeg.sandbox.my.salesforce.com/services/data/v47.0/query/?q=SELECT name FROM Account WHERE preferred_username=opticintegrationuser@test.com.waeg");

        ])->get("https://hoya--waeg.sandbox.my.salesforce.com/services/data/v47.0/query/?q=SELECT+id+FROM+User+WHERE+Username='" . $request->input('username') . "'");
        $user = json_decode($response->body());
        if (0 == $user->totalSize) {

            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $data->access_token
            ])->get("https://hoya--waeg.sandbox.my.salesforce.com/services/data/v47.0/query/?q=SELECT+id+FROM+User+WHERE+Username='" . $request->input('username') . "@tradeportal.hoyavision.com'");
            $user = json_decode($response->body());

            if (0 == $user->totalSize) {
                $status = "Username not found";

                //Session::flash('success', $status);
                //return back()->with('status', $status);
                throw ValidationException::withMessages([
                    'username' => [$status],
                ]);
            }
        }

        $userid = $user->records[0]->Id;
        //id='005Fg000005eJ2fIAE'

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $data->access_token
            //])->get("https://hoya--waeg.sandbox.my.salesforce.com/services/data/v47.0/sobjects/User/005Fg000005eJ2fIAE");*/
        ])->delete("https://hoya--waeg.sandbox.my.salesforce.com/services/data/v47.0/sobjects/User/" . $userid . "/password");


        /*$response = Http::withUrlParameters([
            "grant_type" => "password",
            "client_id" => env('SALESFORCE_CLIENT_ID'),
            "client_secret" => env('SALESFORCE_CLIENT_SECRET'),
            "username" => env('SALESFORCE_USERNAME'),
            "password" => env('SALESFORCE_PASSWORD'),
        ])->post("https://hoya--waeg.sandbox.my.salesforce.com/services/oauth2/token");*/
        /*$response = Http::asForm()->post("https://hoya--waeg.sandbox.my.salesforce.com/services/oauth2/authorize", [
            'client_id' => env('SALESFORCE_CLIENT_ID'), 
            'redirect_uri' => 'https://optic-2-master.azurewebsites.net/salesforce/callback',
            'response_type' => 'code',
        ]);
        $response = Http::withHeaders([
            'client_id' => env('SALESFORCE_CLIENT_ID'),
            'redirect_uri' => 'https://optic-2-master.azurewebsites.net/salesforce/callback',
            'response_type' => 'code',
        ])->post("https://hoya--waeg.sandbox.salesforce.com/services/oauth2/authorize");*/
        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        dd($response, $response->body(), $data->access_token,);
        /*$response = Http::delete('https://hoya--waeg.sandbox.my.salesforce.com/services/data/v47.0/sobjects/User/userId/password');
        dd($response);
        $status = Password::sendResetLink(
            $request->only('email')
        );*/
        if ($response->successful()) {
            return to_route('password-email-sent');
        } else {
            throw ValidationException::withMessages([
                'username' => ["Password Reset Failed"],
            ]);
        }
        //if ($status == Password::RESET_LINK_SENT) {
        //return back()->with('status', __($status));
        //return back()->with('status', $status);
        //}

        /*throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);*/
    }
}
