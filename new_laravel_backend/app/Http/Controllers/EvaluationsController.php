<?php

namespace App\Http\Controllers;

use App\Models\Evaluation;
use Illuminate\Http\Request;

class EvaluationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Evaluation::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Evaluation::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Evaluation::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Evaluation = Evaluation::findOrFail($id);
        $Evaluation->update($request->all());

        return $Evaluation;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Evaluation::destroy($id);
        return 204;
    }
}
