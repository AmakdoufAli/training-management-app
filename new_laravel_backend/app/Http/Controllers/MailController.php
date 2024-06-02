<?php

namespace App\Http\Controllers;

use App\Mail\InviteMail;
use App\Models\Formation;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {

        $formation = Formation::with('animateur', 'ville', 'specialite', 'formateurs')->findOrFail($request->formationId);
        $msg = Notification::where('formation_id', $request->formationId)->first()->contenu;
        foreach($formation->formateurs as $formateur){
            $details = [
                'formation' => $formation,
                'formateur' => $formateur,
                'msg' => $msg
            ];
            Mail::to($formateur->email)->send(new InviteMail($details));
        };

        return response('Email sent successfully');
    }
}
