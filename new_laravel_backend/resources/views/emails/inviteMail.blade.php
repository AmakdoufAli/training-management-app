<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invitation à la formation</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #007bff; text-align: center; font-size: 24px;">Bonjour {{ $details['formateur']['prenom'] }} {{ $details['formateur']['nom'] }},</h1>

        <p style="margin: 10px 0; text-align: center; font-size: 16px;">{{ $details['msg'] }}</p>

        <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong style="color: #000;">Titre :</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{ $details['formation']['titre'] }}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong style="color: #000;">Nombre d'heures :</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{ $details['formation']['nbr_heures'] }}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong style="color: #000;">Nombre de jours :</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{ $details['formation']['nbr_jours'] }}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong style="color: #000;">Date de début :</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{ $details['formation']['date_debut'] }}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong style="color: #000;">Date de fin :</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{ $details['formation']['date_fin'] }}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong style="color: #000;">Adresse :</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{ $details['formation']['adresse'] }}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong style="color: #000;">Ville :</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{ $details['formation']['ville']['nom'] }} ({{ $details['formation']['ville']['codeP'] }})</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong style="color: #000;">Spécialité :</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{ $details['formation']['specialite']['nom'] }}</td>
            </tr>
        </table>

        <div style="margin-top: 20px; padding: 20px; background-color: #f1f1f1; border-radius: 8px;">
            <h2 style="color: #007bff; font-size: 20px;">Animateur</h2>
            <p style="margin: 10px 0;"><strong style="color: #000;">Nom :</strong> {{ $details['formation']['animateur']['nom'] }} {{ $details['formation']['animateur']['prenom'] }}</p>
            <p style="margin: 10px 0;"><strong style="color: #000;">Secteur :</strong> {{ $details['formation']['animateur']['secteur'] }}</p>
            <p style="margin: 10px 0;"><strong style="color: #000;">Téléphone :</strong> {{ $details['formation']['animateur']['tel'] }}</p>
            <p style="margin: 10px 0;"><strong style="color: #000;">Email :</strong> {{ $details['formation']['animateur']['email'] }}</p>
        </div>

        <p style="margin: 20px 0; text-align: center; font-size: 16px;">Merci de confirmer votre présence en répondant à cet email.</p>

        <div style="margin-top: 20px; text-align: center;">
            <p style="margin: 10px 0;">Cordialement,</p>
            <p style="margin: 10px 0;">L'équipe de formation</p>
        </div>
    </div>
</body>
</html>
