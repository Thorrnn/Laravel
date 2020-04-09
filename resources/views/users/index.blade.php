@extends('default')

@section('content')
    <main role="main">


        <div class="container-fluid">
            <!-- Example row of columns -->
            <div class="row">
                <div class="col-12">
                    <table class="table">
                        <thead class="thead-inverse">
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Роль</th>
                            <th>Email</th>
                            <th>Email verif at</th>
                            <th>Пароль</th>
                            <th>Дата создания</th>
                            <th>Дата обновления</th>
                            <th>Удалить</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($users as $user)
                            <tr>
                                <td>{{ $user['id'] }}</td>
                                <td>{{ $user['name'] }}</td>
                                <td>{{ $user['surname'] }}</td>
                                <td>{{ $user['role'] }}</td>
                                <td>{{ $user['email'] }}</td>
                                <td>{{ $user['email_verified_at'] }}</td>
                                <td>{{ $user['password'] }}</td>
                                <td>{{ $user['created_at'] }}</td>
                                <td>{{ $user['updated_at'] }}</td>
                                <td>{{ $user['updated_at'] }}</td>
                                <td><a href = 'delete/{{ $user->id }}'>Удалить</a></td>
                            </tr>

                        @empty
                            no users
                        @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div> <!-- /container -->
    </main>
@endsection
