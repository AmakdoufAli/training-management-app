<?php

namespace App\Http\Controllers;

use App\Models\Participation;
use Illuminate\Http\Request;

class ParticipationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Participation::with('formateur', 'formation')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Participation::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Participation::where('formation_id', $id)->with('formateur', 'formation')->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Participation = Participation::findOrFail($id);
        $Participation->update($request->all());

        return $Participation;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Participation::where('formation_id', $id)->delete();
        return response()->json([], 204);
    }
}
