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


use App\Http\Controllers\Controller;

Route::get('/list','ListController@index');
Route::get('about','AboutController@index');
Route::get('/grades','InsertGradesController@insert');
Route::get('/','MainController@index');
Route::resource('/articles','ArticleController');
Route::get('/profile', 'ProfileController@index');
//Route::get('myarticles', 'UserArticleController@index');
//Route::get('myarticles/{id}', 'UserArticleController@show')->name('id');
//Route::get('myarticles/create', 'ArticleUserController@create');
Route::resource('/users','UserController');
Route::get('users','UserController@index');
Route::get('delete/{id}','UserController@destroy');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
