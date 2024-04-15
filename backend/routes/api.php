<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(App\Http\Controllers\Api\LoginController::class)->middleware('api')->group(function () {
    Route::post('/token/create', 'createAuthToken');
    Route::get('/status', function () {
        return response()->json(['message' => 'healthy'], 200);
    });
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/burned/store', [App\Http\Controllers\Api\BurnedTokensController::class, 'store']);
});
