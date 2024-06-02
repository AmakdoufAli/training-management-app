<?php

namespace App\Http\Controllers;

use App\Models\Ville;
use Illuminate\Http\Request;

class VillesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Ville::distinct('nom')->get();
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
        return Ville::findOrFail($id);
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
}
