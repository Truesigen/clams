<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function createAuthToken(Request $request)
    {
        $validation = Validator::make(['address' => $request->address], [
            'address' => 'required|string',
        ]);

        if ($validation->fails()) {
            return response()->json(['message' => $validation->errors()->first()], 422);
        }

        $user = User::firstOrCreate(['address' => $request->address]);

        $userTokens = $user->load('tokens')->tokens;

        if (!empty($userTokens)) {

            $user->tokens()->delete();
        }


        $token = $user->createToken(name: uniqid())->plainTextToken;

        return response()->json(['token' => $token], 201);
    }
}
