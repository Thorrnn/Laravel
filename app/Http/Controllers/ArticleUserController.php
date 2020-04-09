<?php

namespace App\Http\Controllers;


use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ArticleUserController extends Controller
{

    public function show($id)
    {
        $articles = DB::table('articles')
            ->select('users.name', 'users.surname', 'articles.title', 'articles.annotation', 'articles.created_at', 'articles.section', 'articles.body')
            ->where('articles.id','=',$id)
            ->leftJoin('users', 'user_id', '=', 'users.id')
            ->get();
        return view('articles.article', compact('articles'));
    }

    public function index()
    {
        $id = Auth::id();
        $articles = DB::table('articles')
            ->leftJoin('users', 'user_id', '=', 'users.id')
            ->where('user_id','=',$id)
            ->select('users.name', 'users.surname', 'articles.title', 'articles.annotation', 'articles.created_at', 'articles.section','articles.id')
            ->get();
        return view('user_articles.index', compact('articles'));
    }
    public function create()
    {
        return view('user_articles.create');
    }

    public function store(Request $request)
    {
        /*$article = new Article();
        $article->fill($request);
        $article->save();*/
        $user_id = Auth::id();
        Article::create(['title' => $request->title, 'body' => $request->text, 'user_id' => $user_id, 'section' => $request->section, 'annotation' => $request->annotation, 'over_rating' => 0, 'updated_at' => Carbon::now()->toDateTimeString(), 'created_at' => Carbon::now()->toDateTimeString()]);
        return view('articlesuser.index.index');

    }
}
