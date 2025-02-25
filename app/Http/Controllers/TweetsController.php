<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TweetsController extends Controller
{
    private const int PER_PAGE = 3;

    private const array TWEETS = [
        ['tweet_id' => '1891620370366578839'],
        ['tweet_id' => '1890115596521701826'],
        ['tweet_id' => '1888996916253335681'],
        ['tweet_id' => '1888911475453903042'],
        ['tweet_id' => '1888910450626007054'],
        ['tweet_id' => '1887636517520134294'],
        ['tweet_id' => '1886822648346255609'],
        ['tweet_id' => '1884233588465623300'],
        ['tweet_id' => '1883874424451219643'],
        ['tweet_id' => '1882188844906520968'],
        ['tweet_id' => '1882034782244393307'],
        ['tweet_id' => '1881424858015469633'],
        ['tweet_id' => '1880575989534917039'],
        ['tweet_id' => '1879538933236904086'],
    ];

    public function __invoke(Request $request)
    {
        $page = (int)$request->query('page', 1);

        [$items, $meta] = paginate(self::TWEETS, $page, self::PER_PAGE);

        return Inertia::render('Tweets', [
            'tweets' => Inertia::merge($items),
            'meta' => $meta,
        ]);
    }
}
