<?php

namespace App\Http\Controllers;

use App\Models\Formateur;
use Illuminate\Http\Request;

class FormateursController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Formateur::all();
        $formateurs = Formateur::with('institut.ville', 'specialite', 'formations')->get();

        return response()->json($formateurs);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Formateur::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Formateur::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $formateur = Formateur::findOrFail($id);
        $formateur->update($request->all());

        return $formateur;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Formateur::destroy($id);
        return 204;
    }
}
