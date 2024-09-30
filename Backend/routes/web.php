<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebBankController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/teller/dashboard', [WebBankController::class, 'dashboard'])->name('teller.dashboard');
