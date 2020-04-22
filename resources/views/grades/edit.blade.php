@extends('default')

@section('content')
    <main role="main">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    {!! Form::open(['method' => 'patch' ,'url' => route('grades.update', $grade->id)]) !!}
                    @include('grades.form.fields_update')
                    <div class="form-group">
                        {!! Form::submit('Сохранить', ['class' => 'btn btn-success']); !!}
                        <a href="{{url(App\Http\Middleware\LocaleMiddleware::getLocale() .'/articles')}}" class="btn btn-danger">{{ __('tokens.formTokens.abort')}}</a>
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </main>
@endsection

