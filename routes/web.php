<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
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

Route::get('/cv', function () {
    $file = Storage::path('CV Dmytro Shatrov (upd Feb 2025).pdf');

    if (!file_exists($file)) {
        abort(404);
    }

    return response()->download($file);
});
