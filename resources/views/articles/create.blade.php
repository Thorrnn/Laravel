@extends('default')

@section('content')


    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">


    <link href="{{ URL::asset('css/summernote.css')}}" rel="stylesheet">

    <script src={{ URL::asset('js/summernote/summernote-ru-RU.min.js')}}></script>
<main>

<div class=" container">
    <div class="row">
        <div class="col-12">
            <form action=" {{ route('articles.store') }} " method="POST">
                {{ csrf_field() }}
                <div>
                    <label for="title" class="text-center">Тема</label>
                    <input type="text" name="title" id="title" class="form-control">
                </div>
                <div class="form-group">
                    <label for="section" class="text-center">Ключевые слова</label>
                    <input type="text" name="section" id="section" class="form-control">
                </div>
                <div>
                    <label for="text" class="text-center">Аннотация</label>
                    <textarea name="annotation" id="annotation"></textarea>
                </div>
                <div>
                    <label for="text">Текст</label>
                    <textarea name="text" id="text"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Добавить</button>
            </form>
        </div>
    </div>
</div>
    <!-- подключаем jquery -->

    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>

    <!-- подключаем bootstrap.js -->

    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>

    <!-- подключаем сам summernote -->

    <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.7/summernote.js"></script>



    <script>
        jQuery(function($) {
            $("#text").summernote({
                lang:'ru-RU',
                height:300,
                minHeight:200,
                fontNames:['Arial','Times New Roman','Helvetica'],
                disableDragAndDrop:true

            });
        });
    </script>
    <script>
        jQuery(function($) {
            $("#annotation").summernote({
                lang:'ru-RU',
                height:300,
                minHeight:200,
                fontNames:['Arial','Times New Roman','Helvetica'],
                disableDragAndDrop:true

            });
        });
    </script>

</main>
@endsection
