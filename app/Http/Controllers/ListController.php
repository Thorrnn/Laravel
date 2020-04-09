<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class ListController extends Controller
{
    public function index()
    {   App::setlocale('en');
        /* $users = [
             [
                 'name' => 'name1',
                 'surname' => 'surname1',
                 'tel' => 'tel1'
             ],
             [
                 'name' => 'name2',
                 'surname' => 'surname2',
                 'tel' => 'tel2'
             ],
             [
                 'name' => 'name3',
                 'surname' => 'surname3',
                 'tel' => 'tel3'
             ]
         ];*/

        $users = DB::table('users')
            ->where('role','!=','admin')
            ->count();

        dd($users);

        //return view('list', compact('users'));
    }
}
