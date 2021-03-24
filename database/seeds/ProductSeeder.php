<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = $this->command->ask('Please enter Limit for Seeder.');
        $x = 0;
        $categories = array(
            'Category1',  'Category2',  'Category3',  'Category4',  'Category5',
        );
        while($x < $count){
        DB::table('products')->insert([
            'name' => Str::random(10),
            'category' => $categories[array_rand($categories)],
            'description' => Str::random(10),   
            'date_time'=>now(),
            'created_at'=> now(),
        ]);
       $x ++;
             }
    }
}
