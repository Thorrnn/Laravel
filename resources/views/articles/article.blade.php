@extends('default')
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
@section('content')
    <main role="main">
        <div class="container-fluid">
            <div class="">
                <div class="container-fluid">
                    <div class="row">
                        @foreach($articles as $article)
                            <div class="col-md-12">
                                <p class="text-right">Дата публикации: {{$article->created_at}}</p>
                                <p class="h1 text-center">{{$article->title}}</p>
                                        <div>
                                            <div class="align-items-center">
                                                <p class="text-center">{{ mb_strtoupper($article->name)  }} {{ mb_strtoupper($article->surname)}}</p>
                                                <p>Ключевые слова: {{mb_strtolower($article->section)}}</p>
                                                <p class="text-monospace text-center">Анотация</p>
                                                <p class="text-monospace">{!!$article->annotation!!}</p>
                                                <p class="text-monospace text-center">Текст</p>
                                                <p class="text-monospace">{!!$article->body !!}</p>
                                                <p class="text-right">Дата публикации: {{$article->created_at}}</p>
                                            </div>
                                        </div>
                        @endforeach
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/articles" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Назад</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </main>
@endsection

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


