<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GradesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('grades')->insert([
            'jury_id' => '3',
            'article_id'=>'1',
            'novelty' => '50',
            'statement' => '50',
            'relevance' => '50',
            'fullness' => '50',
            'aver_rating' => '50',
            'created_at' => Date('Y-m-d H:i:s')
        ]);

    }
}
