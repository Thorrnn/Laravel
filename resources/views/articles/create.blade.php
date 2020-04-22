@extends('default')

@section('content')

    <main role="main">

        <div class="container">

            <div class="row">
                <div class="col-12">
                    {!! Form::open(['url' => route('articles.store')]) !!}
                    @include('articles.form.fields')
                    <div class="form-group">
                        {!! Form::submit( __('tokens.formTokens.create'), ['class' => 'btn btn-success']); !!}
                        <a href="{{url(App\Http\Middleware\LocaleMiddleware::getLocale() .'/articles')}}" class="btn btn-danger">{{ __('tokens.formTokens.abort')}}</a>
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </main>
@endsection
