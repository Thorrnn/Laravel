<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('contest_id');
            $table->string('title');
            $table->longText('body');
            $table->string('section');
            $table->enum('status', ['checked', 'ban', 'on_check']);
            $table->text('annotation');
            $table->float('over_rating');
            $table->timestamps();
        });

         Schema::table('articles', function(Blueprint $table){
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

         });

        Schema::table('articles', function(Blueprint $table){
            $table->foreign('contest_id')
                ->references('id')
                ->on('contests')
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
        Schema::dropIfExists('articles');
    }
}
