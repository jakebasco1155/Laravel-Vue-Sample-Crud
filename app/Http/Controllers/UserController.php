<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Log;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function logout() {
        if (Auth::check()) {
            $user = Auth::user()->token();
            $user->revoke();
        }
      
        return view('auth.login');
    }
}
