<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class BurnedTokensController extends Controller
{
    public function store(Request $request)
    {
        $validate = Validator($request->input(), [
            'signature' => 'required|string',
            'account' => 'required|string',
            'mint' => 'required|string',
            'name' => 'required|string',
            'amount' => 'required|string',
        ]);

        if ($validate->fails()) {
            return response()->json(['message' => $validate->errors()->all()], 422);
        }

        $burnedToken = $request->user()->burnedTokens()->create($request->only(['signature', 'account', 'mint', 'name', 'amount']));

        return response()->json(['message' => 'successfull'], 200);
    }
}
