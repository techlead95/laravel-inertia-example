<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'azure' => [
        'client_id' => env('AZURE_CLIENT_ID'),
        'client_secret' => env('AZURE_CLIENT_SECRET'),
        'redirect' => env('AZURE_REDIRECT_URI'),
        'tenant' => env('AZURE_TENANT_ID'),
    ],

    'salesforce' => [
        'client_id' => env('SALESFORCE_CLIENT_ID'),
        'client_secret' => env('SALESFORCE_CLIENT_SECRET'),
        'redirect' => env('SALESFORCE_REDIRECT_URI'),
        'instance_url' => env('SALESFORCE_OAUTH_URL')
    ],

    'saml2' => [
        'metadata' => file_get_contents('../SAMLIdP-0spFg00000006LZ.xml'),
        //'sp_acs' => env('SALESFORCE_REDIRECT_URI'),
        'sp_acs' => 'salesforce/callback',
        'sp_entityid' => 'https://optic-2-master.azurewebsites.net/salesforce/entityid',
        /*'attribute_map' => [
            'username' => [
                \LightSaml\Model\Assertion\Attribute::class,
            ],

        ],*?
        //'acs' => env('SALESFORCE_REDIRECT_URI'),
        //'acs' => 'https://hoya--waeg.sandbox.my.site.com/idp/endpoint/HttpRedirect',
        //'entityid' => 'https://hoya--waeg.my.salesforce.com',
        //'entityid' => 'https://hoya--waeg.sandbox.my.site.com',
        //'certificate' => 'MIIEZDCCA0ygAwIBAgIOAXpUC0LtAAAAAHcUkV0wDQYJKoZIhvcNAQELBQAwejESMBAGA1UEAwwJcG93ZXJhcHBzMRgwFgYDVQQLDA8wMEQwUTAwMDAwMDBiUmIxFzAVBgNVBAoMDlNhbGVzZm9yY2UuY29tMRYwFAYDVQQHDA1TYW4gRnJhbmNpc2NvMQswCQYDVQQIDAJDQTEMMAoGA1UEBhMDVVNBMB4XDTIxMDYyODE5MTQyMloXDTIyMDYyODEyMDAwMFowejESMBAGA1UEAwwJcG93ZXJhcHBzMRgwFgYDVQQLDA8wMEQwUTAwMDAwMDBiUmIxFzAVBgNVBAoMDlNhbGVzZm9yY2UuY29tMRYwFAYDVQQHDA1TYW4gRnJhbmNpc2NvMQswCQYDVQQIDAJDQTEMMAoGA1UEBhMDVVNBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzTdyoT9L0T7Us6jHddTyzRNvEcdrAY/TiIljci8yVNfOgJW/InmxCtnXRPa6673KTkIlxzzy6TAMLdZkg09sWM00WmQpxtLOU6RUDHxIwErM0EJvhZN9Zl2k3BCz1yET9mOBTmCxWQiIRnEZdDSTP6FXmAQORreD55FwZ8Xs3mk6ng5OSMxwBl1zHjzZwwH35laJJHl0zGVEO6gW8A6cYNuIghpRzAxrpsdsikKklPjxRLTDxZRM5dTKAdPOTO++NpJAEiiOY8ETk0x5m+WvCJInHWB6ejLJ86XW0cILOGawxXWykUvEZ4W3/MlTi0qkzjVNsbAWprTxwZk/flzn9wIDAQABo4HnMIHkMB0GA1UdDgQWBBSzY3Hd/7XSnX+cTox3dRQzNDUGrjAPBgNVHRMBAf8EBTADAQH/MIGxBgNVHSMEgakwgaaAFLNjcd3/tdKdf5xOjHd1FDM0NQauoX6kfDB6MRIwEAYDVQQDDAlwb3dlcmFwcHMxGDAWBgNVBAsMDzAwRDBRMDAwMDAwMGJSYjEXMBUGA1UECgwOU2FsZXNmb3JjZS5jb20xFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xCzAJBgNVBAgMAkNBMQwwCgYDVQQGEwNVU0GCDgF6VAtC7QAAAAB3FJFdMA0GCSqGSIb3DQEBCwUAA4IBAQC8wa4I5ZM/oUrVhp8V1FCXRguUO9mfmEK36YltfaiMth58fk9KEzsmjBqhUIoRCKTebWqlGRK94dtqfeK60R6k9lMKDDDT/M+vAtTI2t6r266ihciLkOWWEXTG2CrcTHcCA3E7w8AnTxRdbSK4YLyBFSh+sBaSTlWfwHAzYhUm46rJrOjC7TyzVyx5FwyfCDLnQroXWm2/AcBjjEazU4FXoFIXv+fzuHCm/z78eBTI60E5iSx3sRBXaiwxgdHYQCKzt6QNsTkowr2LUVBNjNiP2zJ7a0dutCZLsDzkkLK/QK6Gv3QgiSM4IYU9/bX3avDr48R20wVUtaOYzo8iS2od',

    ],

];
