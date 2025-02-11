<?php

declare(strict_types=1);

if (! function_exists('paginate')) {
    function paginate(array $data, int $page, int $perPage = 10): array
    {
        $items = collect($data)
            ->slice(($page - 1) * $perPage, $perPage)
            ->toArray();

        $items = array_values($items);

        $meta = [
            'current_page' => $page,
            'last_page' => (int)ceil(count($data) / $perPage),
            'total' => count($data),
        ];

        return [$items, $meta];
    }
}
