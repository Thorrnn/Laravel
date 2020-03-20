<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function (){
   return view('index');
});

Route::get('view', function (){
    return view('view');
});

Route::get('profile/{name?}', function ($name = 'unknown'){
    return 'Name '.$name."<br> Маршрут с необязательными параметрами";
});



Route::get('news/{id}', 'NewsController@pushNews');
