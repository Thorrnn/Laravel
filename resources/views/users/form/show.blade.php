@extends('default')

@section('content')
<main role="main">
    <div class="container-fluid">
        <div class="row">
            @foreach($users as $user)
            <div class="col-12">
                <p>{{ __('tokens.formTokens.id') }}: {{$user->id}}</p>
                <p>{{ __('register.registerList.name') }}: {{$user->name}}</p>
                <p>{{ __('register.registerList.surname')}}: {{$user->surname}}</p>
                <p>{{ __('register.registerList.role')}}: {{$user->role}}</p>
                <p>{{ __('register.registerList.email')}}: {{$user->email}}</p>
                <p>{{ __('register.registerList.created_at')}}: {{$user->created_at}}</p>
            </div>
            @endforeach
            <a href="{{url(App\Http\Middleware\LocaleMiddleware::getLocale() .'/users')}}" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">{{ __('nav.navList.home')}}</a>
        </div>
    </div>
</main>
@endsection

