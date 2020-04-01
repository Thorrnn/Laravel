<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'title' => $faker->title,
        'body' => $faker->text,
        'section' => $faker->text,
        'status' => $faker->randomElement(['checked', 'ban', 'on_check']),
        'password' => $faker->password,
        'remember_token' => Str::random(10),
        'created_at' => now()
    ];
});
