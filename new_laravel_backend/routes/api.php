<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AnimateursController;
use App\Http\Controllers\BrouillonsController;
use App\Http\Controllers\RegionsController;
use App\Http\Controllers\VillesController;
use App\Http\Controllers\FormationsController;
use App\Http\Controllers\FormateursController;
use App\Http\Controllers\InstitutsController;
use App\Http\Controllers\SpecialitesController;
use App\Http\Controllers\SpecInstController;
use App\Http\Controllers\FilieresController;
use App\Http\Controllers\CertificationsController;
use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\EvaluationsController;
use App\Http\Controllers\FormateursFormationsController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\ParticipationsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\UtilisateurController;
use App\Models\Notification;

Route::apiResource('/animateurs', AnimateursController::class);

Route::apiResource('/regions', RegionsController::class);

Route::apiResource('/villes', VillesController::class);

Route::apiResource('/formations', FormationsController::class);

Route::apiResource('/brouillons', BrouillonsController::class);

Route::apiResource('/formateurs', FormateursController::class);

Route::apiResource('/instituts', InstitutsController::class);

Route::apiResource('/specialites', SpecialitesController::class);

Route::apiResource('/spec_inst', SpecInstController::class);

Route::apiResource('/filieres', FilieresController::class);

Route::apiResource('/certifications', CertificationsController::class);

Route::apiResource('/documentations', DocumentationController::class);

Route::apiResource('/evaluations', EvaluationsController::class);

Route::apiResource('/notifications', NotificationsController::class);

Route::apiResource('/participations', ParticipationsController::class);

Route::put('update-formation/{id}', [FormationsController::class, 'updateFormation']);

Route::put('brouillon-publish/{id}', [BrouillonsController::class, 'publish']);

Route::get('/doc/formation/{formationId}', [DocumentationController::class, 'getDocByIdFormation']);

Route::get('/not/formation/{formationId}', [NotificationsController::class, 'getNotByIdFormation']);

Route::post('/formateurs_formations', [FormateursFormationsController::class, 'addParticipation']);

Route::apiResource('/users', UsersController::class);

Route::post('/findUser', [UsersController::class, 'findUser']);

Route::post('/send-email', [MailController::class, 'sendEmail']);

Route::get('/detaching/{id}', [BrouillonsController::class, 'detaching']);

Route::delete('/documentationByIdFormation/{id}', [DocumentationController::class, 'deleteByIdFormation']);

Route::delete('/notificationByIdFormation/{id}', [NotificationsController::class, 'deleteByIdFormation']);





// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
