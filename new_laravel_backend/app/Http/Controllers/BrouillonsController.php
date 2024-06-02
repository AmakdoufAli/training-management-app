<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\Request;

class BrouillonsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Formation::where('etat', 0)->with('formateurs')->get();
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
        return Formation::findOrFail($id);
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

    public function publish($id)
    {
        $brouillon = Formation::findOrFail($id);
        $brouillon->etat = $brouillon->etat == 0 ? 1 : 0 ;
        $brouillon->save();
        return $brouillon;
    }

    public function detaching($id)
    {
        $formation = Formation::with('formateurs')->find($id);
        if ($formation) {
            foreach($formation->formateurs as $formateur){
                $formation->formateurs()->detach($formateur->id);
            }
        }
    }
}
