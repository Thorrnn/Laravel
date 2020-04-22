<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ResultController extends Controller
{
    public function index()
    {
        $results = DB::table('grades')
            ->select(DB::raw('avg(grades.aver_rating) as aver, grades.article_id, articles.title,  users.name, users.surname, users.email'))
            ->leftJoin('articles', 'article_id', '=', 'articles.id')
            ->leftJoin('users', 'articles.user_id', '=', 'users.id')
            ->groupBy(['grades.article_id', 'articles.title','users.name', 'users.surname', 'users.email'])
            ->orderByDesc('aver')
            ->get();
            //dd($results);
        return view('results.index', compact('results'));

    }
}
