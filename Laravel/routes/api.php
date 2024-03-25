<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PenggunaController;
use App\Http\Controllers\AuthenticationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get("/pengguna", [PenggunaController::class, "index"]);
Route::post("/pengguna", [PenggunaController::class, "store"]);
Route::put("/pengguna/{id}", [PenggunaController::class, "update"]);
Route::get("/pengguna/{id}", [PenggunaController::class, "show"]);
Route::delete("/pengguna/{id}", [PenggunaController::class, "destroy"]);

Route::post("/auth/login", [AuthenticationController::class, "login"]);

// Route::middleware('auth:sanctum')->get("/auth/user", [AuthenticationController::class, "getUser"]);
Route::middleware('auth:sanctum')->post("/auth/logout", [AuthenticationController::class, "logout"]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
