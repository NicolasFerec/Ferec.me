<?php
	var_dump($_POST);
	$headers = 	'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n";
	$headers .=	'To: Nicolas Ferec <nicolas@ferec.me>' . "\r\n";
	$headers .=	'Reply-to: ' . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";
	$headers .= 'X-Mailer: PHP/' . phpversion();
	echo $headers;
	$message = htmlspecialchars($_POST['message']);

	if(mail('nicolas@ferec.me', 'Mail from ferec.me contact form', $message, $headers)){
		echo 'Success';
	}else{
		echo 'Error';
	};

?>