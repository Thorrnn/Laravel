<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all(['name','surname','email']);
        return view('users.index', compact('users'));
    }

    public function store(Request $request)
    {
        $users = new User();
        $users->fill($request);
        $users->save();

    }
}
