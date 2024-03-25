<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pengguna;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class PenggunaController extends Controller
{
    public function index(){
        $pengguna = Pengguna::all();

        return response()->json([
          "message" => "Successfully fetched students.",
          "data" => $pengguna
        ], Response::HTTP_OK);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
          "name" => "required|string",
          "email" => "required|string|email:rfc,dns|unique:penggunas,email",
          "password" => "required|string",
          "phone" => "required|string",
        ]);
    
        if ($validator->fails()) {
          return response()->json([
            "message" => "Failed creating a new user.",
            "errors" => $validator->errors()
          ], Response::HTTP_NOT_ACCEPTABLE);
        }
    
        $validated = $validator->validated();
        $validated["password"] = bcrypt($validated["password"]);
    
        try {
          $createdPengguna = Pengguna::create($validated);
        } catch (\Exception $e) {
          return response()->json([
            "message" => "Failed creating a new user.",
            "error" => $e->getMessage()
          ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    
        return response()->json([
          "message" => "Successfully created a new user.",
          "data" => $createdPengguna
        ], Response::HTTP_CREATED);
    }

    public function update(Request $request, $id) {
    $validator = Validator::make($request->all(), [
            "name" => "string",
            "email" => "string|email:rfc,dns|unique:penggunas,email",
            "password" => "string",
            "phone" => "string",
          ]);
      
          if ($validator->fails()) {
            return response()->json([
              "message" => "Failed creating a new user.",
              "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
          }
      
          $validated = $validator->validated();
          if (isset($validated["password"])) {
            $validated["password"] = bcrypt($validated["password"]);
          }

          try {
            $pengguna = Pengguna::findOrFail($id);
            $pengguna->update($validated);
          } catch (\Exception $e) {
            return response()->json([
              "message" => "Failed creating a new student.",
              "error" => $e->getMessage()
            ]);
          }
      
          return response()->json([
            "message" => "Successfully updated a student",
            "data" => $pengguna
        ]);
        
    }

    public function show($id) {
        $pengguna = Pengguna::findOrFail($id);
    
        return response()->json([
          "message" => "Successfully fetched a student.",
          "data" => $pengguna
        ]);
    }

    public function destroy($id) {
        $pengguna = Pengguna::findOrFail($id);
    
        $pengguna->delete();
    
        return response()->json([
          "message" => "Successfully deleted a student with id {$id}"
        ]);
      
    }
}


