<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['title', 'body', 'section', 'annotation', 'user_id'];
    protected $guarded = ['status', 'over_rating'];
    protected $attributes = [
        'status'=> 'on_check'
    ];

    public function grades()
    {
        return $this->hasMany(Grade::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
