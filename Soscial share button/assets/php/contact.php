<?php $name = $_POST['Navn'];
$etternavn = $_POST['Etternavn'];
$email = $_POST['E-post'];
$tlf = $_POST['TLF'];
$message = $_POST['Melding'];
$formcontent="Fra: $name \n Melding: $melding";
$recipient = "matts@mowu.no";
$subject = "Kontakt skjema";
$mailheader = "Fra: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Tusen takk!";
?>