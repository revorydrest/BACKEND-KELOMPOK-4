<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\Pengguna;

class AuthenticationController extends Controller {
  public function login(Request $request) {
    $request->validate([
      "email" => "required|string",
      "password" => "required|string",
    ]);

    $pengguna = Pengguna::firstWhere("email", $request->email);

    if(!$pengguna || !Hash::check($request->password, $pengguna->password)) {
      return response()->json([
        "message" => "Bad Credentials!"
      ], Response::HTTP_NOT_FOUND);
    }

    $token = $pengguna->createToken("sanctum_token")->plainTextToken;

    return response()->json([
      "message" => "Successfully logged in",
      "token" => $token
    ], Response::HTTP_OK);
  }

  // public function logout() {
  //   auth()->user()->tokens()->delete();

  //   return response()->json([
  //     "message" => "Successfully logged out."
  //   ], Response::HTTP_OK);
  // }
  
  // public function getUser() {
  //   return response()->json([
  //     "user" => auth()->user()
  //   ], Response::HTTP_OK);
  // }
}