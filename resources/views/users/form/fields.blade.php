<div class="form-group">
    {!! Form::label('name', __('register.registerList.name')) !!}
    {!! Form::text('name', $user->name ?? null, ['class' => 'form-control']) !!}
</div>

@error('name')
<div class="alert alert-danger">{{ $message }}</div>
@enderror

<div class="form-group">
    {!! Form::label('surname', __('register.registerList.surname')) !!}
    {!! Form::text('surname', $user->surname ?? null, ['class' => 'form-control']) !!}
</div>

@error('surname')
<div class="alert alert-danger">{{ $message }}</div>
@enderror

<div class="form-group">
    {!! Form::label('password', __('register.registerList.password')) !!}
    {!! Form::text('password', $user->password ?? null, ['class' => 'form-control']) !!}
</div>

@error('password')
<div class="alert alert-danger">{{ $message }}</div>
@enderror

<div class="form-group">
    {!! Form::label('role', __('register.registerList.role')) !!}
    <input list="role" class="form-control"
           name="role" value="{{ old('role') }}" required autocomplete="role" autofocus>
    <datalist id="role">
        <option value="jury">Член жюри
        <option value="competitor">Конкурсант
        <option value="admin">Админ
    </datalist>

</div>

@error('role')
<div class="alert alert-danger">{{ $message }}</div>
@enderror

<div class="form-group">
    {!! Form::label('email', __('register.registerList.email')) !!}
    {!! Form::text('email', $user->email ?? null, ['class' => 'form-control']) !!}
</div>

@error('email')
<div class="alert alert-danger">{{ $message }}</div>
@enderror



