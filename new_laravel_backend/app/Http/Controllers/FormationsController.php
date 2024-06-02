<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\Request;

class FormationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Formation::where('etat', 1)->with('animateur', 'ville', 'specialite', 'formateurs')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Formation::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Formation::with('animateur', 'ville', 'specialite', 'formateurs')->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $formation = Formation::findOrFail($id);
        $formation->update($request->all());

        return $formation;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Formation::destroy($id);
        return 204;
    }

    public function updateFormation(Request $request, $id)
    {
        $formation = Formation::findOrFail($id);
        $formation->animateur_id = $request->animateurId;
        $formation->save();
    }
}
