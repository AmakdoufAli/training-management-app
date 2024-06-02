<?php

namespace App\Http\Controllers;

use App\Models\Documentation;
use Illuminate\Http\Request;

class DocumentationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Documentation::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Documentation::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Documentation::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Documentation = Documentation::findOrFail($id);
        $Documentation->update($request->all());

        return $Documentation;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Documentation::destroy($id);
        return 204;
    }
}
