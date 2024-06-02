<?php

namespace App\Http\Controllers;

use App\Models\Formateur;
use App\Models\Formation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FormateursFormationsController extends Controller
{

    public function addParticipation(Request $request)
    {
        $request->validate([
            'formationId' => 'required|exists:formations,id',
            'formateursIds' => 'required|array',
            'formateursIds.*' => 'exists:formateurs,id',
        ]);

        $formation = Formation::findOrFail($request->formationId);
        $formateursIds = $request->formateursIds;

        DB::beginTransaction();
        try {
            foreach ($formateursIds as $id) {
                $formateur = Formateur::findOrFail($id);
                $formateur->formations()->syncWithoutDetaching($formation->id);
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'An error occurred while adding participation.'], 500);
        }


        return response()->json(['success' => 'Participation added successfully.']);
    }

}
