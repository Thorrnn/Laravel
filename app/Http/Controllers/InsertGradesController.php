<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class InsertGradesController extends Controller
{
    public function insert()
    {

        DB::table('grades')->insert(
          [
              [
                'users_jury_id'=>'4',
                  'article_id' => '1',
                  'novelty' => '3',
                  'statement' => '2',
                  'relevance' => '4',
                  'fullness' => '5',
                  'created_at' => Date('Y-m-d H:i:s')
              ],
              [
                  'users_jury_id'=>'4',
                  'article_id' => '2',
                  'novelty' => '3',
                  'statement' => '5',
                  'relevance' => '2',
                  'fullness' => '5',
                  'created_at' => Date('Y-m-d H:i:s')
              ]
          ]
        );

    }
}
