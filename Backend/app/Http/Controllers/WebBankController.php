<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebBankController extends Controller
{
    //
    public function dashboard()
    {
        return view('pages.bank.dashboard'); // Render the home.blade.php view
    }
}
