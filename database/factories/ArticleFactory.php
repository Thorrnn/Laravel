<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'user_id' => rand(1,2),
        'title' => $faker->title,
        'body' => $faker->text,
        'section' => $faker->text,
        'status' => $faker->randomElement(['checked', 'ban', 'on_check']),
        'annotation' => $faker->text,
        'created_at' => now()
    ];
});
