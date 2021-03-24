<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'admin', 
                'email' => 'admin@admin.com',
                'email_verified_at' => '2021-03-11 16:25:49',
                'password' => '$2y$10$3gRqHH7ziLbYLAwndQPwy.5gG1sjYTyDkYUObvaxLZWjvQfKUuwYa',
                'remember_token' => NULL,
                'created_at' => '2020-09-05 06:32:55',
                'updated_at' => '2020-09-05 06:32:55', 
                
            )
        ));
    }
}
