<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'category' => str_random(10),
        'description' => str_random(10),
        'created_at'=> now(),
        'date_time'=>now(),
         
    ];
});
