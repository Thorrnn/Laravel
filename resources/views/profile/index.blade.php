@extends('default')

@section('content')
    <main role="main">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p>{{ __('register.registerList.name') }}: {{$user->name}}</p>
                    <p>{{ __('register.registerList.surname')}}: {{$user->surname}}</p>
                    <p>{{ __('register.registerList.role')}}: {{$user->role}}</p>
                    <p>{{ __('register.registerList.email')}}: {{$user->email}}</p>
                    <p>{{ __('register.registerList.created_at')}}: {{$user->created_at}}</p>
                </div>
                <div>
                    <chartline-component></chartline-component>
                    <example-component></example-component>
                </div>

                <a href="{{url(App\Http\Middleware\LocaleMiddleware::getLocale() .'/')}}" class="btn btn-primary btn-lg active mx-2" role="button" aria-pressed="true">{{ __('nav.navList.home')}}</a>
            </div>
        </div>
    </main>
@endsection
