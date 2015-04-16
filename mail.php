<?php

	$headers = 	'From: ' . $_POST['email'] . "\r\n" .
			    'X-Mailer: PHP/' . phpversion();
	$message = htmlspecialchars($_POST['message']);

	mail('nicolas@ferec.me', 'Mail from ferec.me contact form', $message, $headers);

?>