<?php

namespace App\Http\Controllers;

use App\Models\Animateur;
use Illuminate\Http\Request;

class AnimateursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Animateur::with('specialite')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Animateur::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Animateur::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Animateur = Animateur::findOrFail($id);
        $Animateur->update($request->all());

        return $Animateur;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Animateur::destroy($id);
        return 204;
    }
}
