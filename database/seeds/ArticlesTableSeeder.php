<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('articles')->insert([
            'user_id' => '1',
            'title' => str_random(15),
            'body' => str_random(100),
            'section' => str_random(15),
            'status' => 'checked',
            'annotation' => str_random(15),
            'over_rating' => '1',
            'created_at' => Date('Y-m-d H:i:s')

        ]);
        DB::table('articles')->insert([
            'user_id' => '2',
            'title' => str_random(15),
            'body' => str_random(100),
            'section' => str_random(15),
            'status' => 'ban',
            'annotation' => str_random(15),
            'over_rating' => '5',
            'created_at' => Date('Y-m-d H:i:s')

        ]);
        DB::table('articles')->insert([
            'user_id' => '1',
            'title' => str_random(15),
            'body' => str_random(100),
            'section' => str_random(15),
            'status' => 'on_check',
            'annotation' => str_random(15),
            'over_rating' => '1',
            'created_at' => Date('Y-m-d H:i:s')

        ]);
    }
}
