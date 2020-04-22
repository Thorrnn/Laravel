@extends('default')

@section('content')
    <main>
        <div class="container">
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <a class="btn btn-primary btn-lg mb-2" href="{{ route('articles.create') }}" role="button">{{ __('tokens.formTokens.create')}} </a>
                        </div>
                        @foreach($articles as $article)
                            <div class="col-md-12">
                                <div class="card mb-4 shadow-sm">
                                    <div class="card-body">
                                        <p class="card-title h4 text-center"><a class="text-uppercase text-decoration-none" href="{{url(App\Http\Middleware\LocaleMiddleware::getLocale() .'/articles/'.$article->id)}}"> {{ $article->title }}</a></p>
                                        <div>
                                            <div class="align-items-center">
                                                <p>{{__('article.navList.author')}}:{{$article->name}} {{$article->surname}}</p>
                                                <p>{{__('tokens.formTokens.section')}}: {{$article->section}}</p>
                                            </div>
                                            <p class="text-monospace">{!!$article->annotation!!}</p>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <a href="{{url(App\Http\Middleware\LocaleMiddleware::getLocale() .'/articles/'.$article->id)}}" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">{{__('tokens.formTokens.detail')}}</a>
                                            </div>
                                        </div>
                                        <p class="text-right">{{__('tokens.formTokens.created_at')}}: {{$article->created_at}}</p>
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

