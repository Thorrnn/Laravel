<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;


class GradeController extends Controller
{

    public function store(Request $request)
    {
        $grades = new Grade();
        $grades->fill($request);
        $grades->save();

    }
}
