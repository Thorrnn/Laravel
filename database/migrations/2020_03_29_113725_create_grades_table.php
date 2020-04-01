<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGradesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grades', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('users_jury_id');
            $table->unsignedBigInteger('article_id');
            $table->float('novelty');
            $table->float('statement');
            $table->float('relevance');
            $table->float('fullness');
            $table->timestamps();
        });

         Schema::table('grades', function(Blueprint $table){
             $table->foreign('article_id')
                 ->references('id')
                 ->on('articles')
                 ->onDelete('cascade');

       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grades');
    }
}
