<div class="form-group">
    {!! Form::label('novelty', __('tokens.formTokens.novelty')) !!}
    {!! Form::text('novelty', $grade->novelty ?? null, ['class' => 'form-control']) !!}
</div>

@error('novelty')
<div class="alert alert-danger">{{ $message }}</div>
@enderror

<div class="form-group">
    {!! Form::label('statement', __('tokens.formTokens.statement')) !!}
    {!! Form::text('statement', $grade->statement ?? null, ['class' => 'form-control']) !!}
</div>

@error('statement')
<div class="alert alert-danger">{{ $message }}</div>
@enderror

<div class="form-group">
    {!! Form::label('relevance', __('tokens.formTokens.relevance')) !!}
    {!! Form::text('relevance', $grade->relevance ?? null, ['class' => 'form-control']) !!}
</div>

@error('relevance')
<div class="alert alert-danger">{{ $message }}</div>
@enderror

<div class="form-group">
    {!! Form::label('fullness', __('tokens.formTokens.fullness')) !!}
    {!! Form::text('fullness', $grade->fullness ?? null, ['class' => 'form-control']) !!}
</div>

@error('fullness')
<div class="alert alert-danger">{{ $message }}</div>
@enderror
