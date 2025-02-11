<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

Route::get('/', function () {
    $cvUrl = Storage::url('CV Dmytro Shatrov (upd Feb 2025).pdf');

    return Inertia::render('Welcome', [
        'cvUrl' => $cvUrl,
    ]);
});

Route::get('/skills', function () {
    return Inertia::render('Skills');
});

Route::get('/my-work', function () {
    return Inertia::render('Work');
});

Route::get('/tweets', \App\Http\Controllers\TweetsController::class);
