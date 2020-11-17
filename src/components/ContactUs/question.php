<?php
       if(isset($_POST['email']) && isset($_POST['message'])) {
           
            $sender = $_POST['email'];
            $msg = nl2br($_POST['message']);

            $subject = "Wiadomość ze strony drabektransport.pl od ".$nadawca;

            $receiver = "przykladowyadres@drabektransport.pl";
            $from = $sender; 
			$headers = "From: $from\n";
            $headers .= "MIME-Version: 1.0\n";
            $headers .= "Content-type: text/html; charset=utf-8 \n";
            $message = 'Wiadomość od: '.$sender.' <br> <p>'.$msg.'</p>';


                if(mail($receiver, $subject, $message, $headers)) {
                    echo "send";
                }
       } else {
        echo "error";
    };
?>