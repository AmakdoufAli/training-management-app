<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->role = $request->role;

        $pass = bcrypt($request->password);

        $user->password = $pass;

        $user->save();
        return response('user added successfuly');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return User::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $User = User::findOrFail($id);
        $User->update($request->all());

        return $User;
    }
    public function updatePassword(Request $request, string $id)
    {
        $User = User::findOrFail($id);
        $User->password = bcrypt($request->password);
        $User->save();

        return $User;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::destroy($id);
        return 204;
    }

    public function findUser(Request $request)
    {
        if(auth()->attempt(['email'=>$request->email, 'password'=>$request->password])){
            return response()->json(auth()->user());
        }else{
            return response()->json(['res'=>false]);
        }
    }
}
