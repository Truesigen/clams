<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProgressController extends Controller
{
    public function showOverall()
    {
        $count = cache()->remember('burnsCount', now()->addHours(2), function () {
            return DB::table('burned_tokens')->count();
        });

        return response()->json(['count' => $count], 200);
    }

    public function showScore(Request $request)
    {
        $score = DB::table('burned_tokens')->where('user_id', '=', $request->user()->id)->count();

        return response()->json(['score' => $score], 200);
    }
}
