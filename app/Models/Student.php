<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'last_name',
        'control',
        'email',
        'program_id'
    ];

    public function program()
    {
        return $this->belongsTo(program::class);
    }

}
