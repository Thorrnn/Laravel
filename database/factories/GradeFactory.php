<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'article_id' => rand(1,2),
        'users_jury_id' => rand(1,2),
        'novelty' => rand(1,5),
        'statement' => rand(1,5),
        'relevance' => rand(1,5),
        'fullness' => rand(1,5),
        'created_at' => now()
    ];
});
