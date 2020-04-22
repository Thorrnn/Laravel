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


Route::get('/', function () {
    return redirect('/'. App\Http\Middleware\LocaleMiddleware::$mainLanguage);
});
Route::get('/start/data-chart', 'StartController@chartData');


Route::group(['prefix' => App\Http\Middleware\LocaleMiddleware::getLocale()], function(){

    Route::get('about','AboutController@index');
    Route::get('/test/{id}', 'GradeController@test')->name('test');
    Route::get('adm/grades','GradeController@admindex');
    Route::resource('grades','GradeController');
    Route::get('/','MainController@index');
    Route::get('adm/articles/destroy','ArticleController@admdestroy');
    Route::get('adm/articles','ArticleController@admindex');
    Route::resource('/results','ResultController');
    Route::resource('/articles','ArticleController')->middleware('auth');
    Route::get('/profile', 'ProfileController@profile');
    Route::get('profile/articles', 'ProfileController@articles');
    Route::resource('users','UserController')->middleware('role:admin');
//Route::get('delete/{id}','UserController@destroy');

    Auth::routes();

    Route::get('/home', 'HomeController@index')->name('home');
});


//Переключение языков
Route::get('setlocale/{lang}', function ($lang) {

    $referer = Redirect::back()->getTargetUrl();; //URL предыдущей страницы
    $parse_url = parse_url($referer, PHP_URL_PATH); //URI предыдущей страницы

    //разбиваем на массив по разделителю
    $segments = explode('/', $parse_url);

    //Если URL (где нажали на переключение языка) содержал корректную метку языка
    if (in_array($segments[1], App\Http\Middleware\LocaleMiddleware::$languages)) {

        unset($segments[1]); //удаляем метку
    }

    //Добавляем метку языка в URL (если выбран не язык по-умолчанию)
    array_splice($segments, 1, 0, $lang);

    //формируем полный URL
    $url = Request::root().implode("/", $segments);

    //если были еще GET-параметры - добавляем их
    if(parse_url($referer, PHP_URL_QUERY)){
        $url = $url.'?'. parse_url($referer, PHP_URL_QUERY);
    }
    return redirect($url); //Перенаправляем назад на ту же страницу

})->name('setlocale');
