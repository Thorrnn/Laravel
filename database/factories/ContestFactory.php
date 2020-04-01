<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'name' => $faker->streetName,
        'status' => $faker->randomElement(['finished', 'expectation', 'going', 'canceled']),
        'rules' => $faker->text,
        'date_start' => now(),
        'date_end' => now(),
        'created_at' => now()
    ];
});
