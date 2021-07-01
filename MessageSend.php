<?php
$servername = "localhost";
$username = "id16971578_talha";
$password = "uwz25@lx@#$@#$$%%L5";
$database = "id16971578_portoflio";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully";


 if(isset($_POST['submitform'])){
  $name = trim(stripslashes($_POST['contactName']));
   $email = trim(stripslashes($_POST['contactEmail']));
   $subject = trim(stripslashes($_POST['contactSubject']));
   $contact_message = trim(stripslashes($_POST['contactMessage']));
     $insertQuery = "insert into Message(name,email,subject, message)
      values ( '$name',  '$email',  '$subject',   '$contact_message')";
      $executeQuery =mysqli_query($con,$insertQuery);

 }
