@extends('default')
@section('content')
    <main>
        <div class="container">
            <div class="row">
                @foreach($articles as $article)
                    <div class="col-md-12">
                        <p class="text-right">{{ __('tokens.formTokens.publication_date')}}
                            : {{$article->created_at}}</p>
                        <p class="h1 text-center">{{$article->title}}</p>
                        <div class="align-items-center">
                            <p class="text-center">{{ mb_strtoupper($article->name)  }} {{ mb_strtoupper($article->surname)}}</p>
                            <p>{{ __('tokens.formTokens.section')}}: {{mb_strtolower($article->section)}}</p>
                            <p class="text-monospace h4 text-center">{{ __('tokens.formTokens.annotation')}}</p>
                            <p class="text-justify">{!!$article->annotation!!}</p>
                            <p class="text-center h4 text-bold">{{ __('tokens.formTokens.body')}}</p>
                            <p class="text-justify">{!!$article->body !!}</p>
                            <p class="text-right">{{ __('tokens.formTokens.publication_date')}}
                                : {{$article->created_at}}</p>
                        </div>
                    </div>
                    <div class="btn-group justify-content-between align-items-center mx-4">
                        <a href="{{url(App\Http\Middleware\LocaleMiddleware::getLocale() .'/articles')}}"
                           class="btn btn-primary btn-lg active" role="button"
                           aria-pressed="true">{{ __('tokens.formTokens.back')}}</a>
                    </div>
                    @if(Auth::user()->role == 'jury' || Auth::user()->role == 'admin' )
                        <a href="{{route('test', $article->id)}}" class="btn btn-lg active btn btn-success"
                           role="button">{{ __('tokens.formTokens.rate_article')}}</a>
                    @endif
                @endforeach

            </div>
        </div>
    </main>
@endsection
