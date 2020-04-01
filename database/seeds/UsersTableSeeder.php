<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => str_random(10),
            'surname'=>str_random(15),
            'role' => 'admin',
            'email'=>str_random(15).'@gmail.com',
            'password'=>bcrypt('secret'),
            'remember_token'=>str_random(15),
            'created_at' => Date('Y-m-d H:i:s')

        ]);

        DB::table('users')->insert([
            'name' => str_random(10),
            'surname'=>str_random(15),
            'role' => 'moderator',
            'email'=>str_random(15).'@gmail.com',
            'password'=>bcrypt('secret'),
            'remember_token'=>str_random(15),
            'created_at' => Date('Y-m-d H:i:s')

        ]);

        DB::table('users')->insert([
            'name' => str_random(10),
            'surname'=>str_random(15),
            'role' => 'competitor',
            'email'=>str_random(15).'@gmail.com',
            'password'=>bcrypt('secret'),
            'remember_token'=>str_random(15),
            'created_at' => Date('Y-m-d H:i:s')

        ]);

        DB::table('users')->insert([
            'name' => str_random(10),
            'surname'=>str_random(15),
            'role' => 'jury',
            'email'=>str_random(15).'@gmail.com',
            'password'=>bcrypt('secret'),
            'remember_token'=>str_random(15),
            'created_at' => Date('Y-m-d H:i:s')

        ]);
    }
}
