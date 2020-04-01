<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
class ContestsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $back_2_day = Carbon::now()->subDays(2);
        $back_3_day = Carbon::now()->subDays(3);
        $add_2_day = Carbon::now()->addDay(2);
        $add_4_day = Carbon::now()->addDay(4);
        DB::table('contests')->insert([
            'name' => str_random(50),
            'rules' => str_random(150),
            'status' => 'finished',
            'date_start' => Date($back_2_day),
            'date_end' => Date($back_3_day),
            'created_at' => Date($back_2_day)
        ]);

        DB::table('contests')->insert([
            'name' => str_random(50),
            'rules' => str_random(150),
            'status' => 'canceled',
            'date_start' => Date('Y-m-d H:i:s'),
            'date_end' => Date('Y-m-d H:i:s'),
            'created_at' => Date('Y-m-d H:i:s')
        ]);

        DB::table('contests')->insert([
            'name' => str_random(50),
            'rules' => str_random(150),
            'status' => 'expectation',
            'date_start' => Date('Y-m-d H:i:s'),
            'date_end' => Date($add_4_day),
            'created_at' => Date('Y-m-d H:i:s')
        ]);

        DB::table('contests')->insert([
            'name' => str_random(50),
            'rules' => str_random(150),
            'status' => 'going',
            'date_start' => Date($back_2_day),
            'date_end' => Date($add_4_day),
            'created_at' => Date($back_2_day)
        ]);

    }
}
