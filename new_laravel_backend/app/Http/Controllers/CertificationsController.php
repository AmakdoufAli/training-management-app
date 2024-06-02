<?php

namespace App\Http\Controllers;

use App\Models\Certification;
use Illuminate\Http\Request;

class CertificationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Certification::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Certification::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Certification::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Certification = Certification::findOrFail($id);
        $Certification->update($request->all());

        return $Certification;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Certification::destroy($id);
        return 204;
    }
}
