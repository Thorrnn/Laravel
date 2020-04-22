@extends('default')

@section('content')
    <main role="main">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <a class="btn btn-primary btn-lg mb-2" href="{{ route('articles.create') }}"
                       role="button">{{__('tokens.formTokens.create')}}</a>
                </div>
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead class="thead-inverse thead-dark text-center">
                        <tr>
                            <th style="width: 1%">{{ __('tokens.formTokens.id')}}</th>
                            <th style="width: 9%">{{ __('tokens.formTokens.id_user')}}</th>
                            <th style="width: 50%">{{ __('tokens.formTokens.title')}}</th>
                            <th style="width: 4%">{{ __('tokens.formTokens.status')}}</th>
                            <th style="width: 12%">{{ __('tokens.formTokens.created_at')}}</th>
                            <th style="width: 10%">{{ __('tokens.formTokens.action')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($articles as $article)
                            <tr class="text-center">
                                <td>{{ $article->id}}</td>
                                <td>{{ $article->user_id }}</td>
                                <td class="text-left">{{ $article->title }}</td>
                                <td>{{ $article->status }}</td>
                                <td>{{ $article->created_at }}</td>
                                <td>
                                    <form id="destroy-form" action="{{ route('articles.destroy', $article->id) }}"
                                          method="POST">
                                        @csrf
                                        @method('delete')
                                        <button class="btn btn-danger btn-sm" style="width:95%"
                                                type="submit">{{ __('tokens.formTokens.delete') }}</button>
                                    </form>
                                    <a href="{{ route('articles.edit', $article->id) }}"
                                       class="btn btn-primary btn-sm mt-1"
                                       style="width:95%">{{ __('tokens.formTokens.edit') }}</a>
                                </td>
                            </tr>
                        @empty
                            no users
                        @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
@endsection
