<?php

namespace App\Http\Controllers;

use App\Models\Filiere;
use Illuminate\Http\Request;

class FilieresController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Filiere::distinct('nom')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Filiere::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Filiere::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Filiere = Filiere::findOrFail($id);
        $Filiere->update($request->all());

        return $Filiere;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Filiere::destroy($id);
        return 204;
    }
}
