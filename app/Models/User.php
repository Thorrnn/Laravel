<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class User extends Model
{
    protected $fillable =['name', 'surname', 'email', 'password','remember_token'];
    protected $guarded = ['role'];
    protected $attributes = [
        'role'=> 'competitor'
    ];

    public function grades()
    {
        return $this->hasMany(Grade::class);
    }
    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
