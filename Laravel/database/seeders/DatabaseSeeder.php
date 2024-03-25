<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pengguna;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    
    Pengguna::create([
        "name" => "Kevin Mahardika Z",
        "email" => "kevin@gmail.com",
        "password" => bcrypt("testing12345"),
        "phone" => "081221814173",
      ]);
    }
}
