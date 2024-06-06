<?php

namespace App\Http\Controllers;

use App\Models\Institut;
use Illuminate\Http\Request;

class InstitutsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Institut::with('specialites', 'ville')->distinct('nom')->get();
        // $instituts = Institut::with('ville', 'specialites')->get();
        // return response()->json($instituts);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Institut::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Institut::with('specialites', 'ville')->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $institut = Institut::findOrFail($id);
        $institut->update($request->all());

        return $institut;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Institut::destroy($id);
        return 204;
    }
}
