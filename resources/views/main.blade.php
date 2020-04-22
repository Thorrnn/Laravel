@extends('default')

@section('content')
    <main role="main">
        <div class="container">
            <h1 class=" h1 display-1 text-center">{{__('tokens.formTokens.welcome')}}</h1>
            <p class="p-4">{{__('tokens.formTokens.welcome_p')}}</p>
            <example-component></example-component>

        </div>
    </main>
@endsection
