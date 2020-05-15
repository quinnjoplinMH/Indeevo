<?php

class UserValidator {
    
    static function exe() {
        init();
        validateRecords();
    }
    
    function init() {
        session_start();
        if( isset($_SESSION['user_id']) ){
            header("Location: ../index.html");
        }
    }
    
    function fetchRecords() {
            $records = $conn->prepare('SELECT id,email,password FROM users WHERE email = :email');
            $records->bindParam(':email', $_POST['email']);
            $records->execute();
            return $records->fetch(PDO::FETCH_ASSOC);
    }
    
    function validateRecords() {
        require 'database.php';
        
        if(!empty($_POST['email']) && !empty($_POST['password'])):

            $results = fetchRecords();

            $message = '';

            if(count($results) > 0 && password_verify($_POST['password'], $results['password']) ){

                $_SESSION['user_id'] = $results['id'];
                header("Location: ../index.html");

            } else {
                $message = 'Sorry, those credentials do not match';
            }

        endif;
    }
}

UserValidator.exe();
?>