<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {

        $users = User::all();

        return view('users.index', compact('users'));
    }

    public function store(Request $request)
    {
        $users = new User();
        $users->fill($request);
        $users->save();

    }
    public function show($id)
    {
        $articles = DB::table('users')
            ->select('name', 'surname' )
            ->get();
        //return view('articles.article', compact('articles'));
    }

    public function destroy($id) {
        DB::delete('delete from users where id = ?',[$id]);
        echo "Record deleted successfully.<br/>";
        echo '<a href="/delete-records">Click Here</a> to go back.';
    }
}
