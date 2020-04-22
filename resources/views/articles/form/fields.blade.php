<link href="{{asset('css/summernote.css')}}" rel="stylesheet">

<div class="form-group">
    {!! Form::label('title', __('tokens.formTokens.title')) !!}
    {!! Form::text('title', $article->title ?? null, ['class' => 'form-control']) !!}
</div>

@error('title')
<div class="alert alert-danger">{{ $message }}</div>
@enderror

@if(Auth::user()->role =='admin')
        <div class="form-group">
            {!! Form::label('status', __('tokens.formTokens.status')) !!}
            <input list="status" class="form-control"
                   name="status" value="{{ old('status') ?? 'on_check' }}" autocomplete="status" autofocus>
            <datalist id="status">
                <option value="checked">Проверено
                <option value="on_check">Проверяется
                <option value="ban">Бан
            </datalist>
        </div>
    @error('status')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror
@endif

<div class="form-group">
    {!! Form::label('section', __('tokens.formTokens.section')) !!}
    {!! Form::text('section', $article->section ?? null, ['class' => 'form-control']) !!}
</div>

@error('section')
<div class="alert alert-danger">{{ $message }}</div>
@enderror

<div class="form-group">
    {!! Form::label('annotation', __('tokens.formTokens.annotation')) !!}
    {!! Form::textarea('annotation', $article->annotation ?? null, ['id' =>'annotation', 'class' => 'form-control']) !!}
</div>

@error('annotation')
<div class="alert alert-danger">{{ $message }}</div>
@enderror

<div class="form-group">
    {!! Form::label('body', __('tokens.formTokens.body')) !!}
    {!! Form::textarea('body', $article->body ?? null, ['id' =>'body', 'class' => 'form-control']) !!}
</div>

@error('body')
<div class="alert alert-danger">{{ $message }}</div>
@enderror



<!-- подключаем jquery -->

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>

<!-- подключаем bootstrap.js -->

<script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>

<!-- подключаем сам summernote -->

<script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.7/summernote.js"></script>
<script src={{asset('js/summernote/summernote-ru-RU.js')}}></script>

<script>
    jQuery(function ($) {
        $("#body").summernote({

            height: 300,
            minHeight: 200,
            fontNames: ['Arial', 'Times New Roman', 'Helvetica'],
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript']],
                ['fontsize', ['fontsize']],
                ['fontname', ['fontname']],
                ['table',['table']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']]
            ],
            disableDragAndDrop: true

        });
    });
</script>
<script>
    jQuery(function ($) {
        $("#annotation").summernote({

            height: 300,
            minHeight: 200,
            fontNames: ['Arial', 'Times New Roman', 'Helvetica'],
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript']],
                ['fontsize', ['fontsize']],
                ['fontname', ['fontname']],
                ['table',['table']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']]
            ],
            disableDragAndDrop: true

        });
    });
</script>

