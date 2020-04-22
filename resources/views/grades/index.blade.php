@extends('default')

@section('content')
    <main role="main">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead class="thead-inverse thead-dark text-center">
                        <tr>
                            <th>{{ __('tokens.formTokens.title')}}</th>
                            <th>{{__('tokens.formTokens.novelty')}}</th>
                            <th>{{__('tokens.formTokens.statement')}}</th>
                            <th>{{__('tokens.formTokens.relevance')}}</th>
                            <th>{{__('tokens.formTokens.fullness')}}</th>
                            <th>{{ __('tokens.formTokens.aver_rating')}}</th>
                            <th>{{ __('tokens.formTokens.created_at')}}</th>
                            <th>{{ __('tokens.formTokens.action')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($grades as $grade)
                            <tr class="text-center">
                                <td class="text-left">{{ $grade->title}}</td>
                                <td>{{ $grade->novelty}}</td>
                                <td>{{ $grade->statement}}</td>
                                <td>{{ $grade->relevance}}</td>
                                <td>{{ $grade->fullness}}</td>
                                <td>{{ $grade->aver_rating}}</td>
                                <td>{{ $grade->created_at }}</td>
                                <td>
                                    <form id="destroy-form" action="{{ route('grades.destroy', $grade->id) }}" method="POST">
                                        @csrf
                                        @method('delete')
                                        <button class="btn btn-danger btn-sm" style="width:100%" type="submit">{{__('tokens.formTokens.delete')}}</button>
                                    </form>
                                    <a href = "{{ route('grades.edit', $grade->id) }}"   class="btn btn-primary btn-sm mt-1"
                                       style="width:100%">{{__('tokens.formTokens.edit')}}</a>
                                </td>
                            </tr>
                        @empty
                            no grades
                        @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
@endsection

