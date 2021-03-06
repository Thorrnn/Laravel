<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function profile()
    {
        if(Auth::check())
        {
            $user = Auth::user();
            return view('profile.index', compact('user'));
        }
        else{
            return redirect('login');
        }
    }
    public function articles()
    {
        if(Auth::check())
        {
             $user_id = Auth::id();

            $articles = DB::table('articles')
                ->select('articles.title', 'articles.annotation', 'articles.created_at', 'articles.section','articles.id', 'articles.status')
                ->where('articles.user_id','=',$user_id)
                ->get();
            return view('profile.articles', compact('articles'));

        }
        else{
            return redirect('login');
        }
    }
    public function grades()
    {
        if(Auth::check())
        {
            $user_id = Auth::id();

            $articles = DB::table('grades')
                ->select('articles.title', 'articles.annotation', 'articles.created_at', 'articles.section','articles.id', 'articles.status')
                ->where('articles.user_id','=',$user_id)
                ->get();
            return view('profile.articles', compact('articles'));

        }
        else{
            return redirect('login');
        }
    }
/*
    public function show($id)
    {
        $articles = DB::table('articles')
            ->select('users.name', 'users.surname', 'articles.title', 'articles.annotation', 'articles.created_at', 'articles.section', 'articles.body')
            ->where('articles.id','=',$id)
            ->leftJoin('users', 'user_id', '=', 'users.id')
            ->get();
        return view('articles.article', compact('articles'));
    }

    public function articles()
    {
        $id = Auth::id();
        $articles = DB::table('articles')
            ->leftJoin('users', 'user_id', '=', 'users.id')
            ->where('user_id','=',$id)
            ->select('users.name', 'users.surname', 'articles.title', 'articles.annotation', 'articles.created_at', 'articles.section','articles.id')
            ->get();
        return view('articles.index', compact('articles'));
    }
    public function created()
    {
        return view('profile.create');
    }*/
}
