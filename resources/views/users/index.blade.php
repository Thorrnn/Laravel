@extends('default')

@section('content')
    <main role="main">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <a class="btn btn-primary btn-lg mb-2" href="{{ route('users.create') }}" role="button">{{__('tokens.formTokens.create')}}</a>
                </div>
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead class="thead-inverse thead-dark">
                        <tr class="text-center">
                            <th>{{ __('tokens.formTokens.id')}}</th>
                            <th>{{ __('register.registerList.name')}}</th>
                            <th>{{ __('register.registerList.surname')}}</th>
                            <th>{{ __('register.registerList.role')}}</th>
                            <th>{{ __('register.registerList.email')}}</th>
                            <th>{{ __('register.registerList.created_at')}}</th>
                            <th>{{ __('tokens.formTokens.action')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($users as $user)
                            <tr class="text-center">
                                <td>{{ $user['id'] }}</td>
                                <td>{{ $user['name'] }}</td>
                                <td>{{ $user['surname'] }}</td>
                                <td>{{ $user['role'] }}</td>
                                <td>{{ $user['email'] }}</td>
                                <td>{{ $user['created_at'] }}</td>
                                <td>
                                    <form id="destroy-form" action="{{ route('users.destroy', $user->id) }}" method="POST">
                                        @csrf
                                        @method('delete')
                                        <button class="btn btn-danger btn-sm" type="submit" style="width:100%">{{__('tokens.formTokens.delete')}}</button>
                                    </form>
                                    <a href = "{{ route('users.edit', $user->id) }}" class="mt-1 btn btn-primary btn-sm" style="width:100%">{{__('tokens.formTokens.edit')}}</a>
                                </td>
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
