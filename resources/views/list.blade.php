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
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Телефон</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($users as $user)
                            <tr>
                                <td>{{ $user['name'] }}</td>
                                <td>{{ $user['surname'] }}</td>
                                <td>{{ $user['tel'] }}</td>
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
