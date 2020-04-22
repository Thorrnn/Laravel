@extends('default')

@section('content')
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead class="thead-inverse text-center thead-dark">
                        <tr>
                            <th>{{__('tokens.formTokens.top')}}</th>
                            <th>{{ __('tokens.formTokens.title')}}</th>
                            <th>{{ __('tokens.formTokens.author')}}</th>
                            <th>{{ __('tokens.formTokens.email_author')}}</th>
                            <th>{{ __('tokens.formTokens.aver_rating')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($results as $result)
                            <tr class="text-center">
                                <td class="text-black-100">{{$loop->iteration }}</td>
                                <td class="text-left"><a class="text-decoration-none" href="{{url(App\Http\Middleware\LocaleMiddleware::getLocale() .'/articles/'.$result->article_id)}}">{{ $result->title }}</a></td>
                                <td>{{ $result->name }} {{$result->surname}}</td>
                                <td>{{ $result->email }}</td>
                                <td>{{ $result->aver }}</td>
                            </tr>
                        @empty
                            {{__('tokens.formTokens.no_users')}}
                        @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
@endsection


