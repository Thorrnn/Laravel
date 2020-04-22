<?php

namespace App\Http\Controllers;


use App\Http\Requests\Grade\UpdateRequest;
use App\Http\Requests\Grade\StoreRequest;
use App\Models\Article;
use App\Models\Grade;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class GradeController extends Controller
{

    public function index()
    {
        $user_id = Auth::id();
        $grades = DB::table('grades')
            ->select('grades.novelty', 'grades.statement', 'grades.relevance', 'grades.fullness', 'articles.title', 'grades.aver_rating', 'grades.created_at', 'grades.id')
            ->where('jury_id','=',$user_id)
            ->leftJoin('articles','grades.article_id','=','articles.id')
            ->get();
        return view('grades.index', compact('grades'));
    }
    public function admindex()
    {
        $grades = DB::table('grades')
            ->select('users.name','users.surname','grades.novelty', 'grades.statement', 'grades.relevance', 'grades.fullness', 'articles.title', 'grades.aver_rating', 'grades.created_at', 'grades.id')
            ->leftJoin('articles','grades.article_id','=','articles.id')
            ->leftJoin('users', 'grades.jury_id', '=', 'users.id')
            ->get();


        return view('grades.admin.index', compact('grades'));
    }
    public function show($id)
    {
        $grades = DB::table('grades')
            ->select('*')
            ->get();
       // return view('articles.article', compact('articles'));
    }
    public function destroy(Grade $grade)
    {
        $grade->delete();

        return redirect()->route('grades.index');
    }

    public function test($id){

        //dd($id);
        return view('grades.create')->with('id', $id);

    }
    public function create()
    {
        return view('grades.create');
    }
    public function edit(Grade $grade)
    {
        return view('grades.edit', compact('grade'));
    }
    public function update(UpdateRequest $request, Grade $grade)
    {
        $data = $request->only(['novelty','statement','relevance', 'fullness']);
        $data['aver_rating'] = ($data['novelty']+ $data['statement']+ $data['relevance']+  $data['fullness'])/4;

        $grade->update($data);


        return redirect()->route('grades.index');
    }
    public function store(StoreRequest $request)
    {
        $user_id = Auth::id();
        $articles = Article::all();
        $data = $request->only(['novelty','statement','relevance', 'fullness', 'jury_id', 'article_id','aver_rating']);
        $data['jury_id'] = $user_id;
        $data['aver_rating'] = ($data['novelty']+ $data['statement']+ $data['relevance']+  $data['fullness'])/4;
       // dd($article_id);
        //$data['article_id'] = $article_id;
        //dd($data);
        Grade::create($data);
        return redirect()->route('articles.index',compact('articles'));
    }
}
