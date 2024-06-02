<?php

namespace App\Http\Controllers;

use App\Models\Specialite;
use Illuminate\Http\Request;

class SpecialitesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Specialite::with('instituts')->distinct('nom')->get();
        // return Specialite::distinct('nom')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $existingSpecialite = Specialite::where('nom', $request->input('nom'))->first();
        if ($existingSpecialite) {
            return $existingSpecialite;
        }
        $spec = Specialite::create($request->all());
        return $spec;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Specialite::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Specialite = Specialite::findOrFail($id);
        $Specialite->update($request->all());

        return $Specialite;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Specialite::destroy($id);
        return 204;
    }
}
