<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'article_id' => rand(1,2),
        'jury_id' => rand(1,2),
        'novelty' => rand(1,100),
        'statement' => rand(1,100),
        'relevance' => rand(1,100),
        'fullness' => rand(1,100),
        'aver_rating' => rand(1,100),
        'created_at' => now()
    ];
});
