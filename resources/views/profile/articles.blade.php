@extends('default')

@section('content')
    <main role="main">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <a class="btn btn-primary btn-lg mb-2" href="{{ route('articles.create') }}" role="button">{{__('tokens.formTokens.create')}}</a>
                </div>
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead class="thead-inverse thead-dark text-center">
                        <tr>
                            <th>{{ __('tokens.formTokens.title')}}</th>
                            <th>{{ __('tokens.formTokens.status')}}</th>
                            <th>{{ __('tokens.formTokens.created_at')}}</th>
                            <th>{{ __('tokens.formTokens.action')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($articles as $article)
                            <tr class="text-center">
                                <td>{{ $article->title }}</td>
                                <td>{{ $article->status }}</td>
                                <td>{{ $article->created_at }}</td>
                                <td>
                                    <form id="destroy-form" action="{{ route('articles.destroy', $article->id) }}"
                                          method="POST">
                                        @csrf
                                        @method('delete')
                                        <button class="btn btn-danger btn-sm" style="width:80%"
                                                type="submit">{{ __('tokens.formTokens.delete') }}</button>
                                    </form>
                                    <a href="{{ route('articles.edit', $article->id) }}"
                                       class="btn btn-primary btn-sm mt-1"
                                       style="width:80%">{{ __('tokens.formTokens.edit') }}</a>
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

