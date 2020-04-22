<?php

namespace App\Http\Controllers;

use App\Http\Requests\Articles\UpdateRequest;
use App\Http\Requests\Articles\StoreRequest;
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
    public function show($id)
    {
        $articles = DB::table('articles')
            ->select('users.id as id_user'  ,'users.name', 'users.surname', 'articles.title', 'articles.annotation', 'articles.created_at', 'articles.section', 'articles.body', 'articles.id')
            ->where('articles.id','=',$id)
            ->leftJoin('users', 'user_id', '=', 'users.id')
            ->get();
        return view('articles.store', compact('articles'));
    }

    public function admindex()
    {


        $articles = DB::table('articles')

            ->select('title', 'annotation', 'created_at', 'section','id', 'user_id', 'status')
            ->get();
        return view('articles.admin.index', compact('articles'));

    }
    public function admdestroy(Article $article)
    {
        $article->delete();
        return view('articles.admin.index', compact('articles'));
    }

    public function index()
    {
        //$articles = Article::all(['title','annotation','created_at','user_id']);

        $articles = DB::table('articles')
            ->leftJoin('users', 'user_id', '=', 'users.id')
            ->select('users.name', 'users.surname', 'articles.title', 'articles.annotation', 'articles.created_at', 'articles.section','articles.id')
            ->where('articles.status','=','checked')
            ->get();
        return view('articles.index', compact('articles'));

    }



    public function destroy(Article $article)
    {
        $article->delete();
        return redirect()->back();
    }

    public function create()
    {

        if(Auth::check())
        {

            return view('articles.create');
        }
        else{
            return redirect('login');
        }

    }

     public function store(StoreRequest $request)
    {
        $user_id = Auth::id();
        $data =$request->only(['title','body', 'section', 'annotation', 'status']);
        $data['user_id'] = $user_id;
        Article::create($data);
        return redirect()->route('articles.index');

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

    public function edit(Article $article)
    {
        return view('articles.edit', compact('article'));
    }

    public function update(UpdateRequest $request, Article $article)
    {
        $data = $request->only(['title','body','annotation', 'section', 'status']);
        $role = Auth::user()->role;
        if($role != 'admin'){
            $data['status'] = 'on_check';
        }
        $article->update($data);
        return redirect()->route('articles.index');
    }
}

