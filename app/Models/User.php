<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable
{
    use Notifiable;
    protected $fillable =['name', 'surname', 'email', 'password','remember_token'];
    protected $guarded = ['role'];
    protected $attributes = [
        'role'=> 'competitor'
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
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
