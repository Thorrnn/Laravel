@extends('default')
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
@section('content')
    <main role="main">
        <div class="container-fluid">
            <div class="album py-5 bg-light">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="btn-group">
                                <a href="/myarticles/create" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Создать статью</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        @foreach($articles as $article)
                            <div class="col-md-12">
                                <div class="card mb-4 shadow-sm">
                                    <div class="card-body">
                                        <p class="card-header text-center"><a href="/articles/{{$article->id}}"> {{ $article->title }}</a></p>
                                        <div>
                                            <div class="align-items-center">
                                                <p>Ключевые слова: {{$article->section}}</p>
                                            </div>
                                            <p class="text-monospace">{{$article->annotation}}</p>
                                        </div>

                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <a href="myarticles/{{$article->id}}" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Подробнее</a>
                                            </div>
                                        </div>
                                        <p class="text-right">Дата публикации: {{$article->created_at}}</p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
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


