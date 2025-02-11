<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/skills', function () {
    return Inertia::render('Skills');
});

Route::get('/my-work', function () {
    return Inertia::render('Work');
});

Route::get('/tweets', \App\Http\Controllers\TweetsController::class);
