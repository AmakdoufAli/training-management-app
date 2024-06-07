<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use App\Models\Region;
use Illuminate\Http\Request;

class RegionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Region::distinct('nom')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Region::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function countFormation()
    {
        $regions = Region::all();

        if ($regions->isEmpty()) {
            return response()->json(['message' => 'Region not found'], 404);
        }

        $results = [];

        foreach ($regions as $region) {
            $formationCount = $region->villes->reduce(function($carry, $ville) {
                return $carry + $ville->formations->where('etat', 1)->count();
            }, 0);
            $brouillonsCount = $region->villes->reduce(function($carry, $ville) {
                return $carry + $ville->formations->where('etat', 0)->count();
            }, 0);

            if ($formationCount > 0) {
                $results[] = [
                    'region' => $region->nom,
                    'formation_count' => $formationCount,
                    'brouillons_count' => $brouillonsCount,
                ];
            }
        }

        if (empty($results)) {
            return response()->json(['message' => 'No formations found in any region'], 404);
        }

        return response()->json($results);
    }

}
