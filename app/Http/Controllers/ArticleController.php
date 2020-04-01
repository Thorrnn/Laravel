<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
    public function get()
    {

        $articles = DB::table('articles')->get()->pluck('title');
        foreach ($articles as $item) {
            echo $item . "<br>";
        }
    }

    public function index()
    {
        $articles = Article::all(['title','annotation','created_at']);
        return view('articles.index', compact('articles'));
    }

     public function store(Request $request)
    {
        $article = new Article();
        $article->fill($request);
        $article->save();

    }
}
