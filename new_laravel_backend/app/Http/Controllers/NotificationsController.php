<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Notification::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Notification::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Notification::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Notification = Notification::findOrFail($id);
        $Notification->update($request->all());

        return $Notification;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Notification::destroy($id);
        return 204;
    }

    public function getNotByIdFormation($formation_id)
    {
        return Notification::where('formation_id', $formation_id)->get();
    }


    public function deleteByIdFormation(string $id)
    {
        $noti = Notification::where('formation_id', $id)->first();
        $noti->delete();
        return response('Notification Bien Supprimé');
    }

}
