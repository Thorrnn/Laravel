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
            'users_jury_id' => '4',
            'article_id'=>'1',
            'novelty' => '1',
            'statement' => '1',
            'relevance' => '1',
            'fullness' => '1',
            'created_at' => Date('Y-m-d H:i:s')
        ]);

        $user = factory(Users::class, 3)->create();
        dd($user);
    }
}
