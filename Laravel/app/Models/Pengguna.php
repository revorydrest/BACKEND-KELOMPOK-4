<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Pengguna extends Authenticatable {
  use HasFactory, HasApiTokens;

  protected $guarded = [
    "id",
    "created_at",
    "updated_at"
  ];
}