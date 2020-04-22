@extends('default')

@section('content')
    <main role="main">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead class="thead-inverse thead-dark text-center">
                        <tr>
                            <th>{{__('tokens.formTokens.id')}}</th>
                            <th>{{__('tokens.formTokens.Id_Jury')}}</th>
                            <th>{{__('tokens.formTokens.Id_articles')}}</th>
                            <th>{{__('tokens.formTokens.novelty')}}</th>
                            <th>{{__('tokens.formTokens.statement')}}</th>
                            <th>{{__('tokens.formTokens.relevance')}}</th>
                            <th>{{__('tokens.formTokens.fullness')}}</th>
                            <th>{{__('tokens.formTokens.created_at')}}</th>
                            <th>{{__('tokens.formTokens.action')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($grades as $grade)
                            <tr class="text-center">
                                <td>{{ $grade->id }}</td>
                                <td>{{ $grade->name }} {{ $grade->surname }}</td>
                                <td>{{ $grade->title}}</td>
                                <td>{{ $grade->novelty }}</td>
                                <td>{{ $grade->statement }}</td>
                                <td>{{ $grade->relevance }}</td>
                                <td>{{ $grade->fullness }}</td>
                                <td>{{ $grade->created_at }}</td>
                                <td>
                                    <form id="destroy-form" action="{{ route('grades.destroy', $grade->id) }}" method="POST">
                                        @csrf
                                        @method('delete')
                                        <button class="btn btn-danger btn-sm" style="width:97%" type="submit">{{__('tokens.formTokens.delete')}}</button>
                                    </form>
                                    <a href = "{{ route('grades.edit', $grade->id) }}" style="width:97%" class="btn btn-primary btn-sm mt-1">{{__('tokens.formTokens.edit')}}</a>
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

