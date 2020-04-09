<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\User;
use Carbon\Traits\Date;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class ArticleController extends Controller
{
    public function get()
    {

        $articles = DB::table('articles')->get()->pluck('title');
        foreach ($articles as $item) {
            echo $item . "<br>";
        }
    }

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
        //$articles = Article::all(['title','annotation','created_at','user_id']);

        $articles = DB::table('articles')
            ->leftJoin('users', 'user_id', '=', 'users.id')
            ->select('users.name', 'users.surname', 'articles.title', 'articles.annotation', 'articles.created_at', 'articles.section','articles.id')
            ->get();
        return view('articles.index', compact('articles'));

    }
    public function create()
    {
        return view('articles.create');
    }

     public function store(Request $request)
    {
        $user_id = Auth::id();
        Article::create(['title' => $request->title, 'body' => $request->text, 'user_id' => $user_id, 'section' => $request->section, 'annotation' => $request->annotation, 'over_rating' => 0, 'updated_at' => Carbon::now()->toDateTimeString(), 'created_at' => Carbon::now()->toDateTimeString()]);
        return view('main');

    }

    public function upload(Request $request)
    {
        $path =  public_path().'\images\\';
        $file = $request->file('file');
        $filename = str_random(20) .'.' . $file->getClientOriginalExtension() ?: 'png';
        $img = Image::make($file);
        $img->save($path . $filename);
        echo '/images/'.$filename;
    }
}

